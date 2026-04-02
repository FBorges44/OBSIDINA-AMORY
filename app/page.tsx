import Link from "next/link";

const products = [
  { name: "Blazer Alfaiataria Premium", brand: "Obsidian", price: "R$ 489", oldPrice: null, badge: "new", emoji: "🧥", color: "#2d2520" },
  { name: "Vestido Midi Plissado", brand: "Obsidian", price: "R$ 329", oldPrice: "R$ 549", badge: "sale", emoji: "👗", color: "#252025" },
  { name: "Calça Wide Leg Linho", brand: "Studio", price: "R$ 279", oldPrice: null, badge: "exclusive", emoji: "👖", color: "#202028" },
  { name: "Trench Coat Cinto", brand: "Obsidian", price: "R$ 699", oldPrice: null, badge: "new", emoji: "🧣", color: "#282020" },
  { name: "Saia Midi Plissada", brand: "Studio", price: "R$ 219", oldPrice: "R$ 319", badge: "sale", emoji: "🌸", color: "#22201f" },
  { name: "Conjunto Cropped Linho", brand: "Maison", price: "R$ 399", oldPrice: null, badge: null, emoji: "✨", color: "#1e1e1e" },
  { name: "Blusa Oversized Cetim", brand: "Vérité", price: "R$ 189", oldPrice: null, badge: "new", emoji: "👕", color: "#201f22" },
  { name: "Vestido Longo Floral", brand: "Arc & Co", price: "R$ 459", oldPrice: "R$ 689", badge: "sale", emoji: "🌺", color: "#22201e" },
];

const BRANDS = ["Obsidian", "Studio Line", "Maison", "Vérité", "Arc & Co", "Elementar", "Forma", "Natura Wear"];

