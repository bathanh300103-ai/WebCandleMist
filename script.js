/* ─── PRODUCTS DATA ─── */
const products = [
  { id:1, nameEn:'Coffee',      nameVi:'Nến Cà Phê',        descVi:'Hương cà phê rang đậm đà, ấm áp và đầy năng lượng — lý tưởng cho buổi sáng tỉnh thức.',  descEn:'Rich roasted coffee aroma, warm and energizing — perfect for your morning ritual.',        scent:'woody',  scentVi:'Gỗ & Nhựa', scentEn:'Woody',  price:'150,000₫', vnd:'~$6', badge:'new',        img:'anh/coffee1.png',     imgs:['anh/coffee1.png',     'anh/coffee2.png',     'anh/coffee3.png'],
    burnTime:'~55 giờ', weight:'200g', origin:'Việt Nam',
    materialVi:'Sáp đậu nành + tinh dầu cà phê', materialEn:'Soy wax + coffee essential oil',
    notesVi:['Cà phê rang', 'Gỗ đàn hương', 'Va-ni ấm', 'Nhựa cây'],
    notesEn:['Roasted coffee', 'Sandalwood', 'Warm vanilla', 'Resin'] },
  { id:2, nameEn:'Jasmine',     nameVi:'Nến Hoa Nhài',      descVi:'Hương hoa nhài tinh tế, dịu nhẹ — mang lại cảm giác thư thái và trong lành.',             descEn:'Delicate jasmine fragrance, soft and calming — bringing serenity to your space.',         scent:'floral', scentVi:'Hoa cỏ',    scentEn:'Floral', price:'150,000₫', vnd:'~$6', badge:'bestseller', img:'anh/jasmine1.png',    imgs:['anh/jasmine1.png',    'anh/jasmine2.png',    'anh/jasmine3.png'],
    burnTime:'~60 giờ', weight:'200g', origin:'Việt Nam',
    materialVi:'Sáp đậu nành + tinh dầu hoa nhài', materialEn:'Soy wax + jasmine essential oil',
    notesVi:['Hoa nhài', 'Hoa mộc lan', 'Phấn hoa nhẹ', 'Xạ hương trắng'],
    notesEn:['Jasmine', 'Magnolia', 'Soft powder', 'White musk'] },
  { id:3, nameEn:'Lemon Grass', nameVi:'Nến Sả Chanh',      descVi:'Hương sả thảo mộc tự nhiên, dịu nhẹ — xua tan căng thẳng và thanh lọc không gian sống.', descEn:'Natural herbal lemongrass scent — relieves stress and purifies your living space.',       scent:'herbal', scentVi:'Thảo mộc',  scentEn:'Herbal', price:'150,000₫', vnd:'~$6', badge:'',           img:'anh/lemongrass1.png', imgs:['anh/lemongrass1.png', 'anh/lemongrass2.png', 'anh/lemongrass3.png'],
    burnTime:'~65 giờ', weight:'220g', origin:'Việt Nam',
    materialVi:'Sáp đậu nành + tinh dầu sả & chanh', materialEn:'Soy wax + lemongrass & lime essential oil',
    notesVi:['Sả tươi', 'Lá bạc hà', 'Chanh xanh', 'Gừng nhẹ'],
    notesEn:['Fresh lemongrass', 'Mint leaf', 'Lime', 'Light ginger'] },
  { id:4, nameEn:'Orange',      nameVi:'Nến Cam',            descVi:'Hương cam tươi ngọt, rực rỡ — thổi vào không gian bầu không khí vui tươi và ấm áp.',      descEn:'Sweet and vibrant orange citrus — filling your space with warmth and sunny positivity.',  scent:'citrus', scentVi:'Cam Chanh', scentEn:'Citrus', price:'150,000₫', vnd:'~$6', badge:'limited',    img:'anh/cam1.png',     imgs:['anh/cam1.png',     'anh/cam2.png',     'anh/cam3.png'],
    burnTime:'~60 giờ', weight:'200g', origin:'Việt Nam',
    materialVi:'Sáp đậu nành + tinh dầu cam ngọt', materialEn:'Soy wax + sweet orange essential oil',
    notesVi:['Cam ngọt', 'Quýt tươi', 'Bưởi hồng', 'Chanh vàng'],
    notesEn:['Sweet orange', 'Fresh mandarin', 'Pink grapefruit', 'Lemon'] },
  { id:5, nameEn:'Rose',        nameVi:'Nến Hoa Hồng',      descVi:'Hương hoa hồng tươi mát, lãng mạn và tinh tế — dành cho những khoảnh khắc đặc biệt.',    descEn:'Fresh, romantic and elegant rose fragrance — for your most cherished moments.',         scent:'floral', scentVi:'Hoa cỏ',    scentEn:'Floral', price:'150,000₫', vnd:'~$6', badge:'',           img:'anh/rose1.png',       imgs:['anh/rose1.png',       'anh/rose2.png',       'anh/rose3.png'],
    burnTime:'~58 giờ', weight:'200g', origin:'Việt Nam',
    materialVi:'Sáp đậu nành + tinh dầu hoa hồng', materialEn:'Soy wax + rose essential oil',
    notesVi:['Hoa hồng đỏ', 'Hoa mẫu đơn', 'Quả litchi', 'Xạ hương'],
    notesEn:['Red rose', 'Peony', 'Lychee', 'Musk'] },
];

