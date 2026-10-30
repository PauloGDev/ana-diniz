import React, { useEffect, useState } from 'react'

const Icon = ({ name, className = '' }) => {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (name === 'arrow') return <svg {...common}><path d="M4 12h15M13 5l7 7-7 7" /></svg>
  if (name === 'menu') return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  if (name === 'close') return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>
  if (name === 'check') return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>
  if (name === 'whatsapp') return <svg {...common} viewBox="0 0 448 512" fill="currentColor" stroke="none"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-99 0-102.1 83.1-185.2 185.3-185.2 49.4 0 95.9 19.3 130.8 54.2 34.9 34.9 56.2 81.4 56.1 130.8 0 102.1-85 185.7-187.7 185.7zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18s-8.8-2.8-12.5 2.8-14.3 18-17.6 21.8-6.5 4.2-12 1.4-23.4-8.6-44.6-27.5c-16.5-14.7-27.6-32.9-30.8-38.4s-.3-8.5 2.5-11.2c2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2s.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9-19.4 19-19.4 46.3 19.9 53.7 22.6 57.4 39.1 59.7 94.6 83.7c13.2 5.7 23.5 9.1 31.5 11.7 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4-5.1-4.2-10.6-6.9z" /></svg>
  return null
}

const waUrl = 'https://wa.me/556530255858'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Av.%20Historiador%20Rubens%20de%20Mendon%C3%A7a%2C%202254%2C%20Ed.%20American%20Business%20Center%2C%2011%C2%BA%20andar%2C%20sala%201105%2C%20Cuiab%C3%A1%2C%20MT'
const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.1685190052767!2d-56.077312799999994!3d-15.5826426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db14abca5f0fb%3A0x42c1e004e4c9ec53!2sEdif%C3%ADcio%20American%20Business%20Center!5e0!3m2!1spt-BR!2sbr!4v1793385902527!5m2!1spt-BR!2sbr'
const navLinks = [['#usucapiao', 'A usucapião'], ['#analise', 'Como funciona'], ['#sobre', 'Sobre a Dra. Ana'], ['#duvidas', 'Dúvidas']]

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const targets = document.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' })

    document.documentElement.dataset.motionReady = 'true'
    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      delete document.documentElement.dataset.motionReady
    }
  }, [])
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ana Diniz Advocacia, início">
          <img src="/marca-ana-diniz-transparente.png" alt="" width="60" height="60" />
          <span><strong>Ana Diniz</strong><small>ADVOCACIA</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="navegacao-principal" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
        <nav id="navegacao-principal" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          {navLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href={waUrl} target="_blank" rel="noreferrer">Fale com a equipe <Icon name="arrow" className="h-4 w-4" /></a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img className="hero-photo" src="/images/hero-residencial.webp" alt="Fachada de uma residência contemporânea" width="1368" height="1824" fetchPriority="high" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <span className="eyebrow" data-reveal><i /> USUCAPIÃO · DIREITO IMOBILIÁRIO</span>
            <h1 id="hero-title">O imóvel é seu na prática.<br /><em>E no papel?</em></h1>
            <p>Se você mora há anos em um imóvel sem escritura no seu nome, a usucapião pode ser um caminho para buscar a regularização. Cada situação precisa de análise individual.</p>
            <a className="button-primary" href={waUrl} target="_blank" rel="noreferrer">Conte a história do seu imóvel <Icon name="arrow" className="h-4 w-4" /></a>
            <div className="hero-credentials"><span>Dra. Ana Carolina Diniz</span><i /> <span>OAB/MT 9.623</span><i /> <span>21 anos de atuação</span></div>
          </div>
          <a className="hero-scroll" href="#situacoes"><span>SAIBA MAIS</span><b aria-hidden="true">↓</b></a>
        </section>

        <section className="situations section-pad" id="situacoes">
          <div className="section-label" data-reveal><span>01</span><span>VOCÊ PODE SE RECONHECER</span></div>
          <div className="situation-layout" data-reveal>
            <div className="situation-visual"><img src="/images/casa-nas-maos.webp" alt="Ilustração de uma casa apoiada sobre uma mão" width="2500" height="2500" loading="lazy" /><span className="image-caption">A HISTÓRIA DO IMÓVEL IMPORTA</span></div>
            <div className="situation-copy"><h2>Uma situação que merece ser olhada de perto.</h2><p>Vizinhos mudam, papéis se perdem e a história do imóvel pode ficar mais difícil de reconstruir. Talvez você se reconheça em uma destas situações:</p>
              <ul className="check-list">
                <li><Icon name="check" /> Comprou com contrato de gaveta ou recibo, mas o imóvel nunca passou para o seu nome.</li>
                <li><Icon name="check" /> Mora há muitos anos no imóvel e tem contas ou IPTU, mas não tem escritura.</li>
                <li><Icon name="check" /> O antigo proprietário faleceu ou não é mais localizado.</li>
                <li><Icon name="check" /> Cuida de um terreno ou imóvel há anos e quer entender como organizar essa situação.</li>
                <li><Icon name="check" /> Precisa vender, financiar ou reformar e pediram documentos que você ainda não tem.</li>
              </ul>
              <a className="text-link" href={waUrl} target="_blank" rel="noreferrer">Converse com a equipe <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section className="understand section-pad" id="usucapiao">
          <div className="section-label" data-reveal><span>02</span><span>ENTENDA O CAMINHO</span></div>
          <div className="understand-layout" data-reveal>
            <div className="understand-copy"><h2>Usucapião, em poucas palavras.</h2><p>É um instituto jurídico relacionado ao reconhecimento da propriedade a partir de uma posse que atenda aos requisitos legais. A possibilidade e o procedimento dependem das características do imóvel, da história da posse e dos documentos disponíveis.</p><p>Por isso, situações que parecem parecidas podem exigir análises diferentes. Uma conversa inicial ajuda a organizar os fatos e identificar o que ainda precisa ser verificado.</p><div className="note-box">Esta página é informativa e não substitui a análise individual de cada caso.</div></div>
            <figure className="document-visual"><img src="/images/analise-documentos.webp" alt="Lupa sobre documentos, ilustrando a análise da documentação do imóvel" width="1349" height="1166" loading="lazy" /><figcaption>DOCUMENTOS, HISTÓRICO E CONTEXTO</figcaption></figure>
          </div>
        </section>

        <section className="possibilities section-pad">
          <div className="section-label" data-reveal><span>03</span><span>POR QUE REGULARIZAR</span></div>
          <div className="possibilities-layout" data-reveal>
            <div className="possibilities-copy"><h2>O que muda quando a situação do imóvel é regularizada?</h2><p>Entender o caminho possível pode ajudar a planejar os próximos passos para o imóvel e para a família.</p>
              <div className="benefit-list"><article data-reveal><b>01</b><div><h3>Mais clareza para negociar</h3><p>A documentação regularizada pode facilitar uma venda ou outras operações formais, conforme cada situação.</p></div></article><article data-reveal><b>02</b><div><h3>Patrimônio mais organizado</h3><p>Organizar a situação do imóvel ajuda a planejar decisões patrimoniais e familiares.</p></div></article><article data-reveal><b>03</b><div><h3>Uma história documentada</h3><p>A análise reúne informações e registros para compreender a relação com o imóvel.</p></div></article></div>
            </div>
            <div className="possibilities-image"><img src="/images/casa-nas-maos.webp" alt="Casa simbolizando o cuidado com o patrimônio familiar" width="2500" height="2500" loading="lazy" /><span>REGULARIZAÇÃO COMEÇA PELA ANÁLISE</span></div>
          </div>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="section-label" data-reveal><span>04</span><span>ATUAÇÃO PROFISSIONAL</span></div>
          <div className="about-layout" data-reveal><div className="about-art"><img src="/images/dra-ana-retrato-1.jpg" alt="Dra. Ana Carolina Diniz em seu escritório" width="720" height="1280" loading="lazy" /><span className="about-mark">AD</span></div>
            <div className="about-copy"><span className="eyebrow">DRA. ANA CAROLINA DINIZ · OAB/MT 9.623</span><h2>Um olhar jurídico atento à realidade do imóvel.</h2><p>A Dra. Ana Carolina Diniz atua há 21 anos no direito imobiliário e conhece também o dia a dia do mercado imobiliário. A análise considera o que precisa ser compreendido juridicamente e as informações que podem ser importantes para os próximos passos.</p><p>Regularizar um imóvel começa por entender sua história, a documentação disponível e os pontos que precisam de confirmação.</p><div className="experience"><strong>21</strong><span>ANOS DE ATUAÇÃO<br />EM DIREITO IMOBILIÁRIO</span></div></div>
          </div>
        </section>

        <section className="coverage">
          <img src="/images/regiao-imovel.webp" alt="Fachada contemporânea de uma residência" width="1800" height="1200" loading="lazy" />
          <div className="coverage-shade" aria-hidden="true" />
          <div className="coverage-content" data-reveal><div className="section-label"><span>05</span><span>ATENDIMENTO EM MATO GROSSO</span></div><h2>Atendimento presencial em Cuiabá e online.</h2><p>Atendimento relacionado a imóveis em:</p><ul className="city-list"><li>Cuiabá</li><li>Várzea Grande</li><li>Chapada dos Guimarães</li><li>Lucas do Rio Verde</li><li>Jaciara</li><li>Rondonópolis</li></ul><a className="button-light" href={waUrl} target="_blank" rel="noreferrer">Fale com a equipe <Icon name="arrow" className="h-4 w-4" /></a></div>
        </section>

        <section className="process section-pad" id="analise">
          <div className="section-label" data-reveal><span>06</span><span>COMO FUNCIONA</span></div>
          <div className="process-layout" data-reveal><div><h2>Um primeiro passo organizado.</h2><p>O envio de informações ajuda a organizar o atendimento. Não representa contratação nem conclusão sobre o caso.</p><a className="button-primary" href={waUrl} target="_blank" rel="noreferrer">Iniciar conversa pelo WhatsApp <Icon name="arrow" className="h-4 w-4" /></a><figure className="process-portrait"><img src="/images/dra-ana-retrato-2.jpg" alt="Dra. Ana Carolina Diniz pronta para atender" width="720" height="1280" loading="lazy" /><figcaption>Atendimento atento a cada história.</figcaption></figure></div>
            <ol className="steps"><li data-reveal><b>1</b><div><h3>Você conta o contexto</h3><p>A equipe faz algumas perguntas iniciais sobre o imóvel e sua situação.</p></div></li><li data-reveal><b>2</b><div><h3>A equipe organiza o atendimento</h3><p>A Lia, assistente da equipe, confirma as informações e combina a conversa pelo WhatsApp oficial.</p></div></li><li data-reveal><b>3</b><div><h3>A Dra. Ana analisa as possibilidades</h3><p>Na conversa, são explicados os pontos que podem ser avaliados e o que ainda precisa ser verificado.</p></div></li><li data-reveal><b>4</b><div><h3>Presencial ou online</h3><p>A conversa pode acontecer no escritório em Cuiabá ou por videochamada.</p></div></li></ol>
          </div>
        </section>

        <section className="faq section-pad" id="duvidas">
          <div data-reveal><div className="section-label"><span>07</span><span>DÚVIDAS FREQUENTES</span></div><h2>Antes de dar o próximo passo.</h2><p className="faq-aside">Uma conversa inicial ajuda a compreender o contexto. Cada caso depende de análise individual.</p></div>
          <div className="faq-list" data-reveal><details><summary>Quais informações ajudam na primeira conversa?<span>+</span></summary><p>A cidade do imóvel, há quanto tempo você está nele e quais registros possui podem ajudar a organizar o atendimento. A equipe orienta sobre os próximos passos; não envie documentos por esta página.</p></details><details><summary>O imóvel precisa estar em uma das cidades atendidas?<span>+</span></summary><p>A atuação informada contempla imóveis em Cuiabá, Várzea Grande, Chapada dos Guimarães, Lucas do Rio Verde, Jaciara e Rondonópolis. Fale com a equipe para esclarecer sua situação.</p></details><details><summary>A conversa inicial significa contratação?<span>+</span></summary><p>Não. O envio de informações ou o primeiro contato não representa contratação nem conclusão sobre os requisitos do caso.</p></details><details><summary>O atendimento pode ser online?<span>+</span></summary><p>Sim. A conversa pode acontecer por videochamada ou presencialmente no escritório em Cuiabá.</p></details></div>
        </section>

        <section className="final-cta"><span className="eyebrow" data-reveal>ANA DINIZ ADVOCACIA · USUCAPIÃO</span><h2 data-reveal>O primeiro passo é entender<br /><em>a história do seu imóvel.</em></h2><p data-reveal>Converse com a equipe e saiba como organizar as informações para uma análise.</p><a className="button-light" data-reveal href={waUrl} target="_blank" rel="noreferrer">Conte a história do seu imóvel <Icon name="arrow" className="h-4 w-4" /></a></section>

        <section className="map-section section-pad" id="localizacao">
          <div className="map-heading" data-reveal><div><div className="section-label"><span>08</span><span>LOCALIZAÇÃO</span></div><h2>Estamos em Cuiabá.</h2><p>Atendimento presencial no endereço do escritório ou online, por videochamada.</p></div><a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <Icon name="arrow" className="h-4 w-4" /></a></div>
          <iframe className="office-map" title="Mapa do escritório da Dra. Ana Carolina Diniz em Cuiabá" src={mapsEmbedUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio"><img src="/marca-ana-diniz-transparente.png" alt="" width="58" height="72" /><span><strong>Ana Diniz</strong><small>ADVOCACIA</small></span></a>
          <div className="footer-column footer-professional"><span className="footer-kicker">PROFISSIONAL RESPONSÁVEL</span><strong>Dra. Ana Carolina Diniz</strong><span>OAB/MT 9.623</span><span>21 anos de atuação em direito imobiliário</span></div>
          <address className="footer-column footer-address"><span className="footer-kicker">ENDEREÇO</span><span>Av. Historiador Rubens de Mendonça, 2254</span><span>Ed. American Business Center, 11º andar, sala 1105</span><span>Aclimação · Cuiabá/MT · CEP 78050-040</span><a className="footer-map-link" href={mapsUrl} target="_blank" rel="noreferrer">Ver no Google Maps <Icon name="arrow" className="h-4 w-4" /></a></address>
          <div className="footer-column footer-contact"><span className="footer-kicker">CONTATO</span><a href="tel:+556530255858">(65) 3025-5858</a><a href={waUrl} target="_blank" rel="noreferrer">WhatsApp oficial <Icon name="arrow" className="h-4 w-4" /></a></div>
        </div>
        <p className="legal-note">Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos. Cada caso depende de análise individual.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Ana Diniz Advocacia · Todos os direitos reservados</span><a href="#inicio">Voltar ao início ↑</a></div>
      </footer>
      <a className="whatsapp-float" href={waUrl} target="_blank" rel="noreferrer" aria-label="Falar com a equipe da Dra. Ana pelo WhatsApp"><Icon name="whatsapp" className="h-6 w-6" /><span>WhatsApp</span></a>
    </>
  )
}
