export default function HeroVisual() {
  return (
    <div className="viz viz--hero">
      <div className="viz-hero">
        <div className="vh-window">
          <div className="vh-bar">
            <i /><i /><i />
            <span className="url" />
          </div>
          <div className="vh-body">
            <div className="vh-kpis">
              <div className="vh-kpi">
                <span>Organic traffic</span>
                <b>+182%</b>
                <i className="spark" />
              </div>
              <div className="vh-kpi alt">
                <span>Qualified leads</span>
                <b>3.4k</b>
                <i className="spark" />
              </div>
              <div className="vh-kpi">
                <span>Avg. position</span>
                <b>#1.8</b>
                <i className="spark" />
              </div>
            </div>
            <div className="vh-chart">
              <div className="vh-bars">
                <i style={{ "--h": "34%" } as React.CSSProperties} />
                <i style={{ "--h": "52%" } as React.CSSProperties} />
                <i style={{ "--h": "44%" } as React.CSSProperties} />
                <i style={{ "--h": "66%" } as React.CSSProperties} />
                <i style={{ "--h": "58%" } as React.CSSProperties} />
                <i style={{ "--h": "78%" } as React.CSSProperties} />
                <i style={{ "--h": "70%" } as React.CSSProperties} />
                <i style={{ "--h": "92%" } as React.CSSProperties} />
              </div>
              <svg className="vh-line" viewBox="0 0 320 80" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vhStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="oklch(0.58 0.2 268)" />
                    <stop offset="1" stopColor="oklch(0.62 0.19 305)" />
                  </linearGradient>
                  <linearGradient id="vhFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="oklch(0.7 0.16 285 / .35)" />
                    <stop offset="1" stopColor="oklch(0.7 0.16 285 / 0)" />
                  </linearGradient>
                </defs>
                <path
                  className="area"
                  d="M0,60 C44,52 70,40 100,44 C150,50 168,22 210,28 C252,34 280,12 320,8 L320,80 L0,80 Z"
                />
                <path
                  className="ln"
                  d="M0,60 C44,52 70,40 100,44 C150,50 168,22 210,28 C252,34 280,12 320,8"
                />
              </svg>
            </div>
          </div>
        </div>
        <span className="vh-chip vh-chip-1 green"><span className="ic">&#9650;</span>+182% organic</span>
        <span className="vh-chip vh-chip-2 amber"><span className="ic">&#9733;</span>Ranked #1</span>
        <span className="vh-chip vh-chip-3"><span className="ic">&#9889;</span>AI automated</span>
      </div>
    </div>
  );
}