export default function HomePage() {
  return (
    <>
      {/* ── HERO SPLIT ── */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "90vh",
      }}>
        {/* Left — copy */}
        <div style={{
          background: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 64px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* subtle grid texture */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.04,
            backgroundImage: "repeating-linear-gradient(0deg,#c8a96e 0,#c8a96e 1px,transparent 0,transparent 60px),repeating-linear-gradient(90deg,#c8a96e 0,#c8a96e 1px,transparent 0,transparent 60px)",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#c8a96e", fontFamily: "var(--font-dm)", fontWeight: 600,
              marginBottom: "32px",
            }}>
              <span style={{ display: "block", width: "32px", height: "1px", background: "#c8a96e" }} />
              Coleção Primavera · Verão 2025
            </div>

            <h1 style={{
              fontSize: "clamp(52px, 5.5vw, 88px)",
              fontWeight: 800,
              color: "#f5f0e8",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              marginBottom: "28px",
              fontFamily: "var(--font-playfair)",
            }}>
              Vista-se<br />
              com{" "}
              <em style={{ color: "#c8a96e", fontStyle: "italic" }}>intenção</em>
            </h1>

            <p style={{
              fontSize: "16px", color: "#7a746a", lineHeight: 1.75,
              maxWidth: "380px", marginBottom: "48px",
              fontFamily: "var(--font-dm)", fontWeight: 300,
            }}>
              Peças atemporais para pessoas que sabem o que querem.
              Qualidade que dura, estilo que impressiona.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "64px" }}>
              <Link href="/colecoes" className="btn-primary">
                Ver Coleção
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/feminino" className="btn-outline">Feminino</Link>
              <Link href="/masculino" className="btn-outline">Masculino</Link>
            </div>

            {/* stats row */}
            <div style={{
              display: "flex", gap: "48px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "32px",
            }}>
              {[["2.4k", "Produtos"], ["180+", "Marcas"], ["17", "Anos de moda"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: "32px", fontWeight: 700, color: "#c8a96e", fontFamily: "var(--font-playfair)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: "11px", color: "#4a4440", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "5px", fontFamily: "var(--font-dm)", fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — visual panel 2×2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
          {[
            { bg: "linear-gradient(160deg, #2a1f2e 0%, #3d2b42 100%)", emoji: "👗", label: "Feminino", sub: "Nova Coleção", href: "/feminino", size: "72px" },
            { bg: "linear-gradient(160deg, #1a2030 0%, #243050 100%)", emoji: "🧥", label: "Masculino", sub: "Essentials", href: "/masculino", size: "72px" },
            { bg: "linear-gradient(160deg, #1f2a20 0%, #2d3e2e 100%)", emoji: "🌟", label: "Kids", sub: "Verão 2025", href: "/kids", size: "60px" },
            { bg: "linear-gradient(160deg, #3d2020 0%, #2a1a1a 100%)", emoji: "🏷️", label: "Sale", sub: "Até 60% off", href: "/sale", size: "60px" },
          ].map((c) => (
            <Link key={c.label} href={c.href} style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden" }}>
              <div style={{
                background: c.bg, width: "100%", height: "100%",
                display: "flex", alignItems: "flex-end",
                padding: "24px", position: "relative",
                transition: "transform 0.4s ease",
                fontSize: c.size,
              }}
                className="hero-panel-item"
              >
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -60%)",
                  fontSize: c.size, lineHeight: 1, opacity: 0.9,
                }}>
                  {c.emoji}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "var(--font-dm)", fontWeight: 600, marginBottom: "4px" }}>{c.sub}</div>
                  <div style={{ fontSize: "20px", fontWeight: 600, color: "white", fontFamily: "var(--font-playfair)" }}>{c.label}</div>
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── QUICK BENEFITS ── */}
      <div style={{ background: "#f0ece4", borderBottom: "1px solid #e0d8cc" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: "0" }}>
          {[
            ["🚚", "Frete grátis acima de R$299"],
            ["🔄", "Troca grátis em 30 dias"],
            ["💳", "10× sem juros"],
            ["🔒", "Compra 100% segura"],
          ].map(([icon, text], i) => (
            <div key={text} style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "16px 40px",
              borderRight: i < 3 ? "1px solid #e0d8cc" : "none",
              fontSize: "12px", fontFamily: "var(--font-dm)", fontWeight: 500,
              letterSpacing: "0.06em", textTransform: "uppercase", color: "#4a4440",
            }}>
              <span style={{ fontSize: "16px" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── BRANDS MARQUEE ── */}
      <div className="brands-section">
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "80px", animation: "marquee 28s linear infinite", flexShrink: 0, whiteSpace: "nowrap" }}>
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="brand-item">{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORIES ASYMMETRIC ── */}
      <div className="section">
        <div className="section-header">
          <div>
            <div className="section-label">Departamentos</div>
            <h2 className="section-title">Explore o seu estilo</h2>
          </div>
          <Link href="/colecoes" className="see-all">Ver coleções</Link>
        </div>

        {/* Asymmetric grid: 1 tall left + 2 stacked right + 1 wide bottom */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gridTemplateRows: "340px 280px", gap: "12px" }}>
          {/* Tall card — Feminino */}
          <Link href="/feminino" style={{ textDecoration: "none", gridRow: "1 / 3" }}>
            <div style={{ position: "relative", height: "100%", overflow: "hidden", background: "linear-gradient(160deg, #2a1f2e 0%, #3d2b42 100%)", cursor: "pointer" }}
              className="cat-card-hover">
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -55%)", fontSize: "110px", lineHeight: 1 }}>👗</div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "var(--font-dm)", fontWeight: 600, marginBottom: "8px" }}>Nova Coleção</div>
                <h3 style={{ fontSize: "32px", fontWeight: 700, color: "white", fontFamily: "var(--font-playfair)", marginBottom: "12px" }}>Feminino</h3>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm)", fontWeight: 500 }}>847 produtos →</span>
              </div>
            </div>
          </Link>

          {/* Masculino */}
          <Link href="/masculino" style={{ textDecoration: "none" }}>
            <div style={{ position: "relative", height: "100%", overflow: "hidden", background: "linear-gradient(160deg, #1a2030 0%, #243050 100%)", cursor: "pointer" }}
              className="cat-card-hover">
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -60%)", fontSize: "72px", lineHeight: 1 }}>🧥</div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "var(--font-dm)", fontWeight: 600, marginBottom: "6px" }}>Essentials</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "white", fontFamily: "var(--font-playfair)" }}>Masculino</h3>
              </div>
            </div>
          </Link>

          {/* Kids */}
          <Link href="/kids" style={{ textDecoration: "none" }}>
            <div style={{ position: "relative", height: "100%", overflow: "hidden", background: "linear-gradient(160deg, #1f2a20 0%, #2d3e2e 100%)", cursor: "pointer" }}
              className="cat-card-hover">
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -60%)", fontSize: "72px", lineHeight: 1 }}>🌟</div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "var(--font-dm)", fontWeight: 600, marginBottom: "6px" }}>Verão 2025</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "white", fontFamily: "var(--font-playfair)" }}>Kids</h3>
              </div>
            </div>
          </Link>

          {/* Sale — wide bottom right */}
          <Link href="/sale" style={{ textDecoration: "none", gridColumn: "2 / 4" }}>
            <div style={{ position: "relative", height: "100%", overflow: "hidden", background: "linear-gradient(120deg, #2a1a1a 0%, #4a1010 60%, #3a1a1a 100%)", cursor: "pointer", display: "flex", alignItems: "center" }}
              className="cat-card-hover">
              <div style={{ position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%)", fontSize: "100px", lineHeight: 1, opacity: 0.25 }}>🏷️</div>
              <div style={{ position: "relative", zIndex: 1, padding: "32px 40px" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#e05d44", fontFamily: "var(--font-dm)", fontWeight: 600, marginBottom: "10px" }}>Promoção Especial</div>
                <h3 style={{ fontSize: "36px", fontWeight: 800, color: "white", fontFamily: "var(--font-playfair)", marginBottom: "12px", lineHeight: 1 }}>Sale — até <em style={{ color: "#e07a5f", fontStyle: "italic" }}>60% off</em></h3>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-dm)", fontWeight: 500 }}>Enquanto durarem os estoques →</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <div style={{ background: "#f0ece4", padding: "80px 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
          <div className="section-header">
            <div>
              <div className="section-label">Destaques da semana</div>
              <h2 className="section-title">Mais vendidos</h2>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {["Todos", "Feminino", "Masculino", "Novidades"].map((t, i) => (
                <button key={t} style={{
                  padding: "7px 18px", fontSize: "12px", fontFamily: "var(--font-dm)",
                  fontWeight: 500, letterSpacing: "0.06em",
                  background: i === 0 ? "var(--fg)" : "transparent",
                  color: i === 0 ? "var(--bg)" : "var(--muted)",
                  border: "1px solid",
                  borderColor: i === 0 ? "var(--fg)" : "var(--border)",
                  cursor: "pointer",
                }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {products.map((p) => (
              <Link key={p.name} href={`/produto/${p.name.toLowerCase().replace(/ /g, "-")}`} style={{ textDecoration: "none" }}>
                <div className="product-card animate-up">
                  <div className="product-img-wrap">
                    <div style={{ background: p.color, position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "60px" }}>
                      {p.emoji}
                    </div>
                    {p.badge && (
                      <span className={`product-badge badge-${p.badge}`}>
                        {p.badge === "new" ? "Novo" : p.badge === "sale" ? "Sale" : "Exclusivo"}
                      </span>
                    )}
                    <div className="product-actions">
                      <button className="action-btn action-btn-primary">Adicionar ao carrinho</button>
                      <button className="action-btn action-btn-outline">♡</button>
                    </div>
                  </div>
                  <div className="product-brand">{p.brand}</div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-price">
                    <span className="price-current">{p.price}</span>
                    {p.oldPrice && <span className="price-old">{p.oldPrice}</span>}
                    {p.oldPrice && (
                      <span className="price-discount">
                        {Math.round((1 - parseInt(p.price.replace(/\D/g, "")) / parseInt(p.oldPrice.replace(/\D/g, ""))) * 100)}% off
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/feminino" className="btn-primary" style={{ display: "inline-flex" }}>
              Ver todos os produtos
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── EDITORIAL BANNER ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Left dark */}
        <div style={{
          background: "#1a1a1a", padding: "80px 64px",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          minHeight: "480px", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", right: 0, bottom: 0, fontSize: "180px", lineHeight: 1, opacity: 0.07, pointerEvents: "none" }}>🌿</div>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "var(--font-dm)", fontWeight: 600, marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ display: "block", width: "24px", height: "1px", background: "#c8a96e" }} />
              Compromisso Obsidian
            </div>
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 800, color: "#f5f0e8", lineHeight: 1.05, letterSpacing: "-0.02em", fontFamily: "var(--font-playfair)", marginBottom: "20px" }}>
              Moda que<br /><em style={{ color: "#c8a96e", fontStyle: "italic" }}>respeita</em> você
            </h2>
            <p style={{ fontSize: "15px", color: "#5a5450", lineHeight: 1.75, maxWidth: "380px", fontWeight: 300, fontFamily: "var(--font-dm)" }}>
              Peças produzidas com matérias-primas sustentáveis,
              fornecedores certificados e condições dignas de trabalho.
            </p>
          </div>
          <Link href="/sustentabilidade" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "40px" }}>
            Saiba mais
          </Link>
        </div>

        {/* Right — 2×2 feature cards */}
        <div style={{ background: "#f0ece4", padding: "80px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignContent: "center" }}>
          {[
            { icon: "🌿", n: "80%", title: "Algodão Orgânico", desc: "das peças produzidas com algodão certificado" },
            { icon: "♻️", n: "100%", title: "Embalagem Verde", desc: "materiais recicláveis ou reutilizáveis" },
            { icon: "🏭", n: "100%", title: "Fábricas Auditadas", desc: "fornecedores com certificação social" },
            { icon: "🌎", n: "0", title: "Meta Zero Resíduo", desc: "programa de reciclagem têxtil ativo" },
          ].map((c) => (
            <div key={c.title} style={{
              background: "white", padding: "28px 24px",
              borderTop: "3px solid #c8a96e",
            }}>
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{c.icon}</div>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#1a1a1a", fontFamily: "var(--font-playfair)", lineHeight: 1, marginBottom: "6px" }}>{c.n}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a", fontFamily: "var(--font-dm)", marginBottom: "4px" }}>{c.title}</div>
              <div style={{ fontSize: "12px", color: "#7a7468", fontFamily: "var(--font-dm)", fontWeight: 300, lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LOOKBOOK ── */}
      <div style={{ background: "#1a1a1a", padding: "80px 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px", paddingBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "var(--font-dm)", fontWeight: 600, marginBottom: "8px" }}>Estilo</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#f5f0e8", letterSpacing: "-0.02em", fontFamily: "var(--font-playfair)" }}>Lookbook Verão</h2>
            </div>
            <Link href="/colecoes" style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a5450", textDecoration: "none", fontFamily: "var(--font-dm)", fontWeight: 500, borderBottom: "1px solid #3a3430", paddingBottom: "2px" }}>
              Ver lookbook completo
            </Link>
          </div>

          {/* 5-panel mosaic */}
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gridTemplateRows: "300px 240px", gap: "10px" }}>
            {/* Big left */}
            <Link href="/colecoes" style={{ textDecoration: "none", gridRow: "1 / 3" }}>
              <div className="lookbook-item" style={{ height: "100%" }}>
                <div style={{ height: "100%", background: "linear-gradient(160deg, #2a1f2e 0%, #1a1a2e 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "90px", transition: "transform 0.5s ease" }}
                  className="lookbook-zoom">👗</div>
                <div className="lookbook-overlay"><span className="lookbook-tag">Look Noturno</span></div>
              </div>
            </Link>
            {[
              { emoji: "🧥", title: "Casual Chic", bg: "linear-gradient(160deg, #1a2030 0%, #243050 100%)" },
              { emoji: "👖", title: "Street Style", bg: "linear-gradient(160deg, #20281a 0%, #2e3820 100%)" },
              { emoji: "👔", title: "Office Look", bg: "linear-gradient(160deg, #28201a 0%, #382c20 100%)" },
              { emoji: "🌸", title: "Verão", bg: "linear-gradient(160deg, #2a1f28 0%, #3d2b38 100%)" },
            ].map((item) => (
              <Link key={item.title} href="/colecoes" style={{ textDecoration: "none" }}>
                <div className="lookbook-item" style={{ height: "100%" }}>
                  <div style={{ height: "100%", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "52px", transition: "transform 0.5s ease" }}
                    className="lookbook-zoom">{item.emoji}</div>
                  <div className="lookbook-overlay"><span className="lookbook-tag">{item.title}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}