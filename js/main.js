/* ========================================================
   AL-JABRISAFI ORGANIC BEAUTY — main.js
   Cart · Slideshow · Product Modals · Web3Forms Checkout
   ======================================================== */

// ── Product Data ──────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Herbal Face Oil",
    subtitle: "Nourish · Repair · Glow",
    category: "skincare",
    catLabel: "Skincare",
    price: 2500,
    image: "images/1000139489.jpg",
    badge: "Best Seller",
    badgeClass: "",
    description: "A luxurious blend of African botanicals and cold-pressed oils that deeply nourish, repair, and illuminate your skin. Formulated with Hibiscus seed oil and Neem extract, this oil absorbs fast and leaves a radiant, dewy finish with zero greasiness.",
    ingredients: "Hibiscus Seed Oil, Rosehip Oil, Neem Extract, Jojoba Oil, Vitamin E, Baobab Oil, Neroli Essential Oil",
    benefits: ["Deep Nourishment", "Anti-Aging", "Brightening", "Pore Minimising"],
    size: "30ml / 1 fl oz",
    featured: true
  },
  {
    id: 2,
    name: "Radiance Cream",
    subtitle: "With Shea & Hibiscus",
    category: "skincare",
    catLabel: "Skincare",
    price: 3200,
    image: "images/1000139490.jpg",
    badge: null,
    badgeClass: "",
    description: "An ultra-rich whipped cream that melds raw shea butter with Hibiscus flower extract to deliver intense hydration and visible brightening in weeks. The creamy texture melts effortlessly into skin, restoring the natural glow that African botanicals have provided for generations.",
    ingredients: "Raw Shea Butter, Hibiscus Flower Extract, Aloe Vera Gel, Jojoba Beads, Vitamin C, Rose Water, Argan Oil",
    benefits: ["Intense Hydration", "Brightening", "Softening", "Even Skin Tone"],
    size: "50ml / 1.7 fl oz",
    featured: true
  },
  {
    id: 3,
    name: "Botanical Cleanser",
    subtitle: "Gentle & Purifying",
    category: "skincare",
    catLabel: "Skincare",
    price: 1800,
    image: "images/1000139491.jpg",
    badge: "New",
    badgeClass: "new",
    description: "A soft gel cleanser powered by botanical extracts that lifts impurities without stripping the skin's natural barrier. Neem and green clay work together for a deep yet gentle cleanse that leaves your complexion balanced and refreshed.",
    ingredients: "Green Clay, Neem Leaf Extract, Aloe Vera, Chamomile, Witch Hazel, Cucumber Extract, Tea Tree Oil",
    benefits: ["Deep Cleansing", "Pore Purifying", "Balancing", "Gentle pH"],
    size: "100ml / 3.4 fl oz",
    featured: false
  },
  {
    id: 4,
    name: "Hibiscus Glow Serum",
    subtitle: "Vitamin-Rich Skin Elixir",
    category: "skincare",
    catLabel: "Skincare",
    price: 2800,
    image: "images/1000139492.jpg",
    badge: "New",
    badgeClass: "new",
    description: "Concentrated with hibiscus AHA and Vitamin C derivatives, this serum targets dullness, hyperpigmentation and fine lines. A few drops each morning are all it takes to unveil luminous, glass-skin radiance.",
    ingredients: "Hibiscus AHA, Vitamin C Derivative, Niacinamide, Hyaluronic Acid, Rosehip Extract, Peptide Complex",
    benefits: ["Brightening", "Anti-Aging", "Glow Boost", "Pigmentation Corrector"],
    size: "30ml / 1 fl oz",
    featured: true
  },
  {
    id: 5,
    name: "Baobab Hair Oil",
    subtitle: "Strengthen & Shine",
    category: "haircare",
    catLabel: "Haircare",
    price: 2200,
    image: "images/1000139493.jpg",
    badge: "Best Seller",
    badgeClass: "",
    description: "Extracted from the ancient African Baobab tree, this lightweight oil penetrates the hair shaft to strengthen from within while adding a brilliant natural shine. Ideal for all hair types — especially natural, kinky, and colour-treated hair.",
    ingredients: "Baobab Seed Oil, Argan Oil, Marula Oil, Vitamin E, Castor Oil, Rosemary Essential Oil",
    benefits: ["Strengthening", "Shine Boosting", "Frizz Control", "Heat Protection"],
    size: "60ml / 2 fl oz",
    featured: true
  },
  {
    id: 6,
    name: "Neem Herbal Shampoo",
    subtitle: "Scalp Purify & Restore",
    category: "haircare",
    catLabel: "Haircare",
    price: 1500,
    image: "images/1000139494.jpg",
    badge: null,
    badgeClass: "",
    description: "This sulphate-free shampoo harnesses the antibacterial power of Neem to purify the scalp, combat dandruff and promote healthy hair growth. Rich botanicals cleanse thoroughly while conditioning from root to tip.",
    ingredients: "Neem Leaf Extract, Aloe Vera, Peppermint Oil, Biotin, Castor Oil, Green Tea Extract, Quinoa Protein",
    benefits: ["Scalp Purifying", "Anti-Dandruff", "Growth Stimulating", "Sulphate Free"],
    size: "200ml / 6.7 fl oz",
    featured: false
  },
  {
    id: 7,
    name: "Aloe & Hibiscus Conditioner",
    subtitle: "Moisture & Detangle",
    category: "haircare",
    catLabel: "Haircare",
    price: 1600,
    image: "images/1000139496.jpg",
    badge: null,
    badgeClass: "",
    description: "An intensely moisturising conditioner that combines soothing Aloe Vera with the slip of Hibiscus mucilage to detangle, soften and strengthen every strand. Leaves hair silky, manageable and beautifully fragrant.",
    ingredients: "Aloe Vera Gel, Hibiscus Mucilage, Shea Butter, Argan Oil, Rice Protein, Lavender Oil, Cetyl Alcohol",
    benefits: ["Deep Moisture", "Easy Detangling", "Softness", "Breakage Reduction"],
    size: "200ml / 6.7 fl oz",
    featured: false
  },
  {
    id: 8,
    name: "Wellness Essential Blend",
    subtitle: "Balance & Restore",
    category: "wellness",
    catLabel: "Wellness",
    price: 3500,
    image: "images/1000139497.jpg",
    badge: "Best Seller",
    badgeClass: "",
    description: "A signature blend of therapeutic-grade essential oils curated for body and mind harmony. Use in a diffuser for relaxation, mix with a carrier oil for massage, or add drops to your bath for an immersive sensory experience rooted in African aromatherapy.",
    ingredients: "Lavender, Frankincense, Eucalyptus, Rose Geranium, Bergamot, Clary Sage, Ylang Ylang",
    benefits: ["Stress Relief", "Aromatherapy", "Mood Lifting", "Sleep Support"],
    size: "15ml / 0.5 fl oz",
    featured: false
  },
  {
    id: 9,
    name: "Moringa Body Butter",
    subtitle: "Deep Hydration & Glow",
    category: "wellness",
    catLabel: "Wellness",
    price: 2000,
    image: "images/1000139498.jpg",
    badge: null,
    badgeClass: "",
    description: "Whipped to a light, cloud-like texture, this Moringa-enriched body butter delivers prolonged hydration that sinks in fast. Rich in antioxidants and fatty acids, it leaves skin visibly smoother, softer and beautifully luminous.",
    ingredients: "Moringa Seed Oil, Shea Butter, Cocoa Butter, Jojoba Oil, Vitamin E, Jasmine Absolute, Collagen Peptides",
    benefits: ["All-Day Moisture", "Glow Enhancing", "Skin Softening", "Fast Absorbing"],
    size: "150g / 5.3 oz",
    featured: false
  },
  {
    id: 10,
    name: "Premium Gift Set",
    subtitle: "Luxury in a Box",
    category: "giftsets",
    catLabel: "Gift Sets",
    price: 5500,
    image: "images/1000139499.jpg",
    badge: "Luxury",
    badgeClass: "",
    description: "Our curated signature collection beautifully packaged in a premium forest-green gift box. Includes our best-selling Herbal Face Oil, Radiance Cream and Baobab Hair Oil — the perfect celebration of African botanical luxury. Ideal gift for any occasion.",
    ingredients: "Contains: Herbal Face Oil (30ml), Radiance Cream (50ml), Baobab Hair Oil (60ml), Botanicals Fragrance Card",
    benefits: ["Curated Set", "Gift Ready", "Premium Packaging", "Best Sellers"],
    size: "Full Kit — 3 items",
    featured: true
  },
  {
    id: 11,
    name: "Hibiscus Rose Toner",
    subtitle: "Refresh & Tone",
    category: "skincare",
    catLabel: "Skincare",
    price: 1800,
    image: "images/1000139502.jpg",
    badge: null,
    badgeClass: "",
    description: "A refreshing floral toner that prepares the skin for serums and moisturisers while delivering an instant hydration boost. Hibiscus AHA gently exfoliates while Rose Water calms and reduces redness, leaving the face dewy-fresh and balanced.",
    ingredients: "Rose Water, Hibiscus AHA, Witch Hazel (alcohol-free), Glycerin, Aloe Vera, Niacinamide, Calendula Extract",
    benefits: ["Hydrating", "Pore Tightening", "Gentle Exfoliation", "Soothing"],
    size: "100ml / 3.4 fl oz",
    featured: false
  },
  {
    id: 12,
    name: "Neem Purifying Mask",
    subtitle: "Deep Clean & Detox",
    category: "skincare",
    catLabel: "Skincare",
    price: 2200,
    image: "images/1000139503.jpg",
    badge: "New",
    badgeClass: "new",
    description: "A powerhouse kaolin and Neem clay mask that draws out deep-seated impurities and excess sebum while delivering skin-brightening Turmeric and calming Aloe. Apply 1–2 times weekly for visibly cleaner, smoother, more radiant skin.",
    ingredients: "Kaolin Clay, Neem Leaf Powder, Turmeric Extract, Aloe Vera Gel, Bentonite, Rose Hip Powder, Vitamin C",
    benefits: ["Deep Detox", "Oil Control", "Brightening", "Anti-Blemish"],
    size: "60g / 2.1 oz",
    featured: false
  }
];