const badgeLabel = { bestseller:'Bestseller', new:'New', limited:'Limited', exclusive:'Exclusive' };

/* ─── LANGUAGE ─── */
let lang = 'vi';
const langBtn = document.getElementById('langBtn');

function applyLang() {
  document.querySelectorAll('[data-vi]').forEach(el => {
    const text = lang === 'vi' ? el.dataset.vi : el.dataset.en;
    if (el.tagName === 'H2') { el.innerHTML = text; }
    else { el.textContent = text; }
  });
  const heroTitle = document.querySelector('.hero-title');
  if (lang === 'en') {
    heroTitle.innerHTML = `<span>The breath</span><br><em>of nature</em>`;
  } else {
    heroTitle.innerHTML = `<span>Hơi thở</span><br><em>của thiên nhiên</em>`;
  }
  langBtn.textContent = lang === 'vi' ? 'EN' : 'VI';

  // Update cart drawer hardcoded text
  document.querySelector('.cart-title').textContent     = lang === 'vi' ? 'Giỏ hàng'   : 'Your Cart';
  document.querySelector('.cart-checkout').textContent  = lang === 'vi' ? 'Thanh toán' : 'Checkout';
  document.querySelector('.cart-subtotal-label').textContent = lang === 'vi' ? 'Tổng cộng' : 'Total';

  // Persist lang for checkout page
  localStorage.setItem('mist_lang', lang);

  renderProducts(currentFilter);
  renderCart();
}

langBtn.addEventListener('click', () => {
  lang = lang === 'vi' ? 'en' : 'vi';
  applyLang();
});

/* ─── PRODUCTS ─── */
let currentFilter = 'all';

function renderProducts(filter) {
  currentFilter = filter;
  const grid = document.getElementById('productsGrid');
  const list = filter === 'all' ? products : products.filter(p => p.scent === filter);

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="transition-delay:${i * 0.06}s">
      <div class="product-img-wrap" onclick="openProduct(${p.id})">
        <img class="product-img" src="${p.img}" alt="${p.nameEn}" loading="lazy">
        <div class="product-img-overlay">
          <span class="product-img-overlay-label" data-vi="Xem chi tiết" data-en="View details">${lang === 'vi' ? 'Xem chi tiết' : 'View details'}</span>
        </div>
        ${p.badge ? `<div class="product-badge badge-${p.badge}">${badgeLabel[p.badge]}</div>` : ''}
      </div>
      <div class="product-info">
        <p class="product-scent">${lang === 'vi' ? p.scentVi : p.scentEn}</p>
        <h3 class="product-name">${lang === 'vi' ? p.nameVi : p.nameEn}</h3>
        <p class="product-desc">${lang === 'vi' ? p.descVi : p.descEn}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}<span class="price-vnd"> / ${p.vnd}</span></span>
          <button class="add-btn" onclick="addToCart(${p.id})">${lang === 'vi' ? 'Thêm vào giỏ' : 'Add to cart'}</button>
        </div>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    document.querySelectorAll('.product-card').forEach(card => {
      setTimeout(() => card.classList.add('visible'), 60);
    });
  });
}

