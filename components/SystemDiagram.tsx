const MiniDots = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    {Array.from({ length: 18 }, (_, index) => (
      <circle
        key={index}
        cx={(index % 6) * 8}
        cy={Math.floor(index / 6) * 8}
        r={index % 4 === 0 ? 2.6 : 1.5}
      />
    ))}
  </g>
);

export function SystemDiagram() {
  return (
    <div className="system-diagram">
      <svg
        viewBox="0 0 1160 690"
        role="img"
        aria-labelledby="system-diagram-title system-diagram-description"
      >
        <title id="system-diagram-title">Arquitetura modular do CRM Lab99</title>
        <desc id="system-diagram-description">
          Fluxo visual conectando pessoas, oportunidades, automações, inteligência e dados.
        </desc>

        <g className="system-diagram__wires">
          <path d="M261 144h137v84h117" />
          <path d="M705 228h113v-92h93" />
          <path d="M610 328v80" />
          <path d="M261 498h153v-43h102" />
          <path d="M704 455h127v49h80" />
          <circle cx="398" cy="144" r="5" />
          <circle cx="818" cy="228" r="5" />
          <circle cx="414" cy="498" r="5" />
          <circle cx="831" cy="455" r="5" />
        </g>

        <g className="system-diagram__module system-diagram__module--people">
          <rect x="49" y="61" width="212" height="166" />
          <text x="72" y="94" className="system-diagram__eyebrow">BASE 01</text>
          <text x="72" y="137" className="system-diagram__label">PESSOAS</text>
          <circle cx="96" cy="180" r="18" />
          <path d="M126 169h96M126 181h65M126 193h82" />
        </g>

        <g className="system-diagram__core">
          <rect x="516" y="153" width="189" height="175" />
          <rect x="534" y="171" width="153" height="139" />
          <text x="558" y="210" className="system-diagram__eyebrow">NÚCLEO</text>
          <text x="558" y="264" className="system-diagram__core-label">CRM</text>
          <text x="646" y="264" className="system-diagram__core-index">99</text>
        </g>

        <g className="system-diagram__module system-diagram__module--sales">
          <rect x="911" y="53" width="201" height="166" />
          <text x="934" y="86" className="system-diagram__eyebrow">FLUXO 02</text>
          <text x="934" y="129" className="system-diagram__label">VENDAS</text>
          <path d="M935 177h150" />
          <path d="M935 177v-18h39v18h37v-41h39v41h35v-67" />
        </g>

        <g className="system-diagram__module system-diagram__module--automation">
          <rect x="49" y="415" width="212" height="169" />
          <text x="72" y="448" className="system-diagram__eyebrow">MOTOR 03</text>
          <text x="72" y="491" className="system-diagram__label">AUTOMAÇÃO</text>
          <path d="M75 542h35l16-27 29 48 19-34h56" />
        </g>

        <g className="system-diagram__module system-diagram__module--data">
          <rect x="911" y="418" width="201" height="166" />
          <text x="934" y="451" className="system-diagram__eyebrow">CAMADA 04</text>
          <text x="934" y="494" className="system-diagram__label">DADOS</text>
          <MiniDots x={941} y={530} />
          <path d="M1014 531h71M1014 543h48M1014 555h60" />
        </g>

        <g className="system-diagram__ai">
          <path d="M516 408h188v94l-48 48H516Z" />
          <text x="540" y="440" className="system-diagram__eyebrow">INTELIGÊNCIA</text>
          <text x="540" y="483" className="system-diagram__label">AGENTE IA</text>
          <rect x="657" y="512" width="23" height="16" />
        </g>

        <g className="system-diagram__legend">
          <rect x="329" y="612" width="502" height="43" />
          <text x="352" y="639">ENTRADA</text>
          <circle cx="449" cy="633" r="4" />
          <text x="476" y="639">DECISÃO</text>
          <circle cx="580" cy="633" r="4" />
          <text x="607" y="639">AÇÃO</text>
          <circle cx="680" cy="633" r="4" />
          <text x="707" y="639">APRENDIZADO</text>
        </g>
      </svg>
    </div>
  );
}