// ── Hero Slideshow Images ─────────────────────────────
const heroSlides = [
  { img: "images/1000139489.jpg", name: "Herbal Face Oil", sub: "Nourish · Repair · Glow", price: "KES 2,500" },
  { img: "images/1000139490.jpg", name: "Radiance Cream",  sub: "With Shea & Hibiscus",   price: "KES 3,200" },
  { img: "images/1000139492.jpg", name: "Hibiscus Glow Serum", sub: "Vitamin-Rich Elixir", price: "KES 2,800" },
  { img: "images/1000139493.jpg", name: "Baobab Hair Oil", sub: "Strengthen & Shine",      price: "KES 2,200" },
  { img: "images/1000139499.jpg", name: "Premium Gift Set", sub: "Luxury in a Box",        price: "KES 5,500" },
];

// ========================================================
// FAQ Accordion Functionality
// ========================================================

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      
      questionBtn.addEventListener('click', () => {
        // Close other open FAQs (optional - for single open at a time)
        // Uncomment the code below if you want only one FAQ open at a time
        /*
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        */
        
        // Toggle current FAQ
        item.classList.toggle('active');
      });
    });
  }
});
// ── Cart State ────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('ajsCart') || '[]');

function saveCart() {
  localStorage.setItem('ajsCart', JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to your order!`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, c) => {
    const p = products.find(x => x.id === c.id);
    return sum + (p ? p.price * c.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, c) => sum + c.qty, 0);
}

function formatKES(amount) {
  return 'KES ' + amount.toLocaleString('en-KE');
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.classList.toggle('active', count > 0);
  });
}

function renderCartItems() {
  const body = document.getElementById('cart-body');
  if (!body) return;
  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
        <p>Your order is empty.<br>Explore our products and add your favourites.</p>
      </div>`;
    updateCartFooter(0);
    return;
  }
  body.innerHTML = cart.map(c => {
    const p = products.find(x => x.id === c.id);
    if (!p) return '';
    return `
    <div class="cart-item" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" class="cart-item-img" onerror="this.src='images/placeholder.jpg'">
      <div>
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-size">${p.size}</div>
        <div class="cart-qty-ctrl">
          <button onclick="updateCartQty(${p.id},-1)">−</button>
          <span>${c.qty}</span>
          <button onclick="updateCartQty(${p.id},1)">+</button>
        </div>
      </div>
      <div>
        <div class="cart-item-price">${formatKES(p.price * c.qty)}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})">Remove</button>
      </div>
    </div>`;
  }).join('');
  updateCartFooter(getCartTotal());
}

