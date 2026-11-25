/* Goggins preview content + shared behaviour. Same file is published with every concept. */
window.GOGGINS = {
  address: ['99 Monkstown Road', 'Monkstown, Co. Dublin', 'A94 Y8D8'],
  email: 'info@gogginspub.com',
  phone: 'Phone number to confirm',
  opening: { iso: '2026-12-01T00:00:00Z', label: 'Tuesday 1 December 2026', short: '1 December' },

  hours: [
    ['Monday', '15:00', '23:30'],
    ['Tuesday', '15:00', '23:30'],
    ['Wednesday', '15:00', '23:30'],
    ['Thursday', '15:00', '23:30'],
    ['Friday', '15:00', '00:30'],
    ['Saturday', '11:00', '00:30'],
    ['Sunday', '12:30', '23:00'],
  ],

  storyIntro: [
    'Goggins has been on Monkstown Road since 1957. It has been a family pub its entire life — passed down through generations, each putting their own mark on it while keeping the things that made it worth keeping.',
    'After a difficult few years, it is reopening under new family management. The intention is to get back to what Goggins has always been — a good local pub for a great part of Dublin.',
  ],

  timeline: [
    { year: '1957', text: "Goggins opened on Monkstown Road as a family-run local. From the start it was a straightforward place — good pints, familiar faces, and a welcome that didn't need to try too hard." },
    { year: '1960s – 80s', text: 'The bar expanded, the upstairs lounge was added, and Goggins settled into its role as a proper neighbourhood pub. It became the kind of place that hosted the big nights and the quiet ones equally well.', images: ['/img/archive-1.jpg', '/img/archive-2.jpg', '/img/archive-3.jpg'] },
    { year: 'Late 1990s', text: 'The pub passed to the next generation, who renovated and ran it through its busiest years. For a long stretch Goggins was well-known across South Dublin — a reliable spot with a good atmosphere and a loyal crowd.' },
    { year: '2020 – 2024', text: 'Like much of the pub trade, Goggins struggled in the years after Covid. We closed our doors in April 2024 with the aim of reopening on 1st December 2026.' },
    { year: 'Today', text: 'Goggins reopens on 1st December 2026 under new family management. The aim is simple: restore what made the pub worth coming to in the first place, and give Monkstown back its local.' },
  ],

  menu: [
    { name: 'Pub Classics', note: 'Full food menu lands for opening. Sample dishes and prices shown.', items: [
      ['Toasted Special', 'Ham, cheese and tomato, toasted, with chips.', '€8.50'],
      ['Wings', 'Buffalo, BBQ or honey mustard.', '€9.50'],
      ['Fish & Chips', 'Cod in batter, hand-cut chips, mushy peas, tartare sauce.', '€16.50'],
      ['Beef Burger', 'Irish beef, lettuce, tomato, onion, house sauce, chips.', '€14.50'],
    ]},
    { name: 'Draught', items: [
      ['Guinness', 'Poured slowly, served right.', '€6.50'],
      ['Heineken', 'Crisp, cold lager.', '€6.20'],
      ['Hop House 13', 'Irish lager with a citrus hop note.', '€6.20'],
      ["Smithwick's", 'Smooth Irish red ale.', '€6.00'],
    ]},
    { name: 'Spirits & Wine', note: 'Ask at the bar for the full spirits list.', items: [
      ['Irish Whiskey', 'Jameson, Proper Twelve, Teeling and more.', 'from €5.50'],
      ['Gin & Tonic', 'House gin, Fever-Tree tonic.', 'from €7.50'],
      ['House Wine', 'Red, white or rosé.', 'glass from €6.50'],
    ]},
    { name: 'Soft & Hot', items: [
      ['Soft Drinks', 'Coca-Cola, 7UP, Club Orange, water.', '€3.00'],
      ['Tea or Coffee', 'Freshly brewed.', '€3.50'],
    ]},
    { name: 'Christmas Party Menu', note: 'Placeholder. Set menus for groups of 12+ to be confirmed with the kitchen.', items: [
      ['Two courses', 'Starter and main, tea or coffee.', 'TBC'],
      ['Three courses', 'Starter, main and dessert, tea or coffee.', 'TBC'],
      ['Finger food', 'Platters for standing parties upstairs.', 'TBC'],
    ]},
  ],

  weekly: [
    ['Monday', 'Quiet Monday', 'The easy start to the week. Fire on, papers out.', 'From 5pm'],
    ['Tuesday', 'Kitchen Specials', 'A changing special from the kitchen, once food starts.', ''],
    ['Wednesday', 'Wine & Dine', 'Bottle of house wine with two mains, once food starts.', 'From 5pm'],
    ['Thursday', 'Quiz Night', 'Teams of up to six. Book a table, it fills up.', '8.30pm'],
    ['Friday', 'After Work', 'Doors open at 3pm and a full bar by six.', 'From 3pm'],
    ['Saturday', 'Live Music', 'Local acts, from folk to covers.', 'From 9pm'],
    ['Sunday', 'Trad & Sport', 'Trad session in the afternoon, the match after.', '3pm · 6pm'],
  ],

  december: [
    ['Tue 1 Dec', 'Opening Night', 'Doors open on Monkstown Road for the first time in two years.'],
    ['Sat 5 Dec', 'First Saturday Back', 'Live music in the front bar.'],
    ['Thu 10 Dec', 'Christmas Quiz', 'Teams of up to six. Festive rounds.'],
    ['Sun 13 Dec', 'Christmas Trad Session', 'Musicians welcome, bring an instrument.'],
    ['All month', 'Christmas Parties', 'The upstairs lounge takes 25 to 40.'],
    ['Sat 26 Dec', "St Stephen's Day", 'Leopardstown Christmas racing on the big screen.'],
    ['Thu 31 Dec', "New Year's Eve", 'See the year out at the local.'],
  ],

  sports: [
    ['Premier League', 'Weekend fixtures', 'Every screen'],
    ['Champions Cup Rugby', 'Leinster & Munster December rounds', 'Front bar'],
    ['Leopardstown Christmas Festival', '26–29 December', 'Front bar'],
    ['GAA & Six Nations', 'From the new year', 'Every screen'],
  ],

  spaces: [
    { name: 'Front Bar', cap: 'Walk-ins', img: '/img/bar.jpg', text: 'Warm wood, classic snugs and daylight from Monkstown Road. The heart of the pub for a casual pint.' },
    { name: 'The Snug', cap: 'Up to 8', img: null, text: 'A quiet corner away from the main bar for a small group or a long chat.' },
    { name: 'Upstairs Lounge', cap: '25–40 people', img: null, text: 'Bright, flexible room for birthdays, Christmas parties, christenings and work drinks. Drinks packages on request. Food is likely from January.' },
  ],

  outstanding: [
    'Logo files (chosen concept, outlined vector)',
    'Professional photos: bar, upstairs lounge, food, pints, staff',
    'Final food menu and prices',
    'Confirmed phone number and booking system',
    'Confirmed weekly events and December programme',
  ],
};

