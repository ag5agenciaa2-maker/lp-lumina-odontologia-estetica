/**
 * LUMINA ODONTOLOGIA ESTÉTICA — JavaScript
 * Vanilla ES6+ | IntersectionObserver | Acessível
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     DEPARTURE: Guard clause para ambientes sem DOM
     ============================================================ */
  if (typeof window === 'undefined' || !document.querySelector) return;

  /* ============================================================
     1. NAVBAR — Scroll + Menu Mobile
     ============================================================ */
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  const navbarToggle = document.getElementById('navbarToggle');

  let lastScrollTop = 0;
  const observarNavbar = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Efeito Scrolled (compactar)
    if (scrollTop > 50) {
      navbarWrapper.classList.add('navbar-wrapper--scrolled');
    } else {
      navbarWrapper.classList.remove('navbar-wrapper--scrolled');
    }

    // Efeito Hide/Show ao rolar
    if (scrollTop > lastScrollTop && scrollTop > 150) {
      // Rola para baixo → Esconde
      navbarWrapper.classList.add('navbar-wrapper--hidden');
    } else {
      // Rola para cima → Mostra
      navbarWrapper.classList.remove('navbar-wrapper--hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  // Throttle via requestAnimationFrame (nunca scroll event direto para lógica pesada)
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        observarNavbar();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Drawer mobile
  const drawer        = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose   = document.getElementById('drawerClose');

  function abrirDrawer() {
    drawer.classList.add('drawer--aberto');
    drawerOverlay.classList.add('drawer-overlay--visible');
    drawer.setAttribute('aria-hidden', 'false');
    drawerOverlay.setAttribute('aria-hidden', 'false');
    navbarToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
    drawerClose.focus();
  }

  function fecharDrawer() {
    drawer.classList.remove('drawer--aberto');
    drawerOverlay.classList.remove('drawer-overlay--visible');
    drawer.setAttribute('aria-hidden', 'true');
    drawerOverlay.setAttribute('aria-hidden', 'true');
    navbarToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    navbarToggle.focus();
  }

  if (navbarToggle && drawer) {
    navbarToggle.addEventListener('click', () => {
      const aberto = navbarToggle.getAttribute('aria-expanded') === 'true';
      aberto ? fecharDrawer() : abrirDrawer();
    });

    drawerClose?.addEventListener('click', fecharDrawer);
    drawerOverlay?.addEventListener('click', fecharDrawer);

    // Fechar ao clicar em qualquer link do drawer
    drawer.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', fecharDrawer);
    });

    // ESC fecha o drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('drawer--aberto')) {
        fecharDrawer();
      }
    });
  }

  /* ============================================================
     2. INTERSECTION OBSERVER — Animações de Scroll
     ============================================================ */

  // Configuração base
  const observerConfig = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger para serviços (legacy)
        if (entry.target.classList.contains('servico-item')) {
          const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 120;
          setTimeout(() => entry.target.classList.add('visible'), delay);
        }
        // Animação para Galeria Editorial
        else if (entry.target.classList.contains('espaco-editorial')) {
          entry.target.classList.add('visible');
        }
        // Fade-in genérico
        else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerConfig);
 
  // Observar elementos
  document.querySelectorAll('.servico-item, .espaco-editorial, .fade-in, .categoria-card, .med-grid-3-block, .reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Lógica do Carrossel Cinemático
  const cinematicTrack = document.getElementById('cinematicTrack');
  const slides = document.querySelectorAll('.cinematic-slide');
  const nextBtn = document.getElementById('cinematicNext');
  const prevBtn = document.getElementById('cinematicPrev');
  const indicatorsContainer = document.getElementById('cinematicIndicators');

  if (cinematicTrack && slides.length) {
    let currentIndex = 0;
    let autoPlayTimer;
    const autoPlayDuration = 6000;

    // Criar indicadores
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('indicator-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToCinematicSlide(i));
      indicatorsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.indicator-dot');

    function updateCinematicSlides() {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
      startCinematicAutoPlay();
    }

    function goToCinematicSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      updateCinematicSlides();
    }

    function nextCinematicSlide() {
      goToCinematicSlide(currentIndex + 1);
    }

    function prevCinematicSlide() {
      goToCinematicSlide(currentIndex - 1);
    }

    function startCinematicAutoPlay() {
      clearTimeout(autoPlayTimer);
      autoPlayTimer = setTimeout(nextCinematicSlide, autoPlayDuration);
    }

    // Eventos
    nextBtn?.addEventListener('click', nextCinematicSlide);
    prevBtn?.addEventListener('click', prevCinematicSlide);

    // Suporte a Swipe (Mobile)
    let touchStartX = 0;
    let touchEndX = 0;

    cinematicTrack.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    cinematicTrack.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleCinematicSwipe();
    }, { passive: true });

    function handleCinematicSwipe() {
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextCinematicSlide();
        else prevCinematicSlide();
      }
    }

    // Iniciar
    startCinematicAutoPlay();
  }

  /* ============================================================
     3. SERVIÇOS — Toggle de descrição (acordeão individual)
     ============================================================ */
  document.querySelectorAll('.servico-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const descricao = document.getElementById(targetId);
      const expandido = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !expandido);
      descricao.hidden = expandido;
    });
  });

  /* ============================================================
     4. COUNTERS — Animação de números
     ============================================================ */
  const countersSection = document.getElementById('counters');

  if (countersSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = countersSection.querySelectorAll('.stat-number, .counter-numero');
          counters.forEach(counter => animateCounter(counter));
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(countersSection);
  }

  function animateCounter(element) {
    const target = parseInt(element.dataset.target, 10);
    const prefix = element.dataset.prefix || '';
    const duration = 1800;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing quadrático ease-out
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(eased * target);

      element.textContent = prefix ? prefix : current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = prefix ? prefix : target;
      }
    }

    requestAnimationFrame(update);
  }

  /* ============================================================
     5. GRADE DE DEPOIMENTOS (MASONRY STYLE)
     ============================================================ */
  const depoimentosData = [
    {
      nome: 'Ana Carolina Andrade',
      texto: 'Experiência muito diferenciada. Dr. Lucas me atendeu final do ano passado, fechou meu dente depois que fiz canal e ficou perfeito! Fora que cheguei na recepção e fiquei esperando o atendimento comendo bolo 😂 Mas além disso, antes do problema com esse dente eu já tinha feito botox com ele. Simplesmente perfeito.'
    },
    {
      nome: 'Thayna Rezende',
      texto: 'Clínica diferente de todas que vi entre Realengo, Padre Miguel e Bangu. Lugar maravilhoso, aconchegante. Todos os Doutores com o mesmo padrão de atendimento, carismáticos, empáticos e maravilhosos. Atendimento desde a recepção aos Doutores excepcional.'
    },
    {
      nome: 'Eduarda Avila',
      texto: 'Experiência incrível e diferente de tudo! Desde a recepção ao atendimento atencioso, gentil e paciente do Dr Lucas. Alívio em sentir aquela sensação de segurança por estar em boas mãos com um profissional tão experiente e qualificado no que faz.'
    },
    {
      nome: 'Janaína Krustes',
      texto: 'Eu tive e ainda estou tendo uma ótima experiência com a Clínica e equipe, cheguei com muitos traumas e com jeitinho e carinho eles super me conquistaram. Enfim, ainda temos muitas coisas para viver juntos 😍 Obrigada pela compreensão e paciência 💙'
    },
    {
      nome: 'Marcos Pestana',
      texto: 'Show de bilheteria 👏👏👏 Ótima recepção e um excelente atendimento pelos profissionais Dr Lindsey e Dr Lucas. Local aconchegante e um delicioso cafezinho ☕'
    },
    {
      nome: 'Paulo Garcia',
      texto: 'Ambiente super requintado com atendimento nota 1.000, parabéns a equipe Lumina'
    },
    {
      nome: 'Norma Representações',
      texto: 'Muiito boa!!! Atendimento vip, profissionais super atenciosos, meu esposo fez uma extração, e pude entrar com ele, e primeira vez em todos os dentistas, meu esposo teve a pressão aferida. Poxa achei super profissional!!! Parabéns equipe da Lumina!!!'
    },
    {
      nome: 'Marcos Paulo Lima',
      texto: 'Experiência maravilhosa com o Dr. Lindsey, atencioso, paciente, bom trabalho!'
    },
    {
      nome: 'Nathália Monaco',
      texto: 'Clínica impecável, atendimento acolhedor e diferenciado. Amei meu atendimento, recomendo!'
    },
    {
      nome: 'Derma Clinique by Ana Paula',
      texto: 'Dr Lucas, profissional incrível! Pessoa maravilhosa. Sucesso com a sua Clínica ✨✨✨✨✨'
    }
  ];

  /* ============================================================
     5. CARROSSEL DE DEPOIMENTOS PREMIUM V2
     ============================================================ */
  const carrosselTrack = document.getElementById('carrosselTrack');
  const indicadoresContainer = document.getElementById('carrosselIndicadores');
  const btnAnterior = document.getElementById('carrosselAnterior');
  const btnProximo = document.getElementById('carrosselProximo');

  let slideAtual = 0;
  let autoplayInterval;
  const autoplayDelay = 5000;

  function initCarrossel() {
    if (!carrosselTrack) return;

    // Limpar container
    carrosselTrack.innerHTML = '';
    indicadoresContainer.innerHTML = '';

    depoimentosData.forEach((dep, index) => {
      const card = document.createElement('div');
      card.className = `depoimento-card-v2 ${index === 0 ? 'active' : ''}`;
      card.innerHTML = `
        <div class="depoimento-stars-v2">★★★★★</div>
        <p class="depoimento-texto-v2">"${dep.texto}"</p>
        <div class="depoimento-autor-v2">${dep.nome}</div>
      `;
      card.setAttribute('aria-hidden', index !== 0);
      carrosselTrack.appendChild(card);

      // Criar indicador
      const dot = document.createElement('button');
      dot.className = `carrossel-dot-v2 ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ver depoimento ${index + 1}`);
      dot.addEventListener('click', () => {
        resetAutoplay();
        goToSlide(index);
      });
      indicadoresContainer.appendChild(dot);
    });

    // Eventos
    btnAnterior?.addEventListener('click', () => {
      resetAutoplay();
      goToSlide(slideAtual - 1);
    });

    btnProximo?.addEventListener('click', () => {
      resetAutoplay();
      goToSlide(slideAtual + 1);
    });

    // Iniciar
    startAutoplay();
  }

  function goToSlide(index) {
    const cards = carrosselTrack.querySelectorAll('.depoimento-card-v2');
    const dots = indicadoresContainer.querySelectorAll('.carrossel-dot-v2');

    if (!cards.length) return;

    // Normalizar índice
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;

    // Desativar anterior
    cards[slideAtual].classList.remove('active');
    cards[slideAtual].setAttribute('aria-hidden', 'true');
    dots[slideAtual].classList.remove('active');

    // Ativar novo
    slideAtual = index;
    cards[slideAtual].classList.add('active');
    cards[slideAtual].setAttribute('aria-hidden', 'false');
    dots[slideAtual].classList.add('active');
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => goToSlide(slideAtual + 1), autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  initCarrossel();

  /* ============================================================
     6. FAQ — Acordeão nativo com animação
     ============================================================ */
  document.querySelectorAll('.faq-item').forEach(item => {
    const summary = item.querySelector('.faq-pergunta');

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      const estaAberto = item.hasAttribute('open');

      // Fechar outros (comportamento acordeão)
      document.querySelectorAll('.faq-item[open]').forEach(aberto => {
        if (aberto !== item) {
          aberto.removeAttribute('open');
        }
      });

      if (estaAberto) {
        item.removeAttribute('open');
      } else {
        item.setAttribute('open', '');
      }
    });
  });

  /* ============================================================
     7. FORMULÁRIO — Validação e envio WhatsApp
     ============================================================ */
  const formulario = document.getElementById('formularioContato');

  if (formulario) {
    // Máscara de telefone
    const telefoneInput = document.getElementById('telefone');
    telefoneInput?.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, '');
      if (valor.length > 11) valor = valor.slice(0, 11);

      if (valor.length > 7) {
        valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
      } else if (valor.length > 2) {
        valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
      } else if (valor.length > 0) {
        valor = `(${valor}`;
      }

      e.target.value = valor;
    });

    // Validação e envio
    formulario.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome     = document.getElementById('nome');
      const email    = document.getElementById('email');
      const telefone = document.getElementById('telefone');
      const servico  = document.getElementById('servico');
      const mensagem = document.getElementById('mensagem');

      let valido = true;

      // Limpar erros
      [nome, email, telefone, servico].forEach(campo => campo.classList.remove('erro'));

      // Validar nome
      if (!nome.value.trim() || nome.value.trim().length < 2) {
        nome.classList.add('erro');
        valido = false;
      }

      // Validar e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add('erro');
        valido = false;
      }

      // Validar telefone
      const telLimpo = telefone.value.replace(/\D/g, '');
      if (telLimpo.length < 10) {
        telefone.classList.add('erro');
        valido = false;
      }

      // Validar serviço
      if (!servico.value) {
        servico.classList.add('erro');
        valido = false;
      }

      if (!valido) return;

      // Montar mensagem no formato padrão AG5
      const nomeVal    = nome.value.trim();
      const emailVal   = email.value.trim();
      const telVal     = telefone.value;
      const servicoVal = servico.value;
      const msgVal     = mensagem.value.trim();

      let texto = `Olá, me chamo ${nomeVal}, vim através do site e gostaria de uma informação.\n`;
      texto += `\n- E-mail: ${emailVal}`;
      texto += `\n- Telefone: ${telVal}`;
      texto += `\n- Assunto: ${servicoVal}`;
      if (msgVal) {
        texto += `\n- Mensagem: ${msgVal}`;
      }

      const urlWhatsApp = `https://wa.me/5521973503293?text=${encodeURIComponent(texto)}`;
      window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');

      formulario.reset();
    });
  }

  /* ============================================================
     8. SCROLL SUAVE para âncoras
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ============================================================
     9. SECTION FADE-IN genérico
     ============================================================ */
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  // Adicionar classe fade-in em elementos que devem animar
  document.querySelectorAll('.section-header, .dor-solucao-title, .cta-layout, .localizacao-layout, .faq-lista').forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
  });

  /* ============================================================
     10. WHATSAPP PREMIUM — Balão com digitação
     ============================================================ */
  const waBubble  = document.getElementById('wa-message-bubble');
  const waTyping  = document.getElementById('wa-typing');
  const waMsg     = document.getElementById('wa-real-message');
  const waBadge   = document.getElementById('wa-notification');
  const waClose   = document.getElementById('wa-close-btn');
  const waMainBtn = document.getElementById('wa-main-btn');

  if (waBubble && waClose && waMainBtn) {
    // Mostrar balão após 6 s
    setTimeout(() => {
      waBubble.classList.add('show');
      // Simular digitação por 2,5 s
      setTimeout(() => {
        if (waTyping) waTyping.style.display = 'none';
        if (waMsg)    waMsg.style.display = 'block';

        // Sumir automaticamente após 30 segundos de exibição
        setTimeout(() => {
          waBubble.classList.remove('show');
          // Mostrar badge de notificação para indicar que há uma mensagem pendente
          if (waBadge) waBadge.classList.add('show');
        }, 30000);
      }, 2500);
    }, 6000);

    // Fechar balão → mostrar badge após 2 s
    waClose.addEventListener('click', (e) => {
      e.preventDefault();
      waBubble.classList.remove('show');
      setTimeout(() => { if (waBadge) waBadge.classList.add('show'); }, 2000);
    });

    // Clique no botão → remove balão e badge
    waMainBtn.addEventListener('click', () => {
      waBubble.classList.remove('show');
      if (waBadge) waBadge.classList.remove('show');
    });
  }

  /* ============================================================
     11. VÍDEOS — Boutique Reel V2 Handler
     ============================================================ */
  const videoModal    = document.getElementById('videoModal');
  const mainVideo     = document.getElementById('mainVideo');
  const modalClose    = videoModal?.querySelector('.video-modal-close');
  const modalOverlay  = videoModal?.querySelector('.video-modal-overlay');
  const modalTitle    = document.getElementById('modalTitle');
  const modalTag      = document.getElementById('modalTag');

  /* ──── BOAS-VINDAS: vídeo principal — play/pause com som ──── */
  const bvMain = document.getElementById('bvMainVideo');
  const bvFrame = bvMain ? bvMain.closest('.bv-video-frame') : null;
  const bvPlayBtn = bvFrame ? bvFrame.querySelector('.bv-play-btn') : null;
  const bvSoundBtn = bvFrame ? bvFrame.querySelector('.bv-sound-btn') : null;

  function bvUpdatePlayUI(playing) {
    if (!bvPlayBtn) return;
    const ip = bvPlayBtn.querySelector('.bv-icon-play');
    const ic = bvPlayBtn.querySelector('.bv-icon-pause');
    if (playing) {
      bvFrame.classList.add('is-playing');
      if (ip) ip.style.display = 'none';
      if (ic) ic.style.display = 'block';
      bvPlayBtn.setAttribute('aria-label', 'Pausar vídeo');
    } else {
      bvFrame.classList.remove('is-playing');
      if (ip) ip.style.display = 'block';
      if (ic) ic.style.display = 'none';
      bvPlayBtn.setAttribute('aria-label', 'Tocar com som');
    }
  }

  function bvUpdateSoundUI(muted) {
    if (!bvSoundBtn) return;
    const im = bvSoundBtn.querySelector('.bv-icon-muted');
    const il = bvSoundBtn.querySelector('.bv-icon-loud');
    if (muted) {
      if (im) im.style.display = 'block';
      if (il) il.style.display = 'none';
      bvSoundBtn.setAttribute('aria-label', 'Ativar som');
    } else {
      if (im) im.style.display = 'none';
      if (il) il.style.display = 'block';
      bvSoundBtn.setAttribute('aria-label', 'Mutar som');
    }
  }

  window.toggleBvMainVideo = function(btn) {
    if (!bvMain) return;
    if (bvMain.paused) {
      // Pausa outros vídeos
      document.querySelectorAll('.bv-card-video, .proc-video-el, .social-video').forEach(v => {
        if (v !== bvMain) v.pause();
      });
      bvMain.muted = false;
      bvMain.volume = 1;
      bvMain.play().then(() => { bvUpdatePlayUI(true); bvUpdateSoundUI(false); }).catch(() => {});
    } else {
      bvMain.pause();
      bvUpdatePlayUI(false);
    }
  };

  window.toggleBvSound = function(btn) {
    if (!bvMain) return;
    bvMain.muted = !bvMain.muted;
    if (!bvMain.muted) {
      bvMain.volume = 1;
      if (bvMain.paused) bvMain.play().catch(() => {});
    }
    bvUpdateSoundUI(bvMain.muted);
    if (!bvMain.paused) bvUpdatePlayUI(true);
  };

  /* Ativa som automaticamente quando a seção entra na viewport */
  if (bvMain && 'IntersectionObserver' in window) {
    let soundTried = false;
    const bvIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!soundTried) {
            soundTried = true;
            // Pausa outros sons
            document.querySelectorAll('.bv-card-video, .proc-video-el, .social-video').forEach(v => v.pause());
            bvMain.muted = false;
            bvMain.volume = 1;
            bvMain.play().then(() => { bvUpdatePlayUI(true); bvUpdateSoundUI(false); }).catch(() => {
              // Browser bloqueou autoplay com som → fica muted, mas tocando
              bvMain.muted = true;
              bvMain.play().then(() => { bvUpdatePlayUI(true); bvUpdateSoundUI(true); }).catch(() => {});
            });
          } else if (bvMain.paused) {
            bvMain.play().catch(() => {});
          }
        } else {
          if (!bvMain.paused) {
            bvMain.pause();
            bvUpdatePlayUI(false);
          }
        }
      });
    }, { threshold: 0.45 });
    bvIO.observe(bvFrame);
  }

  /* ──── CARDS DA DIREITA: trocam o vídeo principal (não abrem modal) ──── */
  const bvCaptionTitle = document.getElementById('bvCaptionTitle');
  const bvCaptionDesc  = document.getElementById('bvCaptionDesc');

  document.querySelectorAll('.bv-card').forEach(card => {
    card.addEventListener('click', () => {
      if (!bvMain) return;
      const src   = card.getAttribute('data-video');
      const title = card.getAttribute('data-title');
      const desc  = card.getAttribute('data-desc');
      const poster = card.getAttribute('data-poster');
      if (!src) return;

      // Marca card como ativo
      document.querySelectorAll('.bv-card').forEach(c => c.classList.remove('is-active'));
      card.classList.add('is-active');

      // Atualiza caption
      if (bvCaptionTitle && title) bvCaptionTitle.textContent = title;
      if (bvCaptionDesc  && desc)  bvCaptionDesc.textContent  = desc;

      // Troca o vídeo do player principal mantendo som
      const wasMuted = bvMain.muted;
      if (poster) bvMain.poster = poster;
      bvMain.src = src;
      bvMain.load();
      bvMain.muted = wasMuted; // preserva estado de som
      bvMain.play().then(() => { bvUpdatePlayUI(true); bvUpdateSoundUI(bvMain.muted); }).catch(() => {});

      // Pausa todos os card-videos da direita (não competem com áudio)
      document.querySelectorAll('.bv-card-video').forEach(v => v.pause());

      // Click manual interrompe o auto-rotation
      bvStopAutoRotate();
      bvStartAutoRotate();
    });
  });

  /* ──── AUTO-ROTATION: troca o vídeo principal a cada X segundos ──── */
  const bvCards = Array.from(document.querySelectorAll('.bv-card'));
  let bvAutoTimer = null;
  let bvAutoIndex = 0;
  const BV_INTERVAL = 8000; // 8 segundos por vídeo

  function bvFindActiveIndex() {
    const idx = bvCards.findIndex(c => c.classList.contains('is-active'));
    return idx >= 0 ? idx : 0;
  }

  function bvNextCard() {
    if (!bvCards.length) return;
    bvAutoIndex = (bvFindActiveIndex() + 1) % bvCards.length;
    const nextCard = bvCards[bvAutoIndex];
    if (nextCard) nextCard.click();
  }

  function bvStartAutoRotate() {
    bvStopAutoRotate();
    if (!bvCards.length || !bvFrame) return;
    bvAutoTimer = setInterval(bvNextCard, BV_INTERVAL);
  }

  function bvStopAutoRotate() {
    if (bvAutoTimer) { clearInterval(bvAutoTimer); bvAutoTimer = null; }
  }

  // Inicia auto-rotation quando a seção entra na viewport, pausa quando sai
  if (bvCards.length && bvFrame && 'IntersectionObserver' in window) {
    const bvRotateIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) bvStartAutoRotate();
        else bvStopAutoRotate();
      });
    }, { threshold: 0.3 });
    bvRotateIO.observe(bvFrame);
  }

  // Pausa enquanto o usuário interage (mouse no vídeo)
  if (bvFrame) {
    bvFrame.addEventListener('mouseenter', bvStopAutoRotate);
    bvFrame.addEventListener('mouseleave', () => {
      // Só reinicia se a seção ainda está na viewport
      const rect = bvFrame.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) bvStartAutoRotate();
    });
  }

  /* Cards antigos (.reel-card-v2, .dr-responde-card) abrem modal — mantém comportamento */
  document.querySelectorAll('.reel-card-v2, .dr-responde-card').forEach(card => {
    card.addEventListener('click', () => {
      const videoSrc = card.getAttribute('data-video');
      const title    = card.getAttribute('data-title')
                       || card.querySelector('h3')?.textContent
                       || card.querySelector('h4')?.textContent;
      const tag      = card.querySelector('.reel-tag-v2, .dr-tag')?.textContent;

      if (videoSrc && mainVideo) {
        // Injetar dados no modal
        if (modalTitle) modalTitle.textContent = title || 'Lumina Exclusive';
        if (modalTag)   modalTag.textContent   = tag || 'EXCLUSIVE';

        // Pausa qualquer vídeo institucional rodando (inclui o boas-vindas main)
        document.querySelectorAll('.proc-video-el, .social-video, .bv-video-el, .bv-card-video').forEach(v => v.pause());
        const bvFrame = document.querySelector('.bv-video-frame.is-playing');
        if (bvFrame) bvFrame.classList.remove('is-playing');

        mainVideo.src = videoSrc;
        videoModal.classList.add('active');
        mainVideo.muted = false; // Começar com som
        mainVideo.play().catch(() => {});
        document.body.classList.add('no-scroll');
      }
    });
  });

  /* ──── Autoplay institucional ao entrar na viewport ──── */
  const ambientVideos = document.querySelectorAll('video[data-autoplay-on-view="true"]');
  if (ambientVideos.length && 'IntersectionObserver' in window) {
    const ambientIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const v = entry.target;
        if (entry.isIntersecting) {
          v.muted = v.muted !== false ? true : v.muted; // permanece muted por padrão
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    ambientVideos.forEach(v => ambientIO.observe(v));
  }



  // Lógica de Som (Mute/Unmute)
  const btnMute = document.getElementById('btnMute');
  if (btnMute && mainVideo) {
    btnMute.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar fechar o modal
      mainVideo.muted = !mainVideo.muted;
      
      const iconMute = btnMute.querySelector('.icon-mute');
      const iconUnmute = btnMute.querySelector('.icon-unmute');
      
      if (mainVideo.muted) {
        iconMute.style.display = 'block';
        iconUnmute.style.display = 'none';
      } else {
        iconMute.style.display = 'none';
        iconUnmute.style.display = 'block';
      }
    });
  }

  // Lógica de Expandir (Fullscreen)
  const btnExpand = document.getElementById('btnExpand');
  if (btnExpand && mainVideo) {
    btnExpand.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mainVideo.requestFullscreen) {
        mainVideo.requestFullscreen();
      } else if (mainVideo.webkitRequestFullscreen) { /* Safari */
        mainVideo.webkitRequestFullscreen();
      } else if (mainVideo.msRequestFullscreen) { /* IE11 */
        mainVideo.msRequestFullscreen();
      }
    });
  }

  function fecharVideoModal() {
    videoModal.classList.remove('active');
    mainVideo.pause();
    mainVideo.src = '';
    document.body.classList.remove('no-scroll');
  }

  modalClose?.addEventListener('click', fecharVideoModal);
  modalOverlay?.addEventListener('click', fecharVideoModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal?.classList.contains('active')) {
      fecharVideoModal();
    }
  });

  /* ──────────────────────────────────────────────
     HERO VIDEO LOOP COM ÂNCORA (loop-start)
     - Toca em loop, sempre voltando ao segundo definido
     - Aplica data-playback-rate (câmera lenta)
  ─────────────────────────────────────────────── */
  (function initHeroVideo() {
    const hero = document.getElementById('heroVideo');
    if (!hero) return;

    const rate = parseFloat(hero.dataset.playbackRate) || 1;
    const loopStart = parseFloat(hero.dataset.loopStart) || 0;

    const applyRate = () => { try { hero.playbackRate = rate; } catch (e) {} };
    hero.defaultPlaybackRate = rate;
    applyRate();

    // Loop com âncora: ao terminar, volta pro segundo definido
    function rewindAndPlay() {
      try {
        hero.currentTime = loopStart;
      } catch (e) {}
      hero.play().then(applyRate).catch(() => {});
    }

    hero.addEventListener('loadedmetadata', () => {
      applyRate();
      if (loopStart > 0 && hero.currentTime < loopStart) {
        try { hero.currentTime = loopStart; } catch (e) {}
      }
    });

    hero.addEventListener('canplay', () => { applyRate(); hero.play().catch(() => {}); });
    hero.addEventListener('play', applyRate);
    hero.addEventListener('ratechange', () => {
      if (Math.abs(hero.playbackRate - rate) > 0.01) applyRate();
    });

    hero.addEventListener('ended', rewindAndPlay);

    // Fallback: alguns vídeos travam no último frame e não disparam 'ended'
    hero.addEventListener('timeupdate', function() {
      if (!hero.duration || !isFinite(hero.duration)) return;
      const remaining = hero.duration - hero.currentTime;
      if (remaining > 0 && remaining < 0.4 && !hero._endedFired) {
        hero._endedFired = true;
        rewindAndPlay();
      }
    });
    hero.addEventListener('play', () => { hero._endedFired = false; });

    hero.play().catch(() => {});
  })();

  /* ──────────────────────────────────────────────
     WHATSAPP PREMIUM — Balão flutuante (dispara ao chegar em Serviços)
     Timeline:
       • t=0s    → usuário chega na seção, botão verde aparece
       • t=25s   → balão sobe ("digitando..." → mensagem real)
       • t=40s   → balão some (15s exibido)
       • t=45s   → badge vermelho "1" aparece
  ─────────────────────────────────────────────── */
  (function initWaPremium() {
    const bubble = document.getElementById('wa-message-bubble');
    const typing = document.getElementById('wa-typing');
    const realMessage = document.getElementById('wa-real-message');
    const badge = document.getElementById('wa-notification');
    const closeBtn = document.getElementById('wa-close-btn');
    const mainBtn = document.getElementById('wa-main-btn');
    const targetSection = document.getElementById('servicos'); // 3ª seção visível: Serviços

    if (!bubble || !typing || !realMessage || !badge || !closeBtn || !mainBtn || !targetSection) return;

    const DELAY_BALÃO          = 25000; // 25s após entrar na seção
    const DURATION_TYPING      = 2500;  // 2.5s de "digitando..." antes da mensagem
    const DURATION_BALÃO_VISÍVEL = 15000; // 15s exibido depois de aparecer
    const DELAY_BADGE_APÓS_SUMIR = 5000;  // 5s após sumir → badge

    let triggered = false;
    let autoHideTimer = null;
    let badgeTimer = null;
    let userClosed = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;

          // Botão aparece imediatamente
          mainBtn.classList.add('visible');

          // Balão sobe após 25s
          setTimeout(() => {
            if (userClosed) return;
            bubble.classList.add('show');

            // 2.5s de "digitando..." → mensagem real
            // PageSpeed fix: usar classList (sem inline style) evita forced reflow
            setTimeout(() => {
              if (userClosed) return;
              typing.classList.add('is-hidden');
              realMessage.classList.add('is-visible');
              // próximo frame: liga o fade-in via classe (a transição vive no CSS)
              requestAnimationFrame(() => realMessage.classList.add('is-in'));
            }, DURATION_TYPING);

            // 15s depois → balão some automaticamente
            autoHideTimer = setTimeout(() => {
              if (userClosed) return;
              bubble.classList.remove('show');

              // 5s depois → badge "1" aparece
              badgeTimer = setTimeout(() => {
                if (userClosed) return;
                badge.classList.add('show');
              }, DELAY_BADGE_APÓS_SUMIR);
            }, DURATION_BALÃO_VISÍVEL);
          }, DELAY_BALÃO);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(targetSection);

    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      userClosed = true;
      bubble.classList.remove('show');
      if (autoHideTimer) clearTimeout(autoHideTimer);
      if (badgeTimer) clearTimeout(badgeTimer);
      // Após fechar manualmente, badge aparece em 5s pra manter engajamento
      setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APÓS_SUMIR);
    });

    mainBtn.addEventListener('click', () => {
      bubble.classList.remove('show');
      badge.classList.remove('show');
      if (autoHideTimer) clearTimeout(autoHideTimer);
      if (badgeTimer) clearTimeout(badgeTimer);
    });
  })();

}); // Fim DOMContentLoaded
