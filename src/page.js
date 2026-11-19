import { config, contactUrl } from './config.js';
// ==================================================
// 01. ÍCONES
// ==================================================

const paths = {
  arrow:'<path d="M5 12h14m-7-7 7 7-7 7"/>',
  dumbbell:'<path d="m6 7-3 3v4l3 3m12-10 3 3v4l-3 3M6 5h3v14H6zm9 0h3v14h-3zM9 12h6"/>',
  flame:'<path d="M12 22c-4 0-7-3-7-7 0-3 2-6 4-8 0 3 1 4 2 4 2-3 2-6 1-9 5 4 7 9 7 13 0 4-3 7-7 7Z"/>',
  pulse:'<path d="M2 12h5l3-8 4 16 3-8h5"/>',
  cap:'<path d="m2 10 10-5 10 5-10 5-10-5Zm4 2v5c4 3 8 3 12 0v-5m4-2v7"/>',
  id:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M5 16c0-4 6-4 6 0m3-6h4m-4 4h4"/>',
  screen:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v4m-4 0h8"/>',
  run:'<circle cx="15" cy="4" r="2"/><path d="m12 7-4 5 5 3-2 6m2-14 4 5h4M9 14l-4 4H2"/>',
  chart:'<path d="M4 20V12m5 8V8m5 12V4m5 16V2"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  shield:'<path d="m12 3 8 3v6c0 5-5 8-8 10-3-2-8-5-8-10V6l8-3Zm-4 9 3 3 5-6"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  message:'<path d="M21 11.5a9 9 0 0 1-13.3 8L3 21l1.5-4.7A9 9 0 1 1 21 11.5Z"/><path d="M8 8c0 5 3 8 8 8"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>'
};
const icon=(n,size=24)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[n]||paths.arrow}</svg>`;

// ==================================================
// 02. FUNÇÕES AUXILIARES
// ==================================================

const esc = s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nav=[['inicio','Início'],['treinos','Treinamentos'],['corrida','Corrida'],['consultoria','Consultoria'],['resultados','Resultados'],['sobre','Sobre']];
const services=[['dumbbell','Hipertrofia','Ganho de massa muscular com um treino eficiente, progressivo e alinhado ao seu objetivo.'],['flame','Emagrecimento','Uma rotina de treino com estratégia, constância e foco em evolução sustentável.'],['pulse','Condicionamento físico','Mais resistência, disposição e desempenho para o dia a dia e para os esportes.']];
const navLinks=()=>nav.map(([id,t])=>`<a href="#${id}">${t}</a>`).join('');
const contact=(t,cl='btn primary',i='arrow')=>`<a class="${cl}" href="${esc(contactUrl)}" target="_blank" rel="noopener noreferrer">${icon(i,20)}<span>${t}</span></a>`;

// ==================================================
// 03. ESTRUTURA DA PÁGINA
// ==================================================

export function renderPage(assetBase='./images/'){
const asset=n=>assetBase+n;
  return `
    <header class="header">
      <div class="container nav-wrap">
        <a href="#inicio" class="brand" aria-label="Lucas Alves - Início">
          <img src="${asset('logo.png')}" alt="Lucas Alves Personal Trainer"/>
        </a>
        <nav id="navigation" aria-label="Navegação principal">${navLinks()}
        </nav>${contact('Agendar avaliação','btn primary nav-cta','calendar')}
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="navigation" aria-label="Abrir menu">${icon('menu',28)}
        </button>
      </div>
    </header>
    <main>


      <!-- HERO PRINCIPAL -->
      <section class="hero" id="inicio">
        <div class="hero-main">
          <div class="hero-background" style="background-image: url('${asset('hero.png')}')" aria-hidden="true">
          </div>
          <div class="container hero-layout">
            <div class="hero-copy">
              <div class="eyebrow hero-animate"><span class="dot"></span> PERSONAL TRAINER <span class="tiny-divider"></span> CREF ${esc(config.cref)}
              </div>
              <h1 class="hero-animate">TRANSFORME<br/>SEU CORPO.<br/><em>SUPERE SEUS<br/>LIMITES.</em>
              </h1>
              <p class="hero-animate">Treinamento personalizado para a sua realidade, com foco em evolução física, qualidade de vida e performance.</p>
              <div class="hero-actions hero-animate">
                <a class="btn primary"
                href="https://www.mfitpersonal.com.br/index?share=ODEyNDAvMC85LzA%3D"
                target="_blank" rel="noopener noreferrer">
                ${icon('arrow',20)}
                <span>Quero começar minha evolução</span>
              </a>
              <a class="btn outline" href="#consultoria">${icon('screen',20)} Consultoria presencial e online</a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- TREINAMENTO PERSONALIZADO -->
    <section class="section services" id="treinos">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow"><span class="dot"></span> O TREINO CERTO PARA VOCÊ</div>
          <h2>TREINAMENTO <em>PERSONALIZADO</em>
          </h2>
          <p>Programas individualizados, com estratégias alinhadas aos seus objetivos.</p>
        </div>
        <div class="services-grid">${services.map(([i,t,d],idx)=>`<article class="service card reveal" style="--delay:${idx*90}ms">
            <div class="card-top">${icon(i,34)}<span>0${idx+1}</span>
            </div>
            <h3>${t}</h3>
            <p>${d}</p>
            <a href="${esc(contactUrl)}" target="_blank" rel="noopener noreferrer" class="text-link">Saiba mais ${icon('arrow',18)}
            </a>
          </article>`).join('')}
        </div>
      </div>
    </section>


    <!-- CORRIDA DE RUA -->
    <section class="running" id="corrida">
      <div class="run-photo" style="background-image:url('${asset('corrida.webp')}')">
      </div>
      <div class="container run-layout">
        <div class="run-space">
        </div>
        <div class="run-content reveal">
          <div class="eyebrow"><span class="dot"></span> DA PRIMEIRA CORRIDA À MARATONA</div>
          <h2>PERFORMANCE NA <em>CORRIDA</em>
          </h2>
          <p>Encontre seu ritmo, evolua com consistência e prepare-se para novos desafios.</p>
          <div class="distances">${['5','10','15','21','42'].map(d=>`<div>
              <strong>${d}</strong><span>KM</span>
            </div>`).join('')}
          </div>
          <div class="run-benefits">${[['chart','Evolução constante'],['target','Estratégia de prova'],['run','Mais performance'],['shield','Treino consciente']].map(([i,t])=>`<div>${icon(i,27)}<span>${t}</span>
            </div>`).join('')}
          </div>${contact('Quero evoluir na corrida','btn primary')}
        </div>
      </div>
    </section>


    <!-- CONSULTORIA -->
    <section class="section consulting" id="consultoria">
      <div class="container two-col">
        <div class="reveal">
          <div class="eyebrow"><span class="dot"></span> ACOMPANHAMENTO PERSONALIZADO</div>
          <h2>CONSULTORIA<br/><em>PRESENCIAL E ONLINE</em>
          </h2>
          <p>Treine com planejamento, orientação e acompanhamento, de acordo com sua rotina e seus objetivos.</p>
          <ul class="checklist">${['Planejamento de treino individualizado','Acompanhamento e ajustes periódicos','Orientação para evoluir com consistência'].map(t=>`<li>${icon('check',21)} ${t}</li>`).join('')}</ul>${contact('Conhecer a consultoria','btn primary')}
        </div>
        <div class="phone-stage reveal">
          <div class="phone-glow">
          </div>
          <div class="phone">
            <div class="phone-notch">
            </div>
            <div class="phone-header">
              <img src="${asset('logo.png')}" alt=""/>
              <small>SEU ACOMPANHAMENTO</small>
            </div>
            <div class="phone-body"><span class="phone-small">SEU PRÓXIMO PASSO</span>
              <strong>Seu treino.<br/><em>Sua evolução.</em>
              </strong>${[['dumbbell','Treinos'],['chart','Evolução'],['target','Desempenho'],['calendar','Planejamento']].map(([i,t])=>`<div class="phone-item">${icon(i,20)} <span>${t}</span>${icon('chevron',15)}
              </div>`).join('')}
            </div>
            <div class="phone-bottom">
            </div>
          </div><span class="phone-caption">Representação ilustrativa</span>
        </div>
      </div>
    </section>


    <!-- RESULTADOS REAIS -->
    <section class="section results" id="resultados">
      <div class="container">
        <div class="section-head reveal">
          <div class="eyebrow">
            <span class="dot"></span>
            CADA EVOLUÇÃO IMPORTA
          </div>
          <h2>RESULTADOS <em>REAIS</em>
          </h2>
          <p>Objetivos diferentes, um mesmo propósito: evolução.</p>
        </div>

        <!-- Placeholders temporários: substituir por fotos reais autorizadas. -->
        <div class="results-carousel reveal" id="results-carousel"
             tabindex="0" aria-label="Cards de antes e depois">
          ${[1, 2, 3].map(n => `
          <article class="result-card">
            <div class="result-image placeholder before-box">
              <span class="placeholder-tag">ANTES</span>
              <div class="placeholder-content">
                <strong>Foto do aluno ${n}</strong>
                <span>Imagem antes</span>
              </div>
            </div>
            <div class="result-image placeholder after-box">
              <span class="placeholder-tag">DEPOIS</span>
              <div class="placeholder-content">
                <strong>Foto do aluno ${n}</strong>
                <span>Imagem depois</span>
              </div>
            </div>
          </article>
          `).join('')}

        </div>

        <div class="results-dots" role="group"
             aria-label="Navegação dos resultados" hidden></div>
      </div>
    </section>


    <!-- SOBRE LUCAS ALVES -->
    <section class="section about" id="sobre">
      <div class="container two-col about-layout">
        <div class="about-photo reveal">
          <img src="${asset('sobre.png')}" alt="Lucas Alves durante uma corrida de rua" loading="lazy"/>
          <div class="about-label"><span>PERSONAL TRAINER</span>
            <strong>LUCAS ALVES</strong>
          </div>
        </div>
        <div class="reveal">
          <div class="eyebrow"><span class="dot"></span> QUEM VAI TE ACOMPANHAR</div>
          <h2>SOBRE <em>LUCAS ALVES</em>
          </h2>
          <p>Sou Lucas Alves, Personal Trainer, graduado em Educação Física e apaixonado por musculação e corrida de rua.</p>
          <p>Minha missão é ajudar você a superar seus limites através de um treinamento personalizado, respeitando sua individualidade e seus objetivos.</p>
          <p>Acredito que disciplina, constância e orientação profissional são a base para conquistar resultados duradouros.</p>
          <div class="credentials">${icon('cap',28)}
            <div>
              <strong>Graduado em Educação Física</strong><span>CREF ${esc(config.cref)}</span>
            </div>
          </div>
          <a class="text-link" href="${esc(config.instagram)}" target="_blank" rel="noopener noreferrer">${icon('instagram',20)} Acompanhe meu trabalho ${icon('arrow',18)}
          </a>
        </div>
      </div>
    </section>


    <!-- CHAMADA FINAL -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-panel reveal">
          <div>
            <div class="eyebrow">O PRÓXIMO PASSO É SEU</div>
            <h2>VAMOS JUNTOS PARA<br/>A SUA <em>EVOLUÇÃO?</em>
            </h2>
          </div>
          <div>
            <p>Tire suas dúvidas e descubra como começar um acompanhamento personalizado.</p>${contact('Falar com Lucas','btn cta-white','message')}
          </div>
        </div>
      </div>
    </section>
    </main>


    <!-- RODAPÉ -->
    <footer>
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="${asset('logo.png')}" alt="Lucas Alves Personal Trainer"/>
          <p>Disciplina. Evolução. Performance.</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <div class="footer-links">${navLinks()}
          </div>
        </div>
        <div>
          <h3>Contato</h3>
          <a href="${esc(contactUrl)}" target="_blank" rel="noopener noreferrer">${config.whatsapp?'WhatsApp':'Enviar mensagem'}
          </a>
          <a href="${esc(config.appUrl)}" target="_blank" rel="noopener noreferrer">Acessar MFIT Personal</a>${config.email?`<a href="mailto:${esc(config.email)}">${esc(config.email)}
          </a>`:''}
        </div>
        <div>
          <h3>Redes sociais</h3>
          <a class="social" href="${esc(config.instagram)}" target="_blank" rel="noopener noreferrer">${icon('instagram',20)} ${esc(config.instagramHandle)}
          </a>
        </div>
      </div>
      <div class="container footer-bottom"><span>© ${new Date().getFullYear()} Lucas Alves Personal Trainer.</span><span>CREF ${esc(config.cref)}</span>
      </div>
    </footer>
    <a class="floating-contact" href="${esc(contactUrl)}" aria-label="Falar com Lucas" target="_blank" rel="noopener noreferrer">${icon('message',25)}
    </a>`;
}

// ==================================================
// CARROSSEL DE RESULTADOS — DOTS
// ==================================================

function initResultsCarousel(root) {
  const carousel = root.querySelector('.results-carousel');
  const dots = root.querySelector('.results-dots');

  if (!carousel || !dots) return () => {};

  let positions = [];
  let active = -1;

  const sync = () => {
    if (!positions.length) return;

    const current = positions.reduce((best, position, index) =>
      Math.abs(position - carousel.scrollLeft) <
      Math.abs(positions[best] - carousel.scrollLeft)
        ? index : best, 0);

    if (active === current) return;
    active = current;

    [...dots.children].forEach((button, index) => {
      button.classList.toggle('active', index === active);
      if (index === active) {
        button.setAttribute('aria-current', 'true');
      } else {
        button.removeAttribute('aria-current');
      }
    });
  };

  const rebuild = () => {
    const max = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    const bounds = carousel.getBoundingClientRect();
    const cards = [...carousel.querySelectorAll('.result-card')];
    positions = [];

    if (max > 2) {
      cards.forEach(card => {
        const offset = card.getBoundingClientRect().left -
          bounds.left - carousel.clientLeft + carousel.scrollLeft;
        const position = Math.max(0, Math.min(max, offset));
        if (!positions.length || position - positions.at(-1) > 2) {
          positions.push(position);
        }
      });
    }

    dots.hidden = positions.length < 2;
    dots.replaceChildren();
    active = -1;

    positions.forEach((position, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'result-dot';
      button.setAttribute('aria-label', `Ir para o resultado ${index + 1}`);
      button.setAttribute('aria-controls', 'results-carousel');
      button.addEventListener('click', () => {
        carousel.scrollTo({
          left: position,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant' : 'smooth'
        });
      });
      dots.append(button);
    });

    sync();
  };

  carousel.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', rebuild);
  rebuild();

  return () => {
    carousel.removeEventListener('scroll', sync);
    window.removeEventListener('resize', rebuild);
    dots.replaceChildren();
  };
}

// ==================================================
// 04. MENU MOBILE E ANIMAÇÕES
// ==================================================

export function initPage(root=document){
  const cleanupResults = initResultsCarousel(root);
  const toggle=root.querySelector('.menu-toggle'), navEl=root.querySelector('#navigation');
  const setMenu=open=>{toggle?.setAttribute('aria-expanded',String(open));toggle?.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');navEl?.classList.toggle('open',open);if(toggle)toggle.innerHTML=icon(open?'close':'menu',28);};
  const onClick=()=>setMenu(toggle?.getAttribute('aria-expanded')!=='true'); const close=()=>setMenu(false); toggle?.addEventListener('click',onClick);navEl?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  const onKey=e=>{if(e.key==='Escape')close();};document.addEventListener('keydown',onKey);
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const observer=!reduced&&'IntersectionObserver'in window?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.13,rootMargin:'0px 0px -25px 0px'}):null;
  if(observer){root.querySelectorAll('.reveal').forEach(e=>{e.classList.add('pending');observer.observe(e);});}
  const header=root.querySelector('.header');const scroll=()=>header?.classList.toggle('scrolled',window.scrollY>16);window.addEventListener('scroll',scroll,{passive:true});scroll();
  return ()=>{cleanupResults();toggle?.removeEventListener('click',onClick);navEl?.querySelectorAll('a').forEach(a=>a.removeEventListener('click',close));document.removeEventListener('keydown',onKey);window.removeEventListener('scroll',scroll);observer?.disconnect();};
}