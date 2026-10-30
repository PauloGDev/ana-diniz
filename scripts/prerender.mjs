import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = process.cwd()
const server = await createServer({ configFile: resolve(root, 'vite.config.js'), optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true }, appType: 'custom' })
try {
  const { App: ServerApp } = await server.ssrLoadModule('/src/App.jsx')
  let html = await readFile(resolve(root, 'dist/index.html'), 'utf8')
  html = html.replace('<!--app-html-->', renderToString(React.createElement(ServerApp)))
  const siteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (siteUrl && /^https:\/\//i.test(siteUrl)) {
    const canonical = `<link rel="canonical" href="${siteUrl}/" />`
    const social = `<meta property="og:type" content="website" /><meta property="og:locale" content="pt_BR" /><meta property="og:site_name" content="Ana Diniz | Advocacia" /><meta property="og:title" content="Ana Diniz | Advocacia com clareza e cuidado" /><meta property="og:description" content="Orientação jurídica conduzida com escuta atenta, comunicação transparente e respeito à história de cada pessoa." /><meta property="og:url" content="${siteUrl}/" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="Ana Diniz | Advocacia com clareza e cuidado" /><meta name="twitter:description" content="Orientação jurídica conduzida com escuta atenta, comunicação transparente e respeito à história de cada pessoa." />`
    html = html.replace('</head>', `${canonical}${social}</head>`)
  }
  await writeFile(resolve(root, 'dist/index.html'), html)
} finally {
  await server.close()
}
