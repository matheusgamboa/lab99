import { ArrowIcon } from "@/components/ArrowIcon";
import { CapabilitiesAccordion } from "@/components/CapabilitiesAccordion";
import { ExperienceController } from "@/components/ExperienceController";
import { HeroVideo } from "@/components/HeroVideo";

const capabilities = [
  {
    index: "01",
    title: "CRM Hub",
    text: "Clientes, negociações e rotinas reunidos em uma interface que fala a língua do seu time.",
    detail: "Estratégia · Produto · Engenharia",
    visual: "hub" as const,
  },
  {
    index: "02",
    title: "Automação inteligente",
    text: "Fluxos que atravessam áreas, reduzem o trabalho mecânico e mantêm as pessoas no controle.",
    detail: "Mapeamento · Orquestração · Observabilidade",
    visual: "flow" as const,
  },
  {
    index: "03",
    title: "Agentes de IA",
    text: "Inteligência com contexto, limites claros e acesso seguro ao conhecimento da empresa.",
    detail: "Contexto · Guardrails · Integração",
    visual: "agent" as const,
  },
  {
    index: "04",
    title: "Integrações",
    text: "Ferramentas, dados e equipes conectados para a informação circular sem remendos.",
    detail: "APIs · Dados · Sistemas legados",
    visual: "connect" as const,
  },
];

const metrics = [
  {
    value: "99",
    suffix: "%",
    label: "Aderência como norte",
    text: "Uma meta de projeto: fazer o sistema parecer parte da empresa, não uma ferramenta imposta.",
  },
  {
    value: "04",
    pad: "2",
    suffix: "",
    label: "Etapas no ciclo",
    text: "Entender, desenhar, construir e evoluir — um processo claro, contínuo e compartilhado.",
  },
  {
    value: "01",
    pad: "2",
    suffix: "",
    label: "Parceiro do início ao uso",
    text: "Estratégia, design e engenharia na mesma mesa, sem repasses que diluem o contexto.",
  },
  {
    value: "100",
    suffix: "%",
    label: "Contexto antes do código",
    text: "A operação real vem primeiro. A tecnologia aparece para sustentar o que faz sentido.",
  },
];

const projects = [
  {
    number: "01",
    title: "CRM Hub",
    eyebrow: "Sistema comercial sob medida",
    text: "Uma visão única de clientes, oportunidades, tarefas e inteligência para o time agir sem alternar entre telas.",
    tags: ["CRM", "Dados", "Operação"],
    visual: "crm",
  },
  {
    number: "02",
    title: "Automações",
    eyebrow: "Fluxos que atravessam a operação",
    text: "Rotinas conectadas de ponta a ponta, com regras visíveis, exceções tratadas e pessoas no comando.",
    tags: ["Workflow", "Integração", "Eficiência"],
    visual: "automation",
  },
  {
    number: "03",
    title: "Agentes de IA",
    eyebrow: "Inteligência com contexto",
    text: "Agentes que consultam conhecimento interno, executam tarefas seguras e sabem quando chamar uma pessoa.",
    tags: ["IA", "Conhecimento", "Guardrails"],
    visual: "agents",
  },
];

const processSteps = [
  ["01", "Entender", "Entramos na operação para enxergar regras, exceções, pessoas e oportunidades reais."],
  ["02", "Desenhar", "Transformamos contexto em arquitetura, fluxos e uma experiência direta de usar."],
  ["03", "Construir", "Entregamos em ciclos curtos, com produto utilizável e evolução visível."],
  ["04", "Evoluir", "Medimos o uso, refinamos o sistema e acompanhamos o movimento do negócio."],
];