function updateCartFooter(total) {
  const footer = document.getElementById('cart-footer');
  if (!footer) return;
  const hasItems = cart.length > 0;
  footer.innerHTML = `
    <div class="cart-subtotal">
      <span>Order Total</span>
      <span>${formatKES(total)}</span>
    </div>
    <p class="cart-note">📦 Delivery charges applied at order confirmation</p>
    <button class="btn-checkout" onclick="openCheckout()" ${!hasItems ? 'disabled' : ''}>
      <svg viewBox="0 0 24 24"><path d="M20 7H4a1 1 0 000 2h16a1 1 0 000-2zM18 12H6a1 1 0 000 2h12a1 1 0 000-2zM16 17H8a1 1 0 000 2h8a1 1 0 000-2z"/></svg>
      Place My Order
    </button>`;
}

function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Product Modal ─────────────────────────────────────
let currentModalQty = 1;

function openProductModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  currentModalQty = 1;
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.innerHTML = `
    <div class="product-modal">
      <div class="modal-img">
        <img id="modal-main-img" src="${p.image}" alt="${p.name}" onerror="this.src='images/placeholder.jpg'">
        <div class="modal-img-thumbs">
          <button class="modal-thumb active"></button>
        </div>
      </div>
      <div class="modal-content">
        <button class="modal-close-btn" onclick="closeProductModal()">×</button>
        <div class="modal-cat">${p.catLabel}</div>
        <h2 class="modal-name">${p.name}</h2>
        <p class="modal-sub">${p.subtitle}</p>
        <div class="modal-price">${formatKES(p.price)}</div>
        <span class="modal-size">${p.size}</span>
        <div class="modal-divider"></div>
        <div class="modal-label">About this product</div>
        <p class="modal-desc">${p.description}</p>
        <div class="modal-label">Key Benefits</div>
        <div class="modal-benefits">
          ${p.benefits.map(b => `<span class="benefit-tag">✦ ${b}</span>`).join('')}
        </div>
        <div class="modal-divider"></div>
        <div class="modal-label">Key Ingredients</div>
        <p class="modal-ingredients">${p.ingredients}</p>
        <div class="modal-qty-row">
          <div class="qty-ctrl">
            <button onclick="changeModalQty(-1)">−</button>
            <input type="number" id="modal-qty" value="1" min="1" max="10" readonly>
            <button onclick="changeModalQty(1)">+</button>
          </div>
          <button class="btn-modal-add" onclick="addFromModal(${p.id})">
            <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
            Add to Order
          </button>
        </div>
      </div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function changeModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  const input = document.getElementById('modal-qty');
  if (input) input.value = currentModalQty;
}

function addFromModal(productId) {
  addToCart(productId, currentModalQty);
  closeProductModal();
  openCart();
}

// ── Hero Slideshow ────────────────────────────────────
let currentSlide = 0;
let slideshowTimer = null;

function initHeroSlideshow() {
  const container = document.getElementById('hero-slideshow');
  if (!container) return;

  // Build slides
  container.innerHTML = heroSlides.map((s, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}">
      <img src="${s.img}" alt="${s.name}" onerror="this.src='images/placeholder.jpg'">
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-caption">
        <div class="slide-name">${s.name}</div>
        <div class="slide-sub">${s.sub}</div>
        <div class="slide-price">${s.price}</div>
      </div>
    </div>`).join('');

  // Build dots
  const dotsWrap = document.getElementById('slideshow-dots');
  if (dotsWrap) {
    dotsWrap.innerHTML = heroSlides.map((_, i) => `
      <button class="slideshow-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></button>`).join('');
  }

  startSlideshow();
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.slideshow-dot');
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  currentSlide = idx;
  slides[idx]?.classList.add('active');
  dots[idx]?.classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % heroSlides.length);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
}

