const STORAGE_KEY = "garcias_menu_items_v1";
const ORDERS_KEY = "garcias_orders_v1";
const QUEUE_COUNTER_KEY = "garcias_queue_counter_v1";

const defaultMenu = [
  {
    id: crypto.randomUUID(),
    name: "Matcha Latte",
    category: "DRINKS",
    description: "Premium ceremonial matcha blended with velvety steamed milk for a rich, earthy-sweet sip.",
    price: 185,
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80",
    bestSeller: true,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Caramel Macchiato",
    category: "DRINKS",
    description: "Fresh espresso layered over creamy milk and vanilla, topped with silky caramel drizzle.",
    price: 195,
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=1200&q=80",
    bestSeller: true,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Ice Amerikano",
    category: "DRINKS",
    description: "Double-shot espresso poured over crystal ice for a clean, bold, and smooth finish.",
    price: 145,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
    bestSeller: false,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Biscoff Coffee",
    category: "DRINKS",
    description: "Signature coffee with caramelized cookie notes, topped with crushed Biscoff crumbs.",
    price: 205,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    bestSeller: true,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Strawberry Sprite & Yakult",
    category: "DRINKS",
    description: "Sparkling strawberry cooler with Yakult for a bright, fizzy, and probiotic twist.",
    price: 170,
    image: "https://images.unsplash.com/photo-1606168094336-d6c8e0c987f0?auto=format&fit=crop&w=1200&q=80",
    bestSeller: false,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Mango Sprite & Yakult",
    category: "DRINKS",
    description: "Tropical mango and bubbly Sprite fused with Yakult for a playful summer refreshment.",
    price: 170,
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=1200&q=80",
    bestSeller: false,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Mango Tapioca Frappe",
    category: "LIMITED EDITION",
    description: "Creamy mango frappe with soft tapioca pearls and a lightly whipped cloud top.",
    price: 215,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&w=1200&q=80",
    bestSeller: true,
    limited: true
  },
  {
    id: crypto.randomUUID(),
    name: "Coco Matcha",
    category: "LIMITED EDITION",
    description: "Creamy coconut milk and matcha harmony, balanced with a gentle natural sweetness.",
    price: 210,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1200&q=80",
    bestSeller: false,
    limited: true
  },
  {
    id: crypto.randomUUID(),
    name: "Matcha Strawberry",
    category: "LIMITED EDITION",
    description: "Layered matcha and strawberry milk drink with a fruity aroma and soft tea finish.",
    price: 215,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=1200&q=80",
    bestSeller: true,
    limited: true
  },
  {
    id: crypto.randomUUID(),
    name: "Matcha Mango",
    category: "LIMITED EDITION",
    description: "A creamy mango blend kissed with matcha for a vibrant sweet-and-earthy contrast.",
    price: 215,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
    bestSeller: false,
    limited: true
  },
  {
    id: crypto.randomUUID(),
    name: "Tacos",
    category: "SNACKS",
    description: "Crispy taco shells loaded with savory filling, crisp lettuce, and creamy signature sauce.",
    price: 165,
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80",
    bestSeller: true,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Fries",
    category: "SNACKS",
    description: "Golden hand-cut fries, crisp outside and fluffy inside, lightly seasoned to perfection.",
    price: 120,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
    bestSeller: false,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Shanghai and Rice",
    category: "RICE BOWL",
    description: "Savory shanghai rolls served over steaming rice with house glaze and pickled side.",
    price: 185,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    bestSeller: false,
    limited: false
  },
  {
    id: crypto.randomUUID(),
    name: "Chicharon and Rice",
    category: "RICE BOWL",
    description: "Crunchy chicharon over warm garlic rice, finished with sweet-spicy soy drizzle.",
    price: 190,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    bestSeller: true,
    limited: false
  }
];

const state = {
  menu: JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || defaultMenu,
  orders: JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]"),
  cart: {},
  selectedCategory: "ALL",
  query: "",
  draftOrder: null
};

const sections = {
  welcome: document.getElementById("welcomeSection"),
  scan: document.getElementById("scanSection"),
  menu: document.getElementById("menuSection"),
  order: document.getElementById("orderSection"),
  confirm: document.getElementById("confirmSection")
};

const menuGrid = document.getElementById("menuGrid");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartItemCount = document.getElementById("cartItemCount");
const viewOrderCount = document.getElementById("viewOrderCount");
const tableNumberInput = document.getElementById("tableNumberInput");
const limitedHighlight = document.getElementById("limitedHighlight");
const toast = document.getElementById("toast");
const modal = document.getElementById("orderSummaryModal");
const queueModal = document.getElementById("queueModal");