/* ─── FILTER ─── */
document.getElementById('filterBar').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(btn.dataset.filter);
});

/* ─── MARQUEE ─── */
const items = [
  'Sáp đậu nành 100% tự nhiên','Natural Soy Wax',
  'Handcrafted in Vietnam','Thủ công tại Việt Nam',
  'Miễn phí vận chuyển','Free Shipping',
  'Eco-friendly Packaging','Bao bì xanh',
  'MIST — Hơi thở thiên nhiên','MIST — Breath of Nature'
];
const track = document.getElementById('marqueeTrack');
const doubled = [...items, ...items];
track.innerHTML = doubled.map(t => `<span class="marquee-item"><span class="marquee-dot"></span>${t}</span>`).join('');



/* ─── SCROLL REVEAL ─── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
function observeCards() {
  document.querySelectorAll('.product-card').forEach(c => observer.observe(c));
}

/* ─── CART ─── */
let cart = []; // { id, qty }

function addToCart(id) {
  const exists = cart.find(c => c.id === id);
  if (exists) exists.qty++;
  else cart.push({ id, qty: 1 });
  renderCart();
  
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  renderCart();
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  const badge = document.getElementById('cartBadge');
  const total = document.getElementById('cartTotal');

  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  badge.textContent = totalQty;
  badge.classList.toggle('show', totalQty > 0);

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">🕯️</span>${lang === 'vi' ? 'Giỏ hàng của bạn đang trống.' : 'Your cart is empty.'}</div>`;
    foot.style.display = 'none';
    return;
  }

  foot.style.display = 'block';
  body.innerHTML = cart.map(c => {
    const p = products.find(x => x.id === c.id);
    return `
    <div class="cart-item">
      <img class="cart-item-img" src="${p.img}" alt="${p.nameVi}">
      <div>
        <p class="cart-item-scent">${p.scentVi}</p>
        <p class="cart-item-name">${lang === 'vi' ? p.nameVi : p.nameEn}</p>
        <p class="cart-item-price">${p.price}</p>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${p.id})">✕</button>
    </div>`;
  }).join('');

  const sum = cart.reduce((s, c) => {
    const p = products.find(x => x.id === c.id);
    const num = parseInt(p.price.replace(/[^0-9]/g, ''));
    return s + num * c.qty;
  }, 0);
  total.textContent = sum.toLocaleString('vi-VN') + '₫';
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

// Checkout button — redirect to correct language checkout page
document.querySelector('.cart-checkout').addEventListener('click', () => {
  if (cart.length === 0) return;
  localStorage.setItem('mist_cart', JSON.stringify(cart));
  window.location.href = lang === 'vi' ? 'checkout_vn.html' : 'checkout_en.html';
});

/* ─── PRODUCT DETAIL PAGE (SPA navigation) ─── */
let pdpQty = 1;
let pdpCurrentId = null;

