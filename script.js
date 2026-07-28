/* ============================================
   RESMIIN — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================
     MEGA DROPDOWN FIX
     Supports hover with close-delay & toggle on click
  =================================================== */
  document.querySelectorAll('.has-dropdown').forEach(wrap => {
    const dropdown = wrap.querySelector('.nav-dropdown, .mega-dropdown');
    if (!dropdown) return;

    let closeTimer = null;

    const isVisible = () => {
      return dropdown.style.opacity === '1';
    };

    const openDropdown = () => {
      clearTimeout(closeTimer);
      // Close all other dropdowns first
      document.querySelectorAll('.has-dropdown').forEach(other => {
        if (other !== wrap) {
          const otherDrop = other.querySelector('.nav-dropdown, .mega-dropdown');
          if (otherDrop) {
            otherDrop.style.opacity = '0';
            otherDrop.style.pointerEvents = 'none';
            otherDrop.style.transform = 'translateX(-50%) translateY(8px)';
          }
        }
      });
      dropdown.style.opacity = '1';
      dropdown.style.pointerEvents = 'auto';
      dropdown.style.transform = 'translateX(-50%) translateY(0)';
    };

    const closeDropdown = () => {
      dropdown.style.opacity = '0';
      dropdown.style.pointerEvents = 'none';
      dropdown.style.transform = 'translateX(-50%) translateY(8px)';
    };

    const scheduleClose = () => {
      closeTimer = setTimeout(closeDropdown, 150);
    };

    // Click trigger: toggle open/close when clicking Layanan / Mengeksplorasi
    const label = wrap.querySelector('.nav-item-label');
    if (label) {
      label.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isVisible()) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });
    }

    // Hover triggers
    wrap.addEventListener('mouseenter', openDropdown);
    wrap.addEventListener('mouseleave', scheduleClose);

    // Dropdown panel itself: cancel close when hovered
    dropdown.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    dropdown.addEventListener('mouseleave', scheduleClose);
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.nav-dropdown, .mega-dropdown').forEach(d => {
        d.style.opacity = '0';
        d.style.pointerEvents = 'none';
      });
    }
  });



  /* ===== NAVBAR SCROLL ===== */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    // scroll top button
    const btn = document.getElementById('scrollTopBtn');
    btn.classList.toggle('show', window.scrollY > 400);
    // parallax on hero image
    const heroImg = document.getElementById('heroBg');
    if (heroImg && window.scrollY < window.innerHeight) {
      heroImg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    }
    // reveal animations
    revealAll();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ===== HERO IMAGE ZOOM IN ON LOAD ===== */
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    window.addEventListener('load', () => {
      heroBg.classList.add('loaded');
    });
    // Fallback
    setTimeout(() => heroBg.classList.add('loaded'), 400);
  }

  /* ===== MOBILE MENU ===== */
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const spans = burger.querySelectorAll('span');

  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    spans[0].style.transform = open ? 'translateY(7px) rotate(45deg)'  : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      // Don't close if it is an accordion trigger
      if (a.classList.contains('mob-accordion-trigger') || a.classList.contains('mob-sub-trigger')) {
        return;
      }
      mobileNav.classList.remove('open');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  /* Mobile Accordion Toggle */
  document.querySelectorAll('.mob-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      trigger.classList.toggle('active');
      const content = trigger.nextElementSibling;
      if (content && content.classList.contains('mob-accordion-content')) {
        const isHidden = window.getComputedStyle(content).display === 'none';
        content.style.display = isHidden ? 'flex' : 'none';
      }
    });
  });

  document.querySelectorAll('.mob-sub-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const content = trigger.nextElementSibling;
      if (content) {
        const isHidden = window.getComputedStyle(content).display === 'none';
        content.style.display = isHidden ? 'flex' : 'none';
        const span = trigger.querySelector('span');
        if (span) {
          span.textContent = isHidden ? '−' : '+';
        }
      }
    });
  });

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // offset for fixed navbar
        setTimeout(() => window.scrollBy({ top: -70, behavior: 'smooth' }), 10);
      }
    });
  });

  /* ===== TESTIMONIAL SLIDER ===== */
  const testiTrack = document.getElementById('testiTrack');
  const testiPrev  = document.getElementById('testiPrev');
  const testiNext  = document.getElementById('testiNext');

  if (testiTrack) {
    let idx = 0;
    const cardGap = 20;

    const getCardWidth = () => {
      const first = testiTrack.children[0];
      return first ? first.offsetWidth + cardGap : 360;
    };
    const totalCards = testiTrack.children.length;

    const visibleCount = () => {
      const wrap = testiTrack.parentElement;
      return Math.max(1, Math.floor(wrap.offsetWidth / getCardWidth()));
    };

    const maxIdx = () => Math.max(0, totalCards - visibleCount());

    const slide = () => {
      idx = Math.max(0, Math.min(idx, maxIdx()));
      testiTrack.style.transform = `translateX(-${idx * getCardWidth()}px)`;
      testiPrev.style.opacity = idx === 0 ? '.4' : '1';
      testiNext.style.opacity = idx >= maxIdx() ? '.4' : '1';
    };

    testiNext.addEventListener('click', () => { if (idx < maxIdx()) { idx++; slide(); } });
    testiPrev.addEventListener('click', () => { if (idx > 0)        { idx--; slide(); } });

    window.addEventListener('resize', () => { idx = Math.min(idx, maxIdx()); slide(); });
    slide();

    // Touch/swipe support
    let startX = 0;
    testiTrack.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    testiTrack.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && idx < maxIdx()) { idx++; slide(); }
        else if (diff < 0 && idx > 0)  { idx--; slide(); }
      }
    });
  }

  /* ===== SERVICES SLIDER ===== */
  const svcTrack = document.getElementById('svcTrack');
  const svcLeft  = document.getElementById('svcLeft');
  const svcRight = document.getElementById('svcRight');

  if (svcTrack) {
    let svcIdx = 0;
    const gap = 18;
    const cardW = () => {
      const c = svcTrack.children[0];
      return c ? c.offsetWidth + gap : 258;
    };
    const total = svcTrack.children.length;
    const visible = () => {
      const outer = svcTrack.parentElement;
      return Math.max(1, Math.floor(outer.offsetWidth / cardW()));
    };
    const maxI = () => Math.max(0, total - visible());

    const svcSlide = () => {
      svcIdx = Math.max(0, Math.min(svcIdx, maxI()));
      svcTrack.style.transform = `translateX(-${svcIdx * cardW()}px)`;
      svcLeft.style.opacity  = svcIdx === 0    ? '.4' : '1';
      svcRight.style.opacity = svcIdx >= maxI() ? '.4' : '1';
    };

    svcRight.addEventListener('click', () => { if (svcIdx < maxI()) { svcIdx++; svcSlide(); } });
    svcLeft.addEventListener('click',  () => { if (svcIdx > 0)      { svcIdx--; svcSlide(); } });
    window.addEventListener('resize', svcSlide);
    svcSlide();
  }

  /* ===== SCROLL TO TOP ===== */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ===== SCROLL REVEAL ===== */
  function revealAll() {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), +delay);
      }
    });
  }

  // Mark elements for reveal
  const toReveal = [
    '.feat-box',
    '.testi-card',
    '.vm-visi', '.vm-misi',
    '.svc-card',
    '.pc',
    '.why-item',
    '.cta-inner',
  ];
  toReveal.forEach((sel, si) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.dataset.delay = (i % 4) * 80;
    });
  });

  // Also reveal section headers
  document.querySelectorAll('.testi-header, .vm-container > *, .pricing-container > .pricing-heading, .pricing-container > .pricing-sub, .why-container > .why-heading, .why-container > .why-sub').forEach(el => {
    el.classList.add('reveal');
  });

  // Initial check
  revealAll();

  /* ===== FEAT BOX TILT ===== */
  document.querySelectorAll('.feat-box').forEach(box => {
    box.addEventListener('mousemove', e => {
      const r  = box.getBoundingClientRect();
      const x  = e.clientX - r.left;
      const y  = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rx = (y - cy) / cy * -3;
      const ry = (x - cx) / cx * 3;
      box.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
    });
    box.addEventListener('mouseleave', () => { box.style.transform = ''; });
  });

  /* ===== NAVBAR ACTIVE HIGHLIGHT ===== */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) cur = s.id;
    });
    document.querySelectorAll('.nav-item > a').forEach(a => {
      const href = a.getAttribute('href') || '';
      a.style.color = href === `#${cur}` ? 'var(--blue)' : '';
    });
  }, { passive: true });

  /* ===== AUTO-PLAY TESTIMONIAL SLIDER ===== */
  let autoPlay;
  const startAutoPlay = () => {
    autoPlay = setInterval(() => {
      if (!testiTrack) return;
      const tc = testiTrack.children.length;
      const vis = () => {
        const w = testiTrack.parentElement.offsetWidth;
        const cw = testiTrack.children[0] ? testiTrack.children[0].offsetWidth + 20 : 360;
        return Math.max(1, Math.floor(w / cw));
      };
      const mx = Math.max(0, tc - vis());
      // Access idx from closure
      testiNext && testiNext.click();
    }, 5000);
  };

  // Pause on hover
  if (testiTrack) {
    testiTrack.addEventListener('mouseenter', () => clearInterval(autoPlay));
    testiTrack.addEventListener('mouseleave', startAutoPlay);
    startAutoPlay();
  }

  console.log('✅ Resmiin loaded');
});