const fmt = (n) => `PHP ${n.toFixed(2)}`;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1450);
}

function persistMenu() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.menu));
}

function persistOrders() {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(state.orders));
}

function refreshOrders() {
  state.orders = JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
}

function nextQueueNumber() {
  const current = Number(localStorage.getItem(QUEUE_COUNTER_KEY) || "0") + 1;
  localStorage.setItem(QUEUE_COUNTER_KEY, String(current));
  return String(current).padStart(3, "0");
}

function showSection(key) {
  Object.values(sections).forEach((s) => s?.classList.remove("active"));
  sections[key].classList.add("active");
}

function getCategories() {
  return ["ALL", ...new Set(state.menu.map((m) => m.category))];
}

function getFilteredMenu() {
  return state.menu.filter((item) => {
    const matchesCategory = state.selectedCategory === "ALL" || item.category === state.selectedCategory;
    const q = state.query.toLowerCase();
    const matchesQuery =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
}

function updateCategoryTabs() {
  categoryTabs.innerHTML = "";
  getCategories().forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `tab ${cat === state.selectedCategory ? "active" : ""}`;
    btn.textContent = cat;
    btn.onclick = () => {
      state.selectedCategory = cat;
      renderMenu();
      updateCategoryTabs();
    };
    categoryTabs.appendChild(btn);
  });
}

function getCartQuantity(itemId) {
  return state.cart[itemId]?.qty || 0;
}

function addToCart(itemId) {
  if (!state.cart[itemId]) {
    const item = state.menu.find((m) => m.id === itemId);
    state.cart[itemId] = { item, qty: 0 };
  }
  state.cart[itemId].qty += 1;
  renderCart();
  renderMenu();
  showToast("Added to cart");
}

function changeQty(itemId, delta) {
  if (!state.cart[itemId]) return;
  state.cart[itemId].qty += delta;
  if (state.cart[itemId].qty <= 0) delete state.cart[itemId];
  renderCart();
  renderMenu();
}

function cartEntries() {
  return Object.values(state.cart);
}

function cartSum() {
  return cartEntries().reduce((s, c) => s + c.item.price * c.qty, 0);
}

function totalQty() {
  return cartEntries().reduce((s, c) => s + c.qty, 0);
}

function renderMenu() {
  menuGrid.innerHTML = "";
  const items = getFilteredMenu();
  if (!items.length) {
    menuGrid.innerHTML = "<p>No menu items found.</p>";
    return;
  }

  items.forEach((item) => {
    const q = getCartQuantity(item.id);
    const card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML = `
      <img class="menu-image" src="${item.image}" alt="${item.name}" loading="lazy"/>
      <div class="menu-content">
        <div class="menu-top">
          <div>
            <h3>${item.name}</h3>
            <div>
              ${item.bestSeller ? '<span class="badge">Best Seller</span>' : ""}
              ${item.limited ? '<span class="badge">Limited</span>' : ""}
            </div>
          </div>
          <span class="price">${fmt(item.price)}</span>
        </div>
        <p>${item.description}</p>
        <div class="menu-actions">
          <div class="qty">
            <button data-delta="-1" data-id="${item.id}">-</button>
            <span>${q}</span>
            <button data-delta="1" data-id="${item.id}">+</button>
          </div>
          <button class="secondary-btn add-btn" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });

  menuGrid.querySelectorAll(".add-btn").forEach((btn) =>
    btn.addEventListener("click", () => addToCart(btn.dataset.id))
  );
  menuGrid.querySelectorAll(".qty button").forEach((btn) =>
    btn.addEventListener("click", () => {
      const delta = Number(btn.dataset.delta);
      const id = btn.dataset.id;
      if (delta === 1) addToCart(id);
      else changeQty(id, delta);
    })
  );
}

function renderLimitedHighlight() {
  const limited = state.menu.filter((i) => i.limited).slice(0, 4);
  if (!limited.length) {
    limitedHighlight.innerHTML = "";
    return;
  }
  limitedHighlight.innerHTML = `
    <strong>Limited Edition Highlights:</strong>
    ${limited.map((l) => `<span class="badge">${l.name}</span>`).join(" ")}
  `;
}

function renderCart() {
  const entries = cartEntries();
  cartItems.innerHTML = "";

  if (!entries.length) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    entries.forEach(({ item, qty }) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <small>${fmt(item.price)} x ${qty}</small>
        </div>
        <div class="qty">
          <button data-id="${item.id}" data-delta="-1">-</button>
          <span>${qty}</span>
          <button data-id="${item.id}" data-delta="1">+</button>
        </div>
      `;
      cartItems.appendChild(div);
    });
  }

  cartItems.querySelectorAll("button").forEach((btn) =>
    btn.addEventListener("click", () => {
      const delta = Number(btn.dataset.delta);
      const id = btn.dataset.id;
      if (delta === 1) addToCart(id);
      else changeQty(id, delta);
    })
  );

  cartTotal.textContent = fmt(cartSum());
  cartItemCount.textContent = `${totalQty()} Items`;
  viewOrderCount.textContent = `${totalQty()} Items`;
}

