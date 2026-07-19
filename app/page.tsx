import { ArrowIcon } from "@/components/ArrowIcon";
import { BitmapField } from "@/components/BitmapField";
import { BrandMark } from "@/components/BrandMark";
import { SystemDiagram } from "@/components/SystemDiagram";

const capabilities = [
  {
    index: "01",
    title: "CRM Hub",
    text: "O centro de comando da operação. Clientes, negociações e rotinas reunidos em uma interface que fala a língua do seu time.",
    meta: "Estratégia / Produto / Dados",
    className: "capability capability--hub",
  },
  {
    index: "02",
    title: "Automação inteligente",
    text: "Menos tarefas mecânicas. Mais fluxo. Desenhamos automações que atravessam áreas e mantêm pessoas no controle.",
    meta: "Fluxos / Operação / Escala",
    className: "capability capability--automation",
  },
  {
    index: "03",
    title: "Agentes de IA",
    text: "Inteligência aplicada onde ela muda o trabalho: agentes com contexto, limites claros e acesso seguro ao conhecimento da empresa.",
    meta: "IA / Contexto / Governança",
    className: "capability capability--ai",
  },
  {
    index: "04",
    title: "Integrações",
    text: "Conectamos ferramentas, dados e equipes para que a informação circule sem remendos e sem retrabalho.",
    meta: "APIs / Dados / Ecossistema",
    className: "capability capability--integrations",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Entender",
    text: "Entramos na operação para enxergar regras, exceções e oportunidades reais.",
  },
  {
    number: "02",
    title: "Desenhar",
    text: "Transformamos complexidade em arquitetura, fluxos e uma experiência direta.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Entregamos em ciclos curtos, com produto utilizável e evolução visível.",
  },
  {
    number: "04",
    title: "Evoluir",
    text: "Medimos o uso, refinamos o sistema e acompanhamos o ritmo do negócio.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="site-header">
        <a className="site-header__brand" href="#inicio" aria-label="Lab99 — início">
          <BrandMark compact />
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#selfware">Selfware</a>
          <a href="#capacidades">O que criamos</a>
          <a href="#processo">Processo</a>
        </nav>
        <a className="header-cta" href="#contato">
          Fale com o lab <ArrowIcon direction="up-right" />
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__meta">
            <span>Estúdio de software</span>
            <span>Brasil / 2026</span>
          </div>

          <div className="hero__title-wrap">
            <h1 id="hero-title">
              <span>Software</span>
              <span className="hero__title-line hero__title-line--offset">
                que entende
                <span className="hero__pixel" aria-hidden="true" />
              </span>
              <span>sua empresa.</span>
            </h1>
            <BrandMark inverted />
          </div>

          <div className="hero__bottom">
            <p className="hero__intro">
              Criamos <strong>Selfware</strong>: tecnologia moldada à identidade, à operação e ao futuro de cada negócio.
            </p>
            <a className="hero__scroll" href="#selfware">
              Descubra o Selfware <ArrowIcon direction="down" />
            </a>
          </div>

          <BitmapField />
        </section>

        <section className="manifesto" id="selfware" aria-labelledby="manifesto-title">
          <div className="section-kicker">
            <span>Manifesto</span>
            <span>SE / LF / WA / RE</span>
          </div>

          <div className="manifesto__statement">
            <span className="manifesto__lead" aria-hidden="true">“</span>
            <h2 id="manifesto-title">
              Sua empresa não deveria se adaptar ao software.
              <em>O software deveria se adaptar à sua empresa.</em>
            </h2>
          </div>

          <div className="manifesto__definition">
            <p className="manifesto__term">SELFWARE®</p>
            <div>
              <p>
                Software com a forma do seu negócio. Um sistema que incorpora seu jeito de vender, operar, decidir e crescer — sem forçar a empresa dentro de uma caixa pronta.
              </p>
              <p>
                Não digitalizamos burocracia. Reimaginamos o trabalho e construímos a tecnologia que torna essa nova operação possível.
              </p>
            </div>
          </div>
        </section>

        <section className="capabilities" id="capacidades" aria-labelledby="capabilities-title">
          <div className="capabilities__heading">
            <div className="section-kicker section-kicker--light">
              <span>O que criamos</span>
              <span>04 sistemas / 01 visão</span>
            </div>
            <h2 id="capabilities-title">Tecnologia para a empresa operar como ela pensa.</h2>
          </div>

          <div className="capabilities__composition">
            {capabilities.map((capability) => (
              <article className={capability.className} key={capability.index}>
                <div className="capability__index">[{capability.index}]</div>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <span className="capability__meta">{capability.meta}</span>
                <span className="capability__marker" aria-hidden="true" />
              </article>
            ))}

            <div className="capabilities__texture" aria-hidden="true">
              {Array.from({ length: 64 }, (_, index) => (
                <i key={index} className={index % 7 === 0 ? "is-large" : ""} />
              ))}
            </div>
          </div>
        </section>

        <section className="system" aria-labelledby="system-title">
          <div className="system__copy">
            <div className="section-kicker">
              <span>Um sistema, muitos módulos</span>
              <span>Arquitetura 99.04</span>
            </div>
            <div className="system__title-row">
              <h2 id="system-title">Tudo conectado. Nada engessado.</h2>
              <p>
                O CRM é o núcleo. Cada módulo entra na medida em que resolve um problema e conversa com o que sua empresa já usa.
              </p>
            </div>
          </div>

          <SystemDiagram />

          <div className="system__footnote">
            <span>▰ Estrutura modular</span>
            <span>▦ Dados unificados</span>
            <span>◆ Evolução contínua</span>
          </div>
        </section>

        <section className="process" id="processo" aria-labelledby="process-title">
          <div className="process__intro">
            <div className="section-kicker section-kicker--light">
              <span>Como trabalhamos</span>
              <span>Da operação ao software</span>
            </div>
            <h2 id="process-title">Construído perto. Evoluído junto.</h2>
            <p>
              Um processo direto, colaborativo e sem teatro. Estratégia, design e engenharia na mesma mesa.
            </p>
          </div>

          <ol className="process__steps">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span className="process__number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <span className="process__cross" aria-hidden="true">+</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="final-cta" id="contato" aria-labelledby="final-cta-title">
          <div className="final-cta__texture" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>Tem uma operação que não cabe em software pronto?</p>
          <h2 id="final-cta-title">Vamos criar o sistema que só a sua empresa poderia ter.</h2>
          <a href="mailto:oi@lab99.com.br">
            Começar uma conversa <ArrowIcon direction="up-right" />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top">
          <BrandMark inverted />
          <p>Selfware para empresas em movimento.</p>
        </div>
        <div className="site-footer__bottom">
          <span>© 2026 LAB99</span>
          <a href="mailto:oi@lab99.com.br">oi@lab99.com.br</a>
          <span>Brasil · América do Sul</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </>
  );
}