function startSlideshow() {
  clearInterval(slideshowTimer);
  slideshowTimer = setInterval(nextSlide, 4500);
}

// ── Scroll Reveal ─────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => el.classList.add('visible'), delay * 1000);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });

  // Stagger children in grids
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    parent.querySelectorAll('.reveal, .product-card, .collection-card, .ingredient-card').forEach((child, i) => {
      child.dataset.delay = (i * 0.08).toFixed(2);
      child.classList.add('reveal');
    });
  });
}

// ── Active Nav Link ───────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
}

// ── Mobile Menu ───────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn   = document.querySelector('.mobile-close');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });

  closeBtn?.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Products Page Filter ──────────────────────────────
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  renderAllProducts('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAllProducts(btn.dataset.cat);
    });
  });
}

function renderAllProducts(cat) {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  if (!grid) return;

  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  }

  grid.innerHTML = filtered.map(p => buildProductCard(p)).join('');

  // Re-init reveal animations on new cards
  setTimeout(() => {
    document.querySelectorAll('.product-card').forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'none';
      }, i * 60);
    });
  }, 0);
}

function buildProductCard(p) {
  return `
  <div class="product-card" onclick="openProductModal(${p.id})" title="View ${p.name}">
    <div class="product-img-wrap">
      ${p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ''}
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
      <div class="product-quick-view">Quick View</div>
    </div>
    <div class="product-info">
      <div class="product-cat">${p.catLabel}</div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-name-sub">${p.subtitle}</p>
      <div class="product-price">${formatKES(p.price)} <span>/ ${p.size}</span></div>
      <div class="product-add-row">
        <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">
          <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/></svg>
          Add to Order
        </button>
        <button class="btn-wishlist" title="Save for later" onclick="event.stopPropagation(); showToast('Saved to wishlist!','success')">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
      </div>
    </div>
  </div>`;
}