function SectionLabel({ number, children, dark = false }: { number: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`section-label ${dark ? "section-label--dark" : ""}`} data-reveal>
      <span>{number}</span>
      <span>{children}</span>
      <span>Lab99 / Selfware</span>
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="project-visual__chrome">
        <span>LAB99_OS</span>
        <span>● ONLINE</span>
      </div>
      <div className="project-visual__canvas">
        <i className="pv-line pv-line--1" />
        <i className="pv-line pv-line--2" />
        <i className="pv-line pv-line--3" />
        <i className="pv-node pv-node--1" />
        <i className="pv-node pv-node--2" />
        <i className="pv-node pv-node--3" />
        <i className="pv-node pv-node--4" />
        <strong>{type === "crm" ? "99" : type === "automation" ? "FLOW" : "AI"}</strong>
        <small>{type === "crm" ? "CUSTOMER SYSTEM" : type === "automation" ? "ROUTINE / 04" : "CONTEXT CORE"}</small>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ExperienceController />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header" data-site-header>
        <a className="site-logo" href="#inicio" aria-label="Lab99 — início">
          <img src="/assets/lab99/logo-mono.jpg" alt="Lab99" width="1280" height="534" />
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#selfware">Selfware</a>
          <a href="#capacidades">Capacidades</a>
          <a href="#sistemas">Sistemas</a>
          <a href="#processo">Processo</a>
        </nav>

        <a className="header-contact" href="#contato">
          <span>Fale com a gente</span><ArrowIcon direction="up-right" />
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <HeroVideo />
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__grain" aria-hidden="true" />
          <div className="hero__geometry hero__geometry--left" aria-hidden="true" />
          <div className="hero__geometry hero__geometry--right" aria-hidden="true" />

          <div className="hero__content">
            <p className="hero__eyebrow">Selfware / software com a forma do seu negócio</p>
            <h1 id="hero-title">
              <span><i>Software que entende</i></span>
              <span><i>a sua empresa.</i></span>
            </h1>
            <p className="hero__support">
              Criamos sistemas sob medida para operações que não cabem em software de prateleira.
            </p>
            <a className="primary-link" href="#selfware">
              <span>Descobrir o Selfware</span><ArrowIcon direction="down" />
            </a>
          </div>

          <div className="hero__index" aria-hidden="true">
            <span>LAB99 — BR</span><span>2026</span>
          </div>
          <a className="scroll-cue" href="#selfware" aria-label="Rolar para conhecer o Selfware">
            <span>Scroll</span><i />
          </a>
        </section>

        <aside className="statement-band" aria-label="Posicionamento Lab99">
          <div className="statement-band__track">
            {[0, 1].map((group) => (
              <div className="statement-band__group" aria-hidden={group === 1} key={group}>
                <span>Selfware</span><i>✳</i><span>Software com identidade</span><i>✳</i><span>Operação em movimento</span><i>✳</i>
              </div>
            ))}
          </div>
        </aside>

        <section className="manifesto section" id="selfware" aria-labelledby="manifesto-title">
          <SectionLabel number="01">Quem somos</SectionLabel>
          <div className="manifesto__body">
            <div className="manifesto__heading" data-reveal>
              <p className="eyebrow">O software deveria se adaptar à empresa.</p>
              <h2 id="manifesto-title">Tecnologia que incorpora o seu jeito de operar.</h2>
            </div>
            <div className="manifesto__copy" data-reveal>
              <p className="manifesto__lead">Sua empresa não deveria se deformar para caber em um sistema pronto.</p>
              <p>Selfware é software com a forma do seu negócio: incorpora seu jeito de vender, operar, decidir e crescer.</p>
              <p>Não digitalizamos burocracia. Reimaginamos o trabalho e construímos a tecnologia que torna essa nova operação possível.</p>
            </div>
          </div>

          <div className="manifesto-visual" data-reveal>
            <div className="manifesto-visual__topline"><span>SELFWARE / MAPA DE CONTEXTO</span><span>01 — 04</span></div>
            <div className="manifesto-visual__orbit" aria-hidden="true">
              <div className="orbit orbit--outer"><i>Operação</i></div>
              <div className="orbit orbit--middle"><i>Pessoas</i></div>
              <div className="orbit orbit--inner"><strong>99</strong></div>
              <span className="orbit-label orbit-label--a">Decidir</span>
              <span className="orbit-label orbit-label--b">Vender</span>
              <span className="orbit-label orbit-label--c">Evoluir</span>
              <span className="orbit-label orbit-label--d">Integrar</span>
            </div>
            <p>Um sistema vivo no centro da operação — conectado às pessoas, aos dados e às decisões que movem a empresa.</p>
          </div>
        </section>

        <section className="numbers section section--dark" aria-labelledby="numbers-title">
          <SectionLabel number="02" dark>Números do método</SectionLabel>
          <div className="numbers__intro" data-reveal>
            <h2 id="numbers-title">Princípios, não promessas vazias.</h2>
            <p>Os números abaixo organizam a maneira como pensamos e construímos cada sistema.</p>
          </div>
          <div className="numbers__grid">
            {metrics.map((metric, index) => (
              <article className="metric" data-reveal style={{ "--delay": `${index * 80}ms` } as React.CSSProperties} key={metric.label}>
                <div className="metric__value"><span data-counter={metric.value} data-pad={metric.pad}>0</span>{metric.suffix}</div>
                <h3>{metric.label}</h3>
                <p>{metric.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section section--dark" id="capacidades" aria-labelledby="capabilities-title">
          <SectionLabel number="03" dark>O que criamos</SectionLabel>
          <div className="section-heading" data-reveal>
            <h2 id="capabilities-title">Tecnologia para a empresa operar como ela pensa.</h2>
            <p>Sistemas sob medida, modulares e preparados para evoluir junto com a operação.</p>
          </div>
          <CapabilitiesAccordion items={capabilities} />
        </section>

        <section className="work section" id="sistemas" aria-labelledby="work-title">
          <SectionLabel number="04">Sistemas selecionados</SectionLabel>
          <div className="work__heading" data-reveal>
            <div><p className="eyebrow">Selfware em ação</p><h2 id="work-title">Sistemas que dão forma a operações reais.</h2></div>
            <p>Três frentes que podem nascer separadas — ou funcionar como um único ecossistema.</p>
          </div>

          <div className="projects">
            {projects.map((project, index) => (
              <article className={`project project--${project.visual}`} data-reveal key={project.title}>
                <a href="#contato" aria-label={`Conversar sobre ${project.title}`}>
                  <div className="project__meta"><span>[{project.number}]</span><span>{project.eyebrow}</span></div>
                  <ProjectVisual type={project.visual} />
                  <div className="project__content">
                    <div><h3>{project.title}</h3><p>{project.text}</p></div>
                    <div className="project__footer">
                      <ul aria-label="Áreas relacionadas">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                      <span className="project__arrow"><ArrowIcon direction="up-right" /></span>
                    </div>
                  </div>
                </a>
                <span className="project__order" aria-hidden="true">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="process section" id="processo" aria-labelledby="process-title">
          <SectionLabel number="05">Como trabalhamos</SectionLabel>
          <div className="process__heading" data-reveal>
            <p className="eyebrow">Construído perto. Evoluído junto.</p>
            <h2 id="process-title">Do contexto ao sistema — sem perder o fio.</h2>
          </div>

          <ol className="process__list">
            {processSteps.map(([number, title, text], index) => (
              <li data-reveal style={{ "--delay": `${index * 90}ms` } as React.CSSProperties} key={number}>
                <div className="process__marker"><span>{number}</span><i /></div>
                <div className="process__step"><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="final-cta" id="contato" aria-labelledby="contact-title">
          <div className="final-cta__grain" aria-hidden="true" />
          <div className="final-cta__top" data-reveal><span>Próximo sistema</span><span>Começa com uma conversa</span></div>
          <div className="final-cta__content" data-reveal>
            <p>Tem uma operação que não cabe em software pronto?</p>
            <h2 id="contact-title">Vamos criar o sistema que só a sua empresa poderia ter.</h2>
            <a className="contact-link" href="mailto:oi@lab99.com.br">
              <span>Começar uma conversa</span><i><ArrowIcon direction="up-right" /></i>
            </a>
          </div>
          <span className="final-cta__accent" aria-hidden="true">99</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__main">
          <a className="footer-logo" href="#inicio" aria-label="Lab99 — voltar ao início">
            <img src="/assets/lab99/logo-mono.jpg" alt="Lab99" width="1280" height="534" />
          </a>
          <p>Selfware para empresas<br />em movimento.</p>
          <nav aria-label="Navegação do rodapé">
            <a href="#selfware">Selfware</a><a href="#capacidades">Capacidades</a><a href="#sistemas">Sistemas</a><a href="#processo">Processo</a>
          </nav>
          <div className="site-footer__contact"><span>Fale com a Lab99</span><a href="mailto:oi@lab99.com.br">oi@lab99.com.br <ArrowIcon direction="up-right" /></a></div>
        </div>
        <div className="site-footer__meta"><span>© 2026 Lab99</span><span>Brasil · América do Sul</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>
    </>
  );
}