// Hương điệu được khai báo riêng cho từng sản phẩm trong mảng products (notesVi / notesEn)

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  pdpCurrentId = id;
  pdpQty = 1;

  // Fill image gallery — use imgs array for real thumbnails
  document.getElementById('pdpMainImg').src = p.imgs[0];
  document.getElementById('pdpMainImg').alt = p.nameEn;

  const thumbsHtml = p.imgs.map((src, i) => `
    <div class="pdp-thumb ${i===0?'active':''}" onclick="switchThumb(this,'${src}')">
      <img src="${src}" alt="${p.nameEn} ${i+1}">
    </div>`).join('');
  document.getElementById('pdpThumbs').innerHTML = thumbsHtml;

  // Text content
  document.getElementById('pdpScent').textContent = lang === 'vi' ? p.scentVi : p.scentEn;
  document.getElementById('pdpName').textContent   = lang === 'vi' ? p.nameVi : p.nameEn;
  document.getElementById('pdpNameSub').textContent = lang === 'vi' ? p.nameEn : p.nameVi;
  document.getElementById('pdpPrice').textContent   = p.price;
  document.getElementById('pdpPriceUsd').textContent = p.vnd;
  document.getElementById('pdpDesc').textContent     = lang === 'vi' ? p.descVi : p.descEn;

  // Specs động theo từng sản phẩm
  document.getElementById('pdpSpecBurnTime').textContent = p.burnTime || '~60 giờ';
  document.getElementById('pdpSpecMaterial').textContent = lang === 'vi' ? (p.materialVi || 'Sáp đậu nành') : (p.materialEn || 'Soy wax');
  document.getElementById('pdpSpecWeight').textContent   = p.weight   || '200g';
  document.getElementById('pdpSpecOrigin').textContent   = p.origin   || 'Việt Nam';
  document.getElementById('pdpQtyNum').textContent   = 1;
  document.getElementById('pdpBreadName').textContent = lang === 'vi' ? p.nameVi : p.nameEn;

  // Badge
  const badge = document.getElementById('pdpBadge');
  if (p.badge) {
    badge.textContent = badgeLabel[p.badge];
    badge.className = `pdp-badge badge-${p.badge}`;
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }

  // Scent notes — riêng cho từng sản phẩm
  const notes = (lang === 'vi' ? p.notesVi : p.notesEn) || [];
  document.getElementById('pdpNotes').innerHTML = notes.map(n => `<span class="pdp-note-tag">${n}</span>`).join('');

  // Add btn reset
  const addBtn = document.getElementById('pdpAddBtn');
  addBtn.textContent = lang === 'vi' ? 'Thêm vào giỏ' : 'Add to cart';
  addBtn.classList.remove('added');

  // Update spec/qty labels for lang
  document.querySelectorAll('#pdpPage [data-vi]').forEach(el => {
    if (el.id === 'pdpBreadName') return;
    el.textContent = lang === 'vi' ? el.dataset.vi : el.dataset.en;
  });

  // Related products (exclude current)
  const related = products.filter(x => x.id !== id).slice(0, 3);
  document.getElementById('pdpRelatedGrid').innerHTML = related.map(r => `
    <div class="pdp-related-card" onclick="openProduct(${r.id})">
      <div class="pdp-related-img-wrap">
        <img class="pdp-related-img" src="${r.img}" alt="${r.nameEn}" loading="lazy">
      </div>
      <div class="pdp-related-info">
        <p class="pdp-related-scent">${lang === 'vi' ? r.scentVi : r.scentEn}</p>
        <p class="pdp-related-name">${lang === 'vi' ? r.nameVi : r.nameEn}</p>
        <div class="pdp-related-footer">
          <span class="pdp-related-price">${r.price}</span>
          <button class="pdp-related-btn">${lang === 'vi' ? 'Xem chi tiết' : 'View'}</button>
        </div>
      </div>
    </div>`).join('');

  // Page transition: main exits left, pdp enters from right
  const mainSite = document.getElementById('mainSite');
  const pdpPage  = document.getElementById('pdpPage');

  mainSite.classList.add('page-exit');
  pdpPage.scrollTop = 0;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      pdpPage.classList.add('page-enter');
    });
  });

  document.body.style.overflow = 'hidden';
  
}

function closePdp() {
  const mainSite = document.getElementById('mainSite');
  const pdpPage  = document.getElementById('pdpPage');

  pdpPage.classList.remove('page-enter');
  mainSite.classList.remove('page-exit');

  document.body.style.overflow = 'hidden';
  setTimeout(() => { document.body.style.overflow = ''; }, 420);
}

function switchThumb(el, src) {
  document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('pdpMainImg').src = src;
}

document.getElementById('pdpBackBtn').addEventListener('click', closePdp);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePdp(); });

document.getElementById('pdpQtyMinus').addEventListener('click', () => {
  if (pdpQty > 1) { pdpQty--; document.getElementById('pdpQtyNum').textContent = pdpQty; }
});
document.getElementById('pdpQtyPlus').addEventListener('click', () => {
  pdpQty++; document.getElementById('pdpQtyNum').textContent = pdpQty;
});

document.getElementById('pdpAddBtn').addEventListener('click', () => {
  if (!pdpCurrentId) return;
  const exists = cart.find(c => c.id === pdpCurrentId);
  if (exists) exists.qty += pdpQty;
  else cart.push({ id: pdpCurrentId, qty: pdpQty });
  renderCart();

  const btn = document.getElementById('pdpAddBtn');
  btn.textContent = lang === 'vi' ? '✓ Đã thêm!' : '✓ Added!';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = lang === 'vi' ? 'Thêm vào giỏ' : 'Add to cart';
    btn.classList.remove('added');
  }, 1600);
});

renderCart();
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── INIT ─── */
renderProducts('all');
observeCards();

/* ================================================================
   📱  MOBILE ENHANCEMENTS
   (merged from mobile.js — do not create a separate file)
   ================================================================ */

(function () {
  const isMobile = () => window.innerWidth <= 768;

  /* ── Inject mobile HTML elements ── */
  function injectMobileElements() {

    /* 1. Hamburger button */
    const navRight = document.querySelector('.nav-right');
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger-btn';
    hamburger.setAttribute('aria-label', 'Menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    navRight.prepend(hamburger);

    /* 2. Mobile menu overlay + slide-down drawer */
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.id = 'mobileMenuOverlay';

    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.id = 'mobileMenu';
    menu.innerHTML = `
      <nav class="mobile-menu-links">
        <a href="#products" data-vi="Sản phẩm"    data-en="Products">Sản phẩm</a>
        <a href="#about"    data-vi="Về chúng tôi" data-en="About">Về chúng tôi</a>
        <a href="#contact"  data-vi="Liên hệ"      data-en="Contact">Liên hệ</a>
      </nav>`;

    document.body.prepend(overlay);
    document.body.prepend(menu);

    /* 3. Bottom navigation bar */
    const bottomNav = document.createElement('nav');
    bottomNav.className = 'bottom-nav';
    bottomNav.id = 'bottomNav';
    bottomNav.innerHTML = `
      <a href="#" class="bottom-nav-item active" id="bnHome"
         onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">
        <span class="bottom-nav-icon">🏠</span>
        <span data-vi="Trang chủ" data-en="Home">Trang chủ</span>
      </a>
      <a href="#products" class="bottom-nav-item" id="bnProducts">
        <span class="bottom-nav-icon">🕯️</span>
        <span data-vi="Sản phẩm" data-en="Shop">Sản phẩm</span>
      </a>
      <a href="#about" class="bottom-nav-item" id="bnAbout">
        <span class="bottom-nav-icon">🌿</span>
        <span data-vi="Về chúng tôi" data-en="About">Về chúng tôi</span>
      </a>
      <button class="bottom-nav-item" id="bnCart" onclick="openCart()">
        <span class="bottom-nav-icon">🛒</span>
        <span data-vi="Giỏ hàng" data-en="Cart">Giỏ hàng</span>
        <span class="bottom-nav-cart-badge" id="bnCartBadge">0</span>
      </button>`;
    document.body.appendChild(bottomNav);

    /* 4. Toast notification */
    const toast = document.createElement('div');
    toast.className = 'mist-toast';
    toast.id = 'mistToast';
    document.body.appendChild(toast);

    /* 5. PDP sticky CTA bar */
    const stickyCta = document.createElement('div');
    stickyCta.className = 'pdp-sticky-cta';
    stickyCta.id = 'pdpStickyCta';
    stickyCta.innerHTML = `
      <span class="pdp-sticky-price" id="pdpStickyPrice">150,000₫</span>
      <div class="pdp-sticky-qty">
        <button class="pdp-sticky-qty-btn" id="pdpStickyMinus">−</button>
        <span class="pdp-sticky-qty-num" id="pdpStickyNum">1</span>
        <button class="pdp-sticky-qty-btn" id="pdpStickyPlus">+</button>
      </div>
      <button class="pdp-sticky-add" id="pdpStickyAdd">
        <span id="pdpStickyAddLabel">Thêm vào giỏ</span>
      </button>`;
    document.body.appendChild(stickyCta);
  }

  /* ── Hamburger menu ── */
  function initHamburger() {
    const btn     = document.querySelector('.hamburger-btn');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menu    = document.getElementById('mobileMenu');

    const openMenu  = () => { btn.classList.add('open'); overlay.classList.add('open'); menu.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeMenu = () => { btn.classList.remove('open'); overlay.classList.remove('open'); menu.classList.remove('open'); document.body.style.overflow = ''; };

    btn.addEventListener('click', () => btn.classList.contains('open') ? closeMenu() : openMenu());
    overlay.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  /* ── Bottom nav: highlight active section on scroll ── */
  function initBottomNavActive() {
    const sections = [{ id: 'products', btn: 'bnProducts' }, { id: 'about', btn: 'bnAbout' }];
    window.addEventListener('scroll', () => {
      if (!isMobile()) return;
      let current = 'bnHome';
      sections.forEach(s => { const el = document.getElementById(s.id); if (el && window.scrollY >= el.offsetTop - 200) current = s.btn; });
      document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
      const active = document.getElementById(current);
      if (active) active.classList.add('active');
    });
  }

  /* ── Toast ── */
  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('mistToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* ── Bottom nav badge sync ── */
  function syncBottomBadge() {
    const badge = document.getElementById('bnCartBadge');
    const main  = document.getElementById('cartBadge');
    if (!badge || !main) return;
    const count = main.textContent;
    badge.textContent = count;
    count === '0' ? badge.classList.remove('show') : badge.classList.add('show');
  }

  /* ── Sticky CTA show / hide ── */
  const showStickyCta = () => { const c = document.getElementById('pdpStickyCta'); if (c && isMobile()) c.classList.add('visible'); };
  const hideStickyCta = () => { const c = document.getElementById('pdpStickyCta'); if (c) c.classList.remove('visible'); };

  /* ── PDP sticky CTA interactions ── */
  let stickyQty = 1;

  function initStickyCta() {
    const minusBtn = document.getElementById('pdpStickyMinus');
    const plusBtn  = document.getElementById('pdpStickyPlus');
    const numEl    = document.getElementById('pdpStickyNum');
    const addBtn   = document.getElementById('pdpStickyAdd');
    const label    = document.getElementById('pdpStickyAddLabel');
    if (!minusBtn) return;

    minusBtn.addEventListener('click', () => { if (stickyQty > 1) { stickyQty--; numEl.textContent = stickyQty; } });
    plusBtn.addEventListener('click',  () => { stickyQty++; numEl.textContent = stickyQty; });

    addBtn.addEventListener('click', () => {
      const id = window._mobilePdpId;
      if (!id) return;
      const exists = cart.find(c => c.id === id);
      if (exists) exists.qty += stickyQty;
      else cart.push({ id, qty: stickyQty });
      renderCart();
      syncBottomBadge();

      addBtn.classList.add('added');
      label.textContent = lang === 'vi' ? '✓ Đã thêm!' : '✓ Added!';
      showToast(lang === 'vi' ? 'Đã thêm vào giỏ hàng' : 'Added to cart');
      setTimeout(() => { addBtn.classList.remove('added'); label.textContent = lang === 'vi' ? 'Thêm vào giỏ' : 'Add to cart'; }, 1800);
    });
  }

  function syncStickyCtaToProduct(p) {
    const priceEl = document.getElementById('pdpStickyPrice');
    const numEl   = document.getElementById('pdpStickyNum');
    const addBtn  = document.getElementById('pdpStickyAdd');
    const label   = document.getElementById('pdpStickyAddLabel');
    if (priceEl) priceEl.textContent = p.price;
    stickyQty = 1;
    if (numEl)   numEl.textContent = 1;
    if (addBtn)  addBtn.classList.remove('added');
    if (label)   label.textContent = lang === 'vi' ? 'Thêm vào giỏ' : 'Add to cart';
  }

  /* ── PDP close listeners (direct bind — patch approach doesn't work
     because script.js registers its listeners before mobile.js runs) ── */
  function initPdpCloseListeners() {
    document.getElementById('pdpBackBtn').addEventListener('click', hideStickyCta);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') hideStickyCta(); });
  }

  /* ── Patch openProduct — use setTimeout(120) so page-enter class is
     already assigned before we call showStickyCta ── */
  function patchOpenProduct() {
    const original = window.openProduct;
    window.openProduct = function (id) {
      original(id);
      window._mobilePdpId = id;
      if (isMobile()) {
        const p = products.find(x => x.id === id);
        if (p) syncStickyCtaToProduct(p);
        setTimeout(showStickyCta, 120);
      }
    };
  }

  /* ── Patch addToCart: toast + badge ── */
  function patchAddToCart() {
    const original = window.addToCart;
    window.addToCart = function (id) {
      original(id);
      syncBottomBadge();
      if (isMobile()) {
        const p = products.find(x => x.id === id);
        const name = p ? (lang === 'vi' ? p.nameVi : p.nameEn) : '';
        showToast((lang === 'vi' ? '✓ Đã thêm: ' : '✓ Added: ') + name);
      }
    };
  }

  /* ── Patch renderCart: keep badge in sync ── */
  function patchRenderCart() {
    const original = window.renderCart;
    window.renderCart = function () { original(); syncBottomBadge(); };
  }

  /* ── Patch openCart/closeCart:
     — hide sticky CTA so it doesn't overlap the checkout button
     — restore sticky CTA when cart closes (if PDP is still open)    ── */
  function patchCartDrawer() {
    const origOpen  = window.openCart;
    const origClose = window.closeCart;

    window.openCart = function () {
      origOpen();
      hideStickyCta();
      if (isMobile()) document.body.style.overflow = 'hidden';
    };
    window.closeCart = function () {
      origClose();
      if (isMobile()) document.body.style.overflow = '';
      const pdp = document.getElementById('pdpPage');
      if (pdp && pdp.classList.contains('page-enter') && isMobile()) showStickyCta();
    };
  }

  /* ── Swipe right to close cart ── */
  function initSwipeCloseCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    let startX, startY, dragging = false;

    drawer.addEventListener('touchstart', e => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; dragging = false; }, { passive: true });
    drawer.addEventListener('touchmove', e => {
      if (!isMobile()) return;
      const dx = e.touches[0].clientX - startX;
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dx > 20 && dy < 60) { dragging = true; drawer.style.transform = `translateX(${Math.max(0, dx)}px)`; drawer.style.transition = 'none'; }
    }, { passive: true });
    drawer.addEventListener('touchend', e => {
      if (!dragging) return;
      const dx = e.changedTouches[0].clientX - startX;
      drawer.style.transition = '';
      dx > 100 ? closeCart() : (drawer.style.transform = '');
      dragging = false;
    });
  }

  /* ── Language sync for mobile-injected elements ── */
  function syncMobileLang() {
    const isEn = lang === 'en';
    document.querySelectorAll('.mobile-menu [data-vi], .bottom-nav [data-vi]').forEach(el => {
      el.textContent = isEn ? el.dataset.en : el.dataset.vi;
    });
    const label = document.getElementById('pdpStickyAddLabel');
    if (label && !document.getElementById('pdpStickyAdd').classList.contains('added')) {
      label.textContent = isEn ? 'Add to cart' : 'Thêm vào giỏ';
    }
  }

  document.getElementById('langBtn')?.addEventListener('click', () => setTimeout(syncMobileLang, 10));

  /* ── Init ── */
  function init() {
    injectMobileElements();
    initHamburger();
    initBottomNavActive();
    initStickyCta();
    initPdpCloseListeners();
    initSwipeCloseCart();
    patchOpenProduct();
    patchAddToCart();
    patchRenderCart();
    patchCartDrawer();
    syncBottomBadge();
    syncMobileLang();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

})();