// ── Render Featured Products (Home) ───────────────────
function renderFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = products.filter(p => p.featured);
  grid.innerHTML = featured.map(p => buildProductCard(p)).join('');
}

// ── Checkout Modal ────────────────────────────────────
function openCheckout() {
  closeCart();
  const overlay = document.getElementById('checkout-overlay');
  if (!overlay) return;

  const orderRows = cart.map(c => {
    const p = products.find(x => x.id === c.id);
    if (!p) return '';
    return `<div class="checkout-item-row">
      <span>${p.name} <strong>× ${c.qty}</strong></span>
      <span>${formatKES(p.price * c.qty)}</span>
    </div>`;
  }).join('');

  const total = getCartTotal();
  const orderRef = 'AJS-' + Date.now().toString(36).toUpperCase();

  overlay.innerHTML = `
  <div class="checkout-modal" id="checkout-modal">
    <div class="checkout-header">
      <h2>Complete Your Order</h2>
      <button onclick="closeCheckout()">×</button>
    </div>
    <div class="checkout-body" id="checkout-body">
      <div class="checkout-order-summary">
        <h4>Your Order Summary</h4>
        ${orderRows}
        <div class="checkout-total-row">
          <span>Total</span>
          <span>${formatKES(total)}</span>
        </div>
      </div>
      <div class="checkout-note">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span>No online payment required — our team will contact you directly to confirm your order and arrange payment &amp; delivery. 100% safe, personal service.</span>
      </div>
      <form id="checkout-form" onsubmit="submitOrder(event)">
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
        <input type="hidden" name="subject" value="🌿 New Order — AL-Jabrisafi Organic Beauty">
        <input type="hidden" name="from_name" value="AL-Jabrisafi Website">
        <input type="hidden" name="order_ref" value="${orderRef}">
        <input type="hidden" name="order_items" id="order-items-field">
        <input type="hidden" name="order_total" value="${formatKES(total)}">
        <div class="form-row">
          <div class="form-group">
            <label>Full Name *</label>
            <input type="text" name="customer_name" placeholder="Your full name" required>
          </div>
          <div class="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="customer_phone" placeholder="07xx xxx xxx" required>
          </div>
        </div>
        <div class="form-row single">
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" name="customer_email" placeholder="your@email.com">
          </div>
        </div>
        <div class="form-row single">
          <div class="form-group">
            <label>Delivery Address *</label>
            <input type="text" name="delivery_address" placeholder="Street / Estate / Building" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>City / Town *</label>
            <select name="city" required>
              <option value="">Select city...</option>
              <option>Nairobi</option>
              <option>Bungoma</option>
              <option>Mombasa</option>
              <option>Kisumu</option>
              <option>Nakuru</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>How to pay?</label>
            <select name="payment_preference">
              <option value="M-Pesa on Delivery">M-Pesa on Delivery</option>
              <option value="M-Pesa in Advance">M-Pesa in Advance</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
        </div>
        <div class="form-row single">
          <div class="form-group">
            <label>Additional Notes</label>
            <textarea name="notes" placeholder="Delivery instructions, gate colour, special requests..."></textarea>
          </div>
        </div>
        <button type="submit" class="btn-submit-order" id="submit-btn">
          Send My Order
        </button>
      </form>
    </div>
  </div>`;

  // Populate hidden order items field
  const itemsText = cart.map(c => {
    const p = products.find(x => x.id === c.id);
    return p ? `${p.name} (x${c.qty}) — ${formatKES(p.price * c.qty)}` : '';
  }).filter(Boolean).join(' | ');
  const field = document.getElementById('order-items-field');
  if (field) field.value = itemsText;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkout-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  openCart();
}