function updateAfterMenuChange() {
  updateCategoryTabs();
  renderMenu();
  renderLimitedHighlight();
}

function openSummary() {
  if (!cartEntries().length) {
    showToast("Add items before checkout");
    return;
  }
  if (!tableNumberInput.value.trim()) {
    showToast("Please input customer name");
    tableNumberInput.focus();
    return;
  }
  const orderNumber = `GCS-${Math.floor(Math.random() * 9000 + 1000)}`;
  const waitTime = Math.floor(Math.random() * 12 + 8);
  state.draftOrder = { orderNumber, waitTime, customerName: tableNumberInput.value.trim() };

  const summaryItems = document.getElementById("summaryItems");
  summaryItems.innerHTML = cartEntries()
    .map(({ item, qty }) => `<p>${qty}x ${item.name} - ${fmt(item.price * qty)}</p>`)
    .join("");
  document.getElementById("summaryMeta").textContent = `Order #${orderNumber} | Name: ${state.draftOrder.customerName} | ETA ${waitTime} mins`;
  document.getElementById("summaryTotal").textContent = `Total: ${fmt(cartSum())}`;
  modal.classList.add("active");
}

function confirmOrder() {
  if (!state.draftOrder) return;
  modal.classList.remove("active");
  const queueNumber = nextQueueNumber();
  const text = `Thank you, ${state.draftOrder.customerName}! Your order number is ${state.draftOrder.orderNumber}. Queue number #${queueNumber}. Estimated waiting time is ${state.draftOrder.waitTime} minutes.`;
  document.getElementById("orderConfirmationText").textContent = text;

  refreshOrders();
  state.orders.push({
    id: crypto.randomUUID(),
    orderNumber: state.draftOrder.orderNumber,
    queueNumber,
    waitTime: state.draftOrder.waitTime,
    customerName: state.draftOrder.customerName,
    status: "Pending",
    total: cartSum(),
    createdAt: new Date().toISOString(),
    items: cartEntries().map(({ item, qty }) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      qty
    }))
  });
  persistOrders();

  document.getElementById("queueNumberText").textContent = `#${queueNumber}`;
  queueModal.classList.add("active");

  state.cart = {};
  state.draftOrder = null;
  tableNumberInput.value = "";
  renderCart();
  renderMenu();
  showSection("confirm");
}

document.getElementById("startOrderingBtn").addEventListener("click", () => showSection("menu"));
document.getElementById("showQrBtn").addEventListener("click", () => showSection("scan"));
document.getElementById("goToMenuFromScanBtn").addEventListener("click", () => showSection("menu"));
document.getElementById("newOrderBtn").addEventListener("click", () => showSection("menu"));
document.getElementById("viewOrderBtn").addEventListener("click", () => showSection("order"));
document.getElementById("backToMenuBtn").addEventListener("click", () => showSection("menu"));
document.getElementById("checkoutBtn").addEventListener("click", openSummary);
document.getElementById("closeModalBtn").addEventListener("click", () => modal.classList.remove("active"));
document.getElementById("confirmOrderBtn").addEventListener("click", confirmOrder);
document.getElementById("closeQueueModalBtn").addEventListener("click", () => queueModal.classList.remove("active"));
document.getElementById("queueOkayBtn").addEventListener("click", () => queueModal.classList.remove("active"));

searchInput.addEventListener("input", (e) => {
  state.query = e.target.value.trim();
  renderMenu();
});

window.addEventListener("storage", (event) => {
  if (event.key !== STORAGE_KEY) return;
  state.menu = JSON.parse(event.newValue || "[]");
  Object.keys(state.cart).forEach((id) => {
    const freshItem = state.menu.find((item) => item.id === id);
    if (freshItem) state.cart[id].item = freshItem;
    else delete state.cart[id];
  });
  updateAfterMenuChange();
  renderCart();
});

updateAfterMenuChange();
renderCart();
showSection("welcome");
