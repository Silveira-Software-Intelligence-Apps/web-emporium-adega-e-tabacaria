"use client";
import WhatsAppButton from '../components/WhatsAppButton';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{ background: '#09090f', color: '#f4f4f8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"LocalBusiness","name":"Emporium Adega E Tabacaria","description":"Atendimento profissional, resultado com garantia e orçamento gratuito. Entre em contato agora e receba resposta em até 1 hora.","telephone":"+555511930065321","address":{"@type":"PostalAddress","addressLocality":"Barueri","addressCountry":"BR"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","bestRating":"5","reviewCount":"52"}}' }} />

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#09090fe8', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid #1f1f2e', height: '68px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1rem', color: '#000' }}>E</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f4f4f8' }}>Emporium Adega E Tabacaria</div>
          </div>
          <div className="hide-mobile" style={{ display: 'flex', gap: '36px', fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#servicos" style={{ color: '#71717a', transition: 'color .15s' }}>Serviços</a>
            <a href="#galeria" style={{ color: '#71717a', transition: 'color .15s' }}>Galeria</a>
            <a href="#sobre" style={{ color: '#71717a', transition: 'color .15s' }}>Sobre</a>
            <a href="#avaliacoes" style={{ color: '#71717a', transition: 'color .15s' }}>Avaliações</a>
            <a href="#faq" style={{ color: '#71717a', transition: 'color .15s' }}>FAQ</a>
            <a href="#contato" style={{ color: '#71717a', transition: 'color .15s' }}>Contato</a>
          </div>
          <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            WhatsApp
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, #09090ff5 0%, #09090fcc 45%, #09090f55 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, #09090f, transparent)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1160px', margin: '0 auto', padding: '80px 28px', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#111118', border: '1px solid #6366f133', borderRadius: '50px', padding: '6px 14px', marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '.08em' }}>tabacaria · Barueri</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, marginBottom: '24px', color: '#f4f4f8', maxWidth: '700px' }}>
            Emporium Adega E Tabacaria
          </h1>
          <p className="hero-sub" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)', color: '#71717a', maxWidth: '540px', marginBottom: '44px', lineHeight: 1.75 }}>
            Atendimento profissional, resultado com garantia e orçamento gratuito. Entre em contato agora e receba resposta em até 1 hora.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ fontSize: '1.05rem', padding: '17px 36px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Entre em Contato
            </a>
            <a href="#servicos" className="btn-outline" style={{ fontSize: '1.05rem', padding: '15px 34px' }}>Nossos Serviços ↓</a>
          </div>
          <div className="hero-badge" style={{ marginTop: '48px', display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#111118', border: '1px solid #1f1f2e', borderRadius: '50px', padding: '10px 20px' }}>
            <span style={{ color: '#fbbf24', fontSize: '1rem', letterSpacing: '2px' }}>★★★★★</span>
            <span style={{ width: '1px', height: '16px', background: '#1f1f2e' }} />
            <span style={{ color: '#f4f4f8', fontSize: '0.9rem', fontWeight: 600 }}>5 no Google</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="divider-gradient" />
      <section style={{ background: '#0e0e16', borderBottom: '1px solid #1f1f2e' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', divideX: '1px solid #1f1f2e' }}>
        <div className="stat-card reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#6366f1', lineHeight: 1 }}>10+</div>
          <div style={{ width: '32px', height: '2px', background: '#6366f1', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#71717a' }}>Anos de mercado</div>
        </div>
        <div className="stat-card reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#6366f1', lineHeight: 1 }}>1k+</div>
          <div style={{ width: '32px', height: '2px', background: '#6366f1', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#71717a' }}>Clientes satisfeitos</div>
        </div>
        <div className="stat-card reveal">
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#6366f1', lineHeight: 1 }}>5★</div>
          <div style={{ width: '32px', height: '2px', background: '#6366f1', margin: '12px auto', borderRadius: '2px' }} />
          <div style={{ fontSize: '0.875rem', color: '#71717a' }}>Avaliação</div>
        </div>
        </div>
      </section>
      <div className="divider-gradient" />

      {/* ── SERVIÇOS ── */}
      <section id="servicos" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">O que oferecemos</span>
            <h2 className="section-title">Nossos Serviços</h2>
            <p style={{ color: '#71717a', maxWidth: '500px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Qualidade e excelência em cada atendimento. Tudo que você precisa em um só lugar.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="card reveal reveal-delay-1">
          <div className="card-icon">⭐</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f4f4f8', marginBottom: '8px' }}>Atendimento Premium</h3>
          <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.7 }}>Sempre disponível para você</p>
        </div>
        <div className="card reveal reveal-delay-2">
          <div className="card-icon">🛡️</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f4f4f8', marginBottom: '8px' }}>Suporte Especializado</h3>
          <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.7 }}>Equipe treinada</p>
        </div>
        <div className="card reveal reveal-delay-3">
          <div className="card-icon">💡</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f4f4f8', marginBottom: '8px' }}>Consultoria</h3>
          <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.7 }}>Estratégias sob medida</p>
        </div>
        <div className="card reveal reveal-delay-1">
          <div className="card-icon">🔧</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f4f4f8', marginBottom: '8px' }}>Projetos Customizados</h3>
          <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.7 }}>Do seu jeito</p>
        </div>
        <div className="card reveal reveal-delay-2">
          <div className="card-icon">🚀</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f4f4f8', marginBottom: '8px' }}>Entrega Rápida</h3>
          <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.7 }}>Sem atrasos</p>
        </div>
        <div className="card reveal reveal-delay-3">
          <div className="card-icon">🤝</div>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f4f4f8', marginBottom: '8px' }}>Pós-Venda</h3>
          <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: 1.7 }}>Acompanhamento completo</p>
        </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa">Falar sobre um serviço →</a>
          </div>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section id="galeria" style={{ background: '#0e0e16', padding: '104px 28px', borderTop: '1px solid #1f1f2e' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Nosso trabalho</span>
            <h2 className="section-title">Galeria</h2>
            <p style={{ color: '#71717a', maxWidth: '480px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Conheça nossa estrutura, ambiente e qualidade de perto.
            </p>
          </div>
          <div className="gallery-grid">
        <div className="gallery-item reveal reveal-delay-1">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop" alt="Emporium Adega E Tabacaria — foto 1" loading="lazy" />
        </div>
        <div className="gallery-item reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop" alt="Emporium Adega E Tabacaria — foto 2" loading="lazy" />
        </div>
        <div className="gallery-item reveal reveal-delay-3">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop" alt="Emporium Adega E Tabacaria — foto 3" loading="lazy" />
        </div>
        <div className="gallery-item reveal reveal-delay-1">
          <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80&auto=format&fit=crop" alt="Emporium Adega E Tabacaria — foto 4" loading="lazy" />
        </div>
        <div className="gallery-item reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80&auto=format&fit=crop" alt="Emporium Adega E Tabacaria — foto 5" loading="lazy" />
        </div>
        <div className="gallery-item reveal reveal-delay-3">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop" alt="Emporium Adega E Tabacaria — foto 6" loading="lazy" />
        </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE + IMAGEM ── */}
      <section id="sobre" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="grid-2-responsive">
          <div className="reveal">
            <span className="section-label">Nossa história</span>
            <h2 className="section-title">Por que escolher a Emporium Adega E Tabacaria?</h2>
            <p style={{ color: '#71717a', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '32px' }}>
              Referência em tabacaria em Barueri, a <strong style={{ color: '#f4f4f8' }}>Emporium Adega E Tabacaria</strong> se destaca pela qualidade no atendimento, 
              profissionais especializados e compromisso com a satisfação total dos nossos clientes.
               Com avaliação 5★ no Google, somos a escolha certa para quem busca resultado de verdade.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              {[
                'Profissionais certificados e experientes',
                'Atendimento rápido e personalizado',
                'Garantia em todos os serviços',
                'Preços justos e transparentes',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#6366f118', border: '1px solid #6366f144', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ color: '#71717a', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa">Entre em Contato →</a>
          </div>
          <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '520px', boxShadow: '0 32px 64px #09090f99' }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop" alt="Emporium Adega E Tabacaria" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #09090f88, transparent 60%)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: '#111118ee', backdropFilter: 'blur(12px)', border: '1px solid #1f1f2e', borderRadius: '16px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '1.8rem' }}>⭐</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#f4f4f8' }}>5</div>
                <div style={{ fontSize: '0.75rem', color: '#71717a' }}>Avaliação Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" style={{ background: '#0e0e16', padding: '104px 28px', borderTop: '1px solid #1f1f2e' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-label">O que nossos clientes dizem</span>
            <h2 className="section-title">O que dizem sobre nós</h2>
            <p style={{ color: '#71717a', fontSize: '1rem', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>Avaliações reais de clientes que confiam no nosso trabalho.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="review-card reveal reveal-delay-1">
          <div style={{ color: '#6366f1', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#71717a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"Excelente tabacaria! Atendimento super rápido e muito profissional. Recomendo a todos em Barueri que buscam qualidade de verdade."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #1f1f2e', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f144, #8b5cf644)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>👩</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f4f4f8' }}>Juliana M.</div>
              <div style={{ fontSize: '0.75rem', color: '#6366f1', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="review-card reveal reveal-delay-2">
          <div style={{ color: '#6366f1', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#71717a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"Fui por indicação e não me arrependo. Equipe atenciosa, preços transparentes e resultado que superou minha expectativa."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #1f1f2e', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f144, #8b5cf644)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>🧑</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f4f4f8' }}>Rafael S.</div>
              <div style={{ fontSize: '0.75rem', color: '#6366f1', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="review-card reveal reveal-delay-3">
          <div style={{ color: '#6366f1', fontSize: '1rem', marginBottom: '16px', letterSpacing: '2px' }}>★★★★★</div>
          <p style={{ color: '#71717a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"5★ Merece cada estrela. Ambiente profissional, equipe qualificada e atendimento que faz a diferença de verdade."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #1f1f2e', paddingTop: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f144, #8b5cf644)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>👩‍💼</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f4f4f8' }}>Carla O.</div>
              <div style={{ fontSize: '0.75rem', color: '#6366f1', display: 'flex', alignItems: 'center', gap: '4px' }}>✓ Cliente verificado</div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: '104px 28px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Dúvidas frequentes</span>
            <h2 className="section-title">Perguntas & Respostas</h2>
          </div>
          <div>
        <div className="faq-item reveal reveal-delay-1">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Como entrar em contato?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Pelo WhatsApp, telefone ou e-mail. Nossa equipe responde em até 1 hora em horário comercial.</div>
        </div>
        <div className="faq-item reveal reveal-delay-2">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Atendem em fins de semana?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Sim! Temos atendimento aos sábados. Consulte nossos horários completos pelo WhatsApp.</div>
        </div>
        <div className="faq-item reveal reveal-delay-1">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Quais formas de pagamento aceitam?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Aceitamos PIX, cartão de débito e crédito, boleto e dinheiro.</div>
        </div>
        <div className="faq-item reveal reveal-delay-2">
          <button className="faq-question" onClick={(e) => {
            const ans = e.currentTarget.nextElementSibling;
            const icon = e.currentTarget.querySelector('.faq-icon');
            const isOpen = ans.style.display === 'block';
            ans.style.display = isOpen ? 'none' : 'block';
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
          }}>
            <span>Fazem orçamento gratuito?</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer" style={{ display: 'none' }}>Sim! Orçamento sem compromisso e 100% gratuito. Entre em contato agora.</div>
        </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: '#71717a', marginBottom: '20px', fontSize: '0.95rem' }}>Sua dúvida não está aqui?</p>
            <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-outline">Perguntar pelo WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" style={{ background: '#0e0e16', padding: '104px 28px', borderTop: '1px solid #1f1f2e' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Fale conosco</span>
            <h2 className="section-title">Solicite um Orçamento</h2>
            <p style={{ color: '#71717a', maxWidth: '460px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Resposta em até 1 hora. Sem compromisso. Atendemos em Barueri e região.
            </p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            const n = e.target.nome.value.trim();
            const f = e.target.fone.value.trim();
            const m = e.target.msg.value.trim();
            const text = encodeURIComponent('Olá Emporium Adega E Tabacaria! Vi o site e gostaria de um orçamento. Nome: ' + n + ', Tel: ' + f + (m ? ', Mensagem: ' + m : ''));
            window.open('https://wa.me/555511930065321' + ('5511930065321' ? '?text=' + text : ''), '_blank');
          }} style={{ display: 'grid', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-2-responsive">
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f4f4f8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Seu nome *</label>
                <input name="nome" required placeholder="Ex: João Silva" style={{ width: '100%', padding: '14px 18px', background: '#111118', border: '1px solid #1f1f2e', borderRadius: '12px', color: '#f4f4f8', fontSize: '0.95rem', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#6366f1'} onBlur={e => e.target.style.borderColor='#1f1f2e'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f4f4f8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Telefone / WhatsApp *</label>
                <input name="fone" required placeholder="(11) 9 9999-0000" style={{ width: '100%', padding: '14px 18px', background: '#111118', border: '1px solid #1f1f2e', borderRadius: '12px', color: '#f4f4f8', fontSize: '0.95rem', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#6366f1'} onBlur={e => e.target.style.borderColor='#1f1f2e'} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f4f4f8', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Mensagem (opcional)</label>
              <textarea name="msg" rows={4} placeholder="Descreva o que você precisa..." style={{ width: '100%', padding: '14px 18px', background: '#111118', border: '1px solid #1f1f2e', borderRadius: '12px', color: '#f4f4f8', fontSize: '0.95rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor='#6366f1'} onBlur={e => e.target.style.borderColor='#1f1f2e'} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '4px 0 8px' }}>
              <input type="checkbox" name="lgpd" id="lgpd" required style={{ marginTop: '3px', accentColor: '#6366f1', cursor: 'pointer', flexShrink: 0 }} />
              <label htmlFor="lgpd" style={{ fontSize: '0.78rem', color: '#71717a', lineHeight: 1.5, cursor: 'pointer' }}>Concordo com o uso dos meus dados para contato comercial, conforme a <strong style={{ color: '#f4f4f8' }}>LGPD (Lei 13.709/2018)</strong>. Seus dados não serão compartilhados com terceiros.</label>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '8px' }}>
              <button type="submit" className="btn-wa" style={{ fontSize: '1.05rem', padding: '17px 48px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Enviar pelo WhatsApp
              </button>
              <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#71717a' }}>✓ Resposta rápida &nbsp;&middot;&nbsp; ✓ Sem compromisso &nbsp;&middot;&nbsp; ✓ 100% gratuito</p>
            </div>
          </form>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 28px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #09090ff0 0%, #09090fcc 100%)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: '#6366f1', borderRadius: '50%', filter: 'blur(120px)', opacity: .06, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Pronto para começar?</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', color: '#f4f4f8' }}>
            Fale com a <span style={{ color: '#6366f1' }}>Emporium Adega E Tabacaria</span><br />agora mesmo
          </h2>
          <p style={{ color: '#71717a', fontSize: '1.1rem', marginBottom: '44px', lineHeight: 1.7 }}>
            Atendimento rápido, profissional e sem complicação. Estamos em Barueri para te atender.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-wa" style={{ fontSize: '1.1rem', padding: '18px 44px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Entre em Contato
            </a>
            
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#09090f', borderTop: '1px solid #1f1f2e', padding: '64px 28px 32px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #1f1f2e' }} className="grid-responsive">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.1rem', color: '#000' }}>E</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f4f4f8' }}>Emporium Adega E Tabacaria</div>
              </div>
              <p style={{ color: '#71717a', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '280px' }}>
                tabacaria em Barueri. Qualidade e confiança em cada atendimento.
              </p>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#25d36622', border: '1px solid #25d36644', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25d366', fontSize: '0.9rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.534 5.876L.043 23.25a.75.75 0 00.916.916l5.374-1.491A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.492-5.195-1.354l-.374-.212-3.871 1.074 1.074-3.871-.212-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                </a>
                
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f4f4f8', marginBottom: '18px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>Menu</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[['#', 'Início'], ['#servicos', 'Serviços'], ['#galeria', 'Galeria'], ['#sobre', 'Sobre'], ['#avaliacoes', 'Avaliações'], ['#faq', 'FAQ'], ['#contato', 'Contato']].map(([href, label]) => (
                  <a key={label} href={href} style={{ color: '#71717a', fontSize: '0.875rem', transition: 'color .15s' }}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f4f4f8', marginBottom: '18px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>Contato</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="https://wa.me/555511930065321?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ color: '#71717a', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#25d366' }}>📱</span> 5511930065321</a>
                <div style={{ color: '#71717a', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#6366f1' }}>📍</span> Barueri</div>
                
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#71717a', fontSize: '0.8rem' }}>© 2026 Emporium Adega E Tabacaria. Todos os direitos reservados.</p>
            <p style={{ color: '#71717a', fontSize: '0.75rem', opacity: .4 }}>Site criado por Lead Machine</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
