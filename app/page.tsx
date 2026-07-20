import { ArrowIcon } from "@/components/ArrowIcon";
import { CapabilitiesAccordion } from "@/components/CapabilitiesAccordion";
import { ExperienceController } from "@/components/ExperienceController";
import { FlickeringGrid } from "@/components/FlickeringGrid";

const challenges = [
  ["01", "Processos que não cabem", "Sistemas prontos forçam a operação a trabalhar do jeito da ferramenta."],
  ["02", "Informação espalhada", "Pessoas, dados e decisões ficam desconectados."],
  ["03", "Crescimento sem contexto", "Novas demandas viram remendos e exceções."],
  ["04", "Tecnologia sem identidade", "O software não acompanha a forma como a empresa pensa."],
];

const capabilities = [
  {
    index: "01",
    title: "CRM Hub",
    text: "Clientes, oportunidades e rotinas comerciais em uma interface que fala a língua do seu time.",
    detail: "Relacionamento · Vendas · Inteligência",
    visual: "hub" as const,
  },
  {
    index: "02",
    title: "Automações",
    text: "Fluxos conectados que reduzem o trabalho mecânico sem tirar as pessoas do controle.",
    detail: "Processos · Orquestração · Eficiência",
    visual: "flow" as const,
  },
  {
    index: "03",
    title: "Agentes de IA",
    text: "Inteligência com contexto, limites claros e acesso seguro ao conhecimento da empresa.",
    detail: "Contexto · Guardrails · Conhecimento",
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

const processSteps = [
  ["01", "Entender", "Mergulhamos na operação para reconhecer regras, exceções e oportunidades reais."],
  ["02", "Desenhar", "Traduzimos contexto em arquitetura, fluxos e uma experiência direta de usar."],
  ["03", "Construir", "Entregamos em ciclos curtos, com produto utilizável e evolução visível."],
  ["04", "Evoluir", "Acompanhamos o uso e refinamos o sistema junto com o movimento do negócio."],
];

function SectionTag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`section-tag${dark ? " section-tag--dark" : ""}`}><span />{children}</p>;
}

function SystemVisual() {
  return (
    <div className="system-map" aria-label="Representação de um sistema Selfware conectando a operação">
      <div className="system-map__meta"><span>SELFWARE / SISTEMA VIVO</span><span>LAB99 — 01</span></div>
      <svg className="system-map__lines" viewBox="0 0 680 420" aria-hidden="true">
        <path d="M94 107H265L340 210H585" />
        <path d="M94 315H242L340 210" />
        <path d="M340 210L440 104H585" />
        <path d="M340 210L450 316H585" />
      </svg>
      <span className="system-node system-node--operation">OPERAÇÃO</span>
      <span className="system-node system-node--people">PESSOAS</span>
      <strong className="system-node system-node--core">SELF<br />WARE</strong>
      <span className="system-node system-node--data">DADOS</span>
      <span className="system-node system-node--decisions">DECISÕES</span>
      <p>Uma camada própria que organiza o contexto e conecta o que move a empresa.</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ExperienceController />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header" data-site-header>
        <div className="site-header__inner">
          <a className="site-logo" href="#inicio" aria-label="Lab99 — início">
            <img src="/assets/lab99/logo-mono.jpg" alt="Lab99" width="1280" height="534" />
          </a>
          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#selfware">Selfware</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#sistemas">Sistemas</a>
            <a href="#processo">Processo</a>
          </nav>
          <a className="button button--small" href="mailto:oi@lab99.com.br">
            <span>Falar com a gente</span><ArrowIcon direction="up-right" />
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__frame">
            <div className="hero__copy">
              <p className="hero__eyebrow">Selfware / software com a forma do seu negócio</p>
              <h1 id="hero-title">Software que <em>entende</em> a sua empresa.</h1>
              <p className="hero__support">Sistemas sob medida para operações que não cabem em software de prateleira.</p>
              <div className="hero__actions">
                <a className="button" href="#selfware"><span>Conhecer o Selfware</span><ArrowIcon /></a>
                <a className="text-link" href="#processo"><span>Ver como funciona</span><ArrowIcon direction="down" /></a>
              </div>
            </div>
            <div className="hero__visual">
              <FlickeringGrid />
              <div className="hero__visual-label"><span>CONTEXTO</span><span>→</span><span>SISTEMA</span></div>
              <p>Software desenhado<br />de dentro para fora.</p>
            </div>
          </div>
        </section>

        <aside className="positioning" aria-label="Pilares de posicionamento Lab99">
          <div className="positioning__inner">
            <p>Construído para empresas em movimento</p>
            <ul><li>Operação</li><li>Pessoas</li><li>Dados</li><li>Decisões</li><li>Evolução</li></ul>
          </div>
        </aside>

        <section className="problem section" id="selfware" aria-labelledby="problem-title">
          <SectionTag>O desafio</SectionTag>
          <div className="problem__grid">
            <div className="problem__intro" data-reveal>
              <h2 id="problem-title">O software pronto não conhece o seu negócio.</h2>
              <p>Quando a ferramenta define o jeito de trabalhar, o contexto se perde e a operação acumula desvios. O sistema deveria fazer o caminho inverso.</p>
            </div>
            <ol className="challenge-list">
              {challenges.map(([number, title, text], index) => (
                <li key={number} data-reveal style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} tabIndex={0}>
                  <span className="challenge-list__number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <span className="challenge-list__mark" aria-hidden="true">{index % 2 ? "⌁" : "○"}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="solution" id="sistemas" aria-labelledby="solution-title">
          <div className="section solution__inner">
            <SectionTag>A resposta / Selfware</SectionTag>
            <div className="solution__grid">
              <div className="solution__copy" data-reveal>
                <h2 id="solution-title">Uma camada de tecnologia com a forma da sua operação.</h2>
                <p>Selfware transforma o jeito particular da empresa pensar, decidir e executar em um sistema próprio — claro para quem usa e preparado para continuar evoluindo.</p>
                <a className="text-link text-link--strong" href="#capacidades"><span>Explorar capacidades</span><ArrowIcon /></a>
              </div>
              <div data-reveal><SystemVisual /></div>
            </div>
          </div>
        </section>

        <section className="capabilities section" id="capacidades" aria-labelledby="capabilities-title">
          <SectionTag>Capacidades</SectionTag>
          <div className="capabilities__heading" data-reveal>
            <h2 id="capabilities-title">O sistema certo para a operação real.</h2>
            <p>Frentes que funcionam separadas ou como partes de um único ecossistema.</p>
          </div>
          <CapabilitiesAccordion items={capabilities} />
        </section>

        <section className="process" id="processo" aria-labelledby="process-title">
          <div className="section process__inner">
            <SectionTag dark>Nosso processo</SectionTag>
            <div className="process__heading" data-reveal>
              <h2 id="process-title">Contexto não se terceiriza.</h2>
              <p>Estratégia, design e engenharia seguem o mesmo fio, do primeiro mergulho à evolução contínua.</p>
            </div>
            <ol className="process__list">
              {processSteps.map(([number, title, text], index) => (
                <li key={number} data-reveal style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}>
                  <span>{number}</span><i aria-hidden="true" />
                  <h3>{title}</h3><p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="final-cta" id="contato" aria-labelledby="contact-title">
          <div data-reveal>
            <SectionTag>Próximo sistema</SectionTag>
            <h2 id="contact-title">Sua operação merece um software que faça sentido.</h2>
            <p>Comece pela conversa. O contexto vem antes do código.</p>
            <a className="button" href="mailto:oi@lab99.com.br"><span>Falar com a Lab99</span><ArrowIcon direction="up-right" /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <a className="footer-logo" href="#inicio" aria-label="Lab99 — voltar ao início">
            <img src="/assets/lab99/logo-mono.jpg" alt="Lab99" width="1280" height="534" />
          </a>
          <nav aria-label="Navegação do rodapé"><a href="#selfware">Selfware</a><a href="#capacidades">Capacidades</a><a href="#sistemas">Sistemas</a><a href="#processo">Processo</a></nav>
          <a className="footer-email" href="mailto:oi@lab99.com.br">oi@lab99.com.br <ArrowIcon direction="up-right" /></a>
        </div>
        <div className="site-footer__meta"><span>© 2026 Lab99</span><span>Software com identidade.</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>
    </>
  );
}