/* ---------- shared behaviour ---------- */
window.GG = (function () {
  const G = window.GOGGINS;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  function route() {
    const pages = [...document.querySelectorAll('[data-page]')];
    const ids = pages.map((p) => p.dataset.page);
    const id = ids.includes(location.hash.slice(1)) ? location.hash.slice(1) : ids[0];
    pages.forEach((p) => (p.hidden = p.dataset.page !== id));
    document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('is-active', a.dataset.nav === id));
    document.body.dataset.current = id;
  }

  function setMode(mode) {
    document.body.classList.toggle('is-open', mode === 'after');
    document.querySelectorAll('[data-when]').forEach((el) => (el.hidden = el.dataset.when !== mode));
    document.querySelectorAll('[data-mode-btn]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.modeBtn === mode)));
    store.set('gg-mode', mode);
  }

  function countdown() {
    const target = new Date(G.opening.iso).getTime();
    const els = document.querySelectorAll('[data-countdown]');
    const pad = (n) => String(n).padStart(2, '0');
    const tick = () => {
      let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
      const d = Math.floor(s / 86400); s -= d * 86400;
      const h = Math.floor(s / 3600); s -= h * 3600;
      const m = Math.floor(s / 60); s -= m * 60;
      els.forEach((el) => {
        const set = (k, v) => { const n = el.querySelector(`[data-cd="${k}"]`); if (n) n.textContent = v; };
        set('d', d); set('h', pad(h)); set('m', pad(m)); set('s', pad(s));
      });
    };
    tick();
    setInterval(tick, 1000);
  }

  function todayHours() {
    const day = new Intl.DateTimeFormat('en-IE', { weekday: 'long', timeZone: 'Europe/Dublin' }).format(new Date());
    const row = G.hours.find((h) => h[0] === day) || G.hours[0];
    return { day, open: row[1], close: row[2] };
  }

  function forms() {
    document.querySelectorAll('form[data-mailto]').forEach((f) => {
      f.addEventListener('submit', (e) => {
        e.preventDefault();
        const lines = [];
        f.querySelectorAll('input, select, textarea').forEach((el) => {
          const lab = el.closest('label') || (el.id && f.querySelector(`label[for="${el.id}"]`));
          const name = (lab ? lab.textContent : (el.placeholder || el.name || '')).trim();
          if (el.type === 'checkbox') { if (el.checked) lines.push('Interested in: ' + name); }
          else if (el.value) lines.push(name + ': ' + el.value);
        });
        const subject = 'Website: ' + (f.dataset.mailto || 'Enquiry');
        location.href = 'mailto:' + G.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n') + '\n');
        const note = f.querySelector('.form-note');
        if (note) { note.hidden = false; note.textContent = 'Your email app should open with your details filled in. Press send and we will be in touch. If nothing opened, email us at ' + G.email + '.'; }
      });
    });
  }

  function init() {
    window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });
    route();
    document.querySelectorAll('[data-mode-btn]').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.modeBtn)));
    setMode(Date.now() >= new Date(G.opening.iso).getTime() ? 'after' : 'before');
    document.querySelectorAll('[data-today]').forEach((el) => {
      const t = todayHours();
      el.textContent = `Open today ${t.open}–${t.close}`;
    });
    countdown();
    forms();
  }

  return { G, esc, init, todayHours };
})();