async function submitOrder(event) {
  event.preventDefault();
  const form = event.target;
  const btn  = document.getElementById('submit-btn');
  if (!btn) return;

  btn.classList.add('loading');
  btn.disabled = true;
  btn.textContent = 'Sending your order...';

  const formData = new FormData(form);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (data.success) {
      showOrderSuccess(formData.get('customer_name'), formData.get('order_ref'));
      cart = [];
      saveCart();
      updateCartUI();
    } else {
      throw new Error(data.message || 'Submission failed');
    }
  } catch (err) {
    btn.classList.remove('loading');
    btn.disabled = false;
    btn.textContent = 'Send My Order';
    showToast('Something went wrong. Please try again or WhatsApp us.', 'error');
    console.error('Order error:', err);
  }
}

function showOrderSuccess(name, ref) {
  const body = document.getElementById('checkout-body');
  if (!body) return;
  body.innerHTML = `
    <div class="order-success">
      <div class="success-icon">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3>Order Received!</h3>
      <p>Thank you, <strong>${name || 'valued customer'}</strong>! Your order has been sent to the AL-Jabrisafi team.</p>
      <p>We'll call or WhatsApp you shortly to confirm delivery details and payment.</p>
      <div class="order-ref">Ref: ${ref}</div>
      <p style="font-size:0.78rem;color:var(--text-l)">Delivering across Nairobi &amp; Bungoma • Natural beauty, real care 🌿</p>
      <button class="btn btn-primary" onclick="document.getElementById('checkout-overlay').classList.remove('open'); document.body.style.overflow='';" style="margin-top:12px">Continue Shopping</button>
    </div>`;
}

// ── Toast Notifications ───────────────────────────────
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success'
    ? `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`
    : `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 3500);
}

// ── Newsletter Form ───────────────────────────────────
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (!email) return;
    showToast('You\'re subscribed! Welcome to the AL-Jabrisafi community 🌿', 'success');
    form.reset();
  });
}

// ── Contact Form ──────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    const fd = new FormData(form);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        showToast('Message sent! We\'ll get back to you soon.', 'success');
        form.reset();
      } else { throw new Error(); }
    } catch {
      showToast('Oops! Please try again or WhatsApp us directly.', 'error');
    }
    btn.textContent = 'Send Message';
    btn.disabled = false;
  });
}

// ── Init ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  setActiveNav();
  initMobileMenu();
  initScrollReveal();
  initHeroSlideshow();
  renderFeaturedProducts();
  initProductFilter();
  initNewsletterForm();
  initContactForm();

  // Cart icon opens cart
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', openCart);
  });

  // Close overlays on background click
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  document.getElementById('modal-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'modal-overlay') closeProductModal();
  });

  document.getElementById('checkout-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'checkout-overlay') {
      document.getElementById('checkout-overlay').classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Slideshow prev/next buttons
  document.getElementById('slide-prev')?.addEventListener('click', () => { prevSlide(); clearInterval(slideshowTimer); startSlideshow(); });
  document.getElementById('slide-next')?.addEventListener('click', () => { nextSlide(); clearInterval(slideshowTimer); startSlideshow(); });
});
