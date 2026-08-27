const STORAGE_KEY = "garcias_menu_items_v1";
const ORDERS_KEY = "garcias_orders_v1";

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
  orders: JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]")
};

const adminList = document.getElementById("adminList");
const adminOrdersList = document.getElementById("adminOrdersList");
const toast = document.getElementById("toast");
const imageInput = document.getElementById("imageInput");
const imageDataInput = document.getElementById("imageDataInput");
const imagePreview = document.getElementById("imagePreview");

const fmt = (n) => `PHP ${n.toFixed(2)}`;
const getCustomerName = (order) => order.customerName || order.table || "Walk-in";
const WIFI_NAME = "Garcias Free WiFi";
const WIFI_DURATION_MINUTES = 30;

function generateWifiPassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function ensureWifiVoucher(order) {
  if (order.wifiVoucher) return order.wifiVoucher;
  const issuedAt = new Date();
  const expiresAt = new Date(issuedAt.getTime() + WIFI_DURATION_MINUTES * 60 * 1000);
  order.wifiVoucher = {
    ssid: WIFI_NAME,
    password: generateWifiPassword(),
    issuedAt: issuedAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    durationMinutes: WIFI_DURATION_MINUTES,
    deviceLimit: 1
  };
  persistOrders();
  return order.wifiVoucher;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1450);
}

function setImagePreview(src) {
  imagePreview.src = src || "";
  imagePreview.classList.toggle("active", Boolean(src));
}

function readUploadedImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function persistMenu() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.menu));
}

function persistOrders() {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(state.orders));
}

function migrateLegacyOrderStatuses() {
  let changed = false;
  state.orders.forEach((order) => {
    if (order.status === "Accepted") {
      order.status = "Preparing";
      changed = true;
    }
  });
  if (changed) persistOrders();
}

function renderAdmin() {
  adminList.innerHTML = "";
  state.menu.forEach((item) => {
    const row = document.createElement("div");
    row.className = "admin-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <small>${item.category} | ${fmt(item.price)}</small>
      </div>
      <div class="admin-actions">
        <button class="secondary-btn" data-edit="${item.id}">Edit</button>
        <button class="ghost-btn" data-del="${item.id}">Delete</button>
      </div>
    `;
    adminList.appendChild(row);
  });

  adminList.querySelectorAll("[data-edit]").forEach((btn) =>
    btn.addEventListener("click", () => startEdit(btn.dataset.edit))
  );
  adminList.querySelectorAll("[data-del]").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.menu = state.menu.filter((i) => i.id !== btn.dataset.del);
      persistMenu();
      renderAdmin();
      showToast("Menu item deleted");
    })
  );
}

function renderAdminOrders() {
  adminOrdersList.innerHTML = "";

  const activeOrders = state.orders.filter((order) => order.status !== "Delivered");

  if (!activeOrders.length) {
    adminOrdersList.innerHTML = "<p>No incoming orders.</p>";
  }

  activeOrders
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((order) => adminOrdersList.appendChild(createOrderCard(order)));

  adminOrdersList.querySelectorAll("[data-accept]").forEach((btn) =>
    btn.addEventListener("click", () => acceptOrder(btn.dataset.accept))
  );
  adminOrdersList.querySelectorAll("[data-deliver]").forEach((btn) =>
    btn.addEventListener("click", () => deliverOrder(btn.dataset.deliver))
  );
  adminOrdersList.querySelectorAll("[data-print]").forEach((btn) =>
    btn.addEventListener("click", () => printReceipt(btn.dataset.print))
  );
  document.querySelectorAll("[data-cash]").forEach((input) =>
    input.addEventListener("input", () => updateChange(input))
  );
}

function createOrderCard(order) {
  const div = document.createElement("div");
  div.className = `admin-order-item ${order.status === "Delivered" ? "delivered" : ""}`;
  const cashValue = Number.isFinite(order.cashReceived) ? order.cashReceived : "";
  const customerName = getCustomerName(order);
  div.innerHTML = `
    <div class="admin-order-head">
      <div>
        <p><strong>Queue #${order.queueNumber}</strong> | ${order.orderNumber}</p>
        <p>Name: ${customerName} | <span class="status-pill">${order.status}</span></p>
      </div>
      <strong>${fmt(order.total)}</strong>
    </div>
    <p>Items: ${order.items.reduce((sum, i) => sum + i.qty, 0)}</p>
    <div class="change-calculator">
      <label for="cash-${order.id}">Cash Received</label>
      <input id="cash-${order.id}" type="number" min="0" step="0.01" placeholder="0.00" value="${cashValue}" data-cash="${order.id}" data-total="${order.total}" />
      <p id="change-${order.id}" class="change-result">${getChangeText(order, cashValue)}</p>
    </div>
    <div class="admin-actions">
      <button class="ghost-btn" data-print="${order.id}">Print Receipt</button>
      <button class="secondary-btn" data-accept="${order.id}" ${order.status !== "Pending" || !order.receiptPrinted ? "disabled" : ""}>Start Preparing</button>
      <button class="primary-btn" data-deliver="${order.id}" ${order.status === "Delivered" || !order.receiptPrinted ? "disabled" : ""}>Mark Delivered</button>
    </div>
  `;
  return div;
}

function getChangeText(order, cashValue) {
  const cash = Number(cashValue);
  if (!cashValue && cashValue !== 0) return "Change: PHP 0.00";
  if (cash < order.total) return `Need: ${fmt(order.total - cash)}`;
  return `Change: ${fmt(cash - order.total)}`;
}

function updateChange(input) {
  const order = state.orders.find((o) => o.id === input.dataset.cash);
  if (!order) return;
  const cash = Number(input.value);
  order.cashReceived = Number.isFinite(cash) ? cash : 0;
  persistOrders();
  document.getElementById(`change-${order.id}`).textContent = getChangeText(order, input.value);
}

function acceptOrder(id) {
  const target = state.orders.find((o) => o.id === id);
  if (!target) return;
  if (target.status !== "Pending") return;
  if (!target.receiptPrinted) {
    showToast("Print receipt before preparing");
    return;
  }
  target.status = "Preparing";
  persistOrders();
  renderAdminOrders();
  showToast(`Queue #${target.queueNumber} is preparing`);
}

function deliverOrder(id) {
  const target = state.orders.find((o) => o.id === id);
  if (!target || target.status === "Delivered") return;
  if (!target.receiptPrinted) {
    showToast("Print receipt before marking delivered");
    return;
  }
  target.status = "Delivered";
  target.deliveredAt = new Date().toISOString();
  persistOrders();
  renderAdminOrders();
  showToast(`Queue #${target.queueNumber} delivered`);
}

function printReceipt(id) {
  const order = state.orders.find((o) => o.id === id);
  if (!order) return;
  const customerName = getCustomerName(order);
  const wifiVoucher = ensureWifiVoucher(order);
  const wifiExpiry = new Date(wifiVoucher.expiresAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  const lineItems = order.items
    .map((i) => `<tr><td>${i.qty}x</td><td>${i.name}</td><td style="text-align:right;">${fmt(i.price * i.qty)}</td></tr>`)
    .join("");
  const win = window.open("", "_blank", "width=420,height=700");
  if (!win) {
    showToast("Allow popups to print receipt");
    return;
  }
  order.receiptPrinted = true;
  persistOrders();
  win.document.write(`
    <html>
      <head>
        <title>Receipt ${order.orderNumber}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 16px; color: #221515; }
          h2, p { margin: 4px 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          td { padding: 6px 0; border-bottom: 1px dashed #ccc; font-size: 14px; }
          .meta { margin-top: 10px; font-size: 13px; color: #5f4b4b; }
          .total { margin-top: 12px; font-weight: 700; font-size: 16px; text-align: right; }
          .wifi { margin-top: 16px; padding: 10px; border: 1px dashed #999; text-align: center; }
          .wifi h3 { margin: 0 0 6px; font-size: 15px; }
          .wifi strong { display: block; font-size: 20px; letter-spacing: 1px; margin: 5px 0; }
          .wifi small { display: block; color: #5f4b4b; line-height: 1.35; }
        </style>
      </head>
      <body>
        <h2>Garcias' Coffee Shop</h2>
        <p>Order: ${order.orderNumber}</p>
        <p>Queue: #${order.queueNumber}</p>
        <p>Name: ${customerName}</p>
        <p>Status: ${order.status}</p>
        <table>${lineItems}</table>
        <p class="total">Total: ${fmt(order.total)}</p>
        ${Number.isFinite(order.cashReceived) ? `<p class="total">Cash: ${fmt(order.cashReceived)}</p>` : ""}
        ${Number.isFinite(order.cashReceived) ? `<p class="total">Change: ${fmt(Math.max(order.cashReceived - order.total, 0))}</p>` : ""}
        <p class="meta">ETA: ${order.waitTime} mins</p>
        <p class="meta">${new Date(order.createdAt).toLocaleString()}</p>
        <div class="wifi">
          <h3>Free WiFi Voucher</h3>
          <p>Network: ${wifiVoucher.ssid}</p>
          <small>Password</small>
          <strong>${wifiVoucher.password}</strong>
          <small>Valid for ${wifiVoucher.durationMinutes} minutes until ${wifiExpiry}. One device only.</small>
        </div>
      </body>
    </html>
  `);
  win.document.close();
  win.focus();
  win.print();
  renderAdminOrders();
}

function startEdit(id) {
  const item = state.menu.find((m) => m.id === id);
  if (!item) return;
  document.getElementById("editIdInput").value = item.id;
  document.getElementById("nameInput").value = item.name;
  document.getElementById("priceInput").value = item.price;
  document.getElementById("categoryInput").value = item.category;
  imageDataInput.value = item.image;
  imageInput.value = "";
  setImagePreview(item.image);
  document.getElementById("descInput").value = item.description;
  document.getElementById("bestSellerInput").checked = item.bestSeller;
  document.getElementById("limitedInput").checked = item.limited;
}

function resetAdminForm() {
  document.getElementById("menuForm").reset();
  document.getElementById("editIdInput").value = "";
  imageDataInput.value = "";
  setImagePreview("");
}

document.getElementById("resetFormBtn").addEventListener("click", resetAdminForm);
imageInput.addEventListener("change", async () => {
  const file = imageInput.files[0];
  if (!file) {
    setImagePreview(imageDataInput.value);
    return;
  }
  if (!file.type.startsWith("image/")) {
    imageInput.value = "";
    showToast("Please upload an image file");
    return;
  }
  try {
    const imageData = await readUploadedImage(file);
    imageDataInput.value = imageData;
    setImagePreview(imageData);
  } catch {
    imageInput.value = "";
    showToast("Image upload failed");
  }
});

document.getElementById("menuForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("editIdInput").value || crypto.randomUUID();
  let image = imageDataInput.value;
  const file = imageInput.files[0];
  if (file) {
    try {
      image = await readUploadedImage(file);
    } catch {
      showToast("Image upload failed");
      return;
    }
  }

  if (!image) {
    showToast("Please upload an item image");
    imageInput.focus();
    return;
  }

  const payload = {
    id,
    name: document.getElementById("nameInput").value.trim(),
    price: Number(document.getElementById("priceInput").value),
    category: document.getElementById("categoryInput").value.trim().toUpperCase(),
    image,
    description: document.getElementById("descInput").value.trim(),
    bestSeller: document.getElementById("bestSellerInput").checked,
    limited: document.getElementById("limitedInput").checked
  };

  const idx = state.menu.findIndex((m) => m.id === id);
  if (idx >= 0) state.menu[idx] = payload;
  else state.menu.push(payload);

  persistMenu();
  renderAdmin();
  resetAdminForm();
  showToast("Menu saved");
});

window.addEventListener("storage", (event) => {
  if (event.key === ORDERS_KEY) {
    state.orders = JSON.parse(event.newValue || "[]");
    renderAdminOrders();
  }
  if (event.key === STORAGE_KEY) {
    state.menu = JSON.parse(event.newValue || "[]");
    renderAdmin();
  }
});

persistMenu();
migrateLegacyOrderStatuses();
renderAdmin();
renderAdminOrders();
