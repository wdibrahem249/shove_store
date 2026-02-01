// بيانات المنتجات المعدلة
const products = [
    // جوردن 1
    {
        id: 1,
        name: "جوردن 1 ريترو هاي أو جي - أبيض وأسود",
        brand: "jordan1",
        price: 950,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "جوردن 1 ريترو هاي أو جي، تصميم كلاسيكي وأصلي"
    },
    {
        id: 2,
        name: "جوردن 1 ميد نايت نيفي",
        brand: "jordan1",
        price: 1050,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "جوردن 1 ميد نايت نيفي، لون أزرق داكن أنيق"
    },
    {
        id: 3,
        name: "جوردن 1 شادو غراي",
        brand: "jordan1",
        price: 1100,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "جوردن 1 شادو غراي، تصميم عصري وأنيق"
    },
    
    // جوردن 4
    {
        id: 4,
        name: "جوردن 4 ريترو فير ريذرفيل",
        brand: "jordan4",
        price: 1200,
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "جوردن 4 ريترو فير ريذرفيل، تصميم مميز وفريد"
    },
    {
        id: 5,
        name: "جوردن 4 ميليتاري بلاك",
        brand: "jordan4",
        price: 1150,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "جوردن 4 ميليتاري بلاك، تصميم رياضي وعصري"
    },
    {
        id: 6,
        name: "جوردن 4 وايت سمنت",
        brand: "jordan4",
        price: 1250,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        description: "جوردن 4 وايت سمنت، تصميم كلاسيكي وأنيق"
    },
    
    // أديداس
    {
        id: 7,
        name: "أديداس ستان سميث - أبيض",
        brand: "adidas",
        price: 550,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "ستان سميث من أديداس، تصميم بسيط وأنيق"
    },
    {
        id: 8,
        name: "أديداس سوبر ستار - كلاسيك",
        brand: "adidas",
        price: 600,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "سوبر ستار كلاسيك من أديداس، أيقونة عالمية"
    },
    {
        id: 9,
        name: "أديداس أولترا بوست 4D",
        brand: "adidas",
        price: 850,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "أديداس أولترا بوست 4D، تكنولوجيا متطورة وراحة فائقة"
    },
    
    // بالينسياجا
    {
        id: 10,
        name: "بالينسياجا تريبل أس - أسود",
        brand: "balenciaga",
        price: 1800,
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
        description: "بالينسياجا تريبل أس، تصميم عصري ومميز"
    },
    {
        id: 11,
        name: "بالينسياجا سبيد تراينر",
        brand: "balenciaga",
        price: 2000,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        description: "بالينسياجا سبيد تراينر، تصميم رياضي فاخر"
    },
    {
        id: 12,
        name: "بالينسياجا رنر - أبيض",
        brand: "balenciaga",
        price: 1750,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        description: "بالينسياجا رنر، تصميم رياضي متميز وفاخر"
    }
];

// سلة التسوق
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// عناصر DOM
const productsGrid = document.getElementById('products-grid');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.querySelector('.cart-count');
const totalPrice = document.querySelector('.total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const continueShopping = document.getElementById('continue-shopping');
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.getElementById('close-modal');
const orderForm = document.getElementById('order-form');
const suggestedProducts = document.getElementById('suggested-products');
const suggestedGrid = document.querySelector('.suggested-grid');
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('nav-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.nav-link');
const whatsappFloat = document.getElementById('whatsapp-float');

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCart();
    
    // إضافة المنتجات المقترحة
    displaySuggestedProducts();
    
    // إضافة أحداث
    addEventListeners();
});

// عرض المنتجات
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px; color:var(--text-light)">لا توجد منتجات في هذا القسم حالياً</p>';
        return;
    }
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-brand">${getBrandName(product.brand)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price.toLocaleString()} ر.س</div>
                <button class="add-to-cart" data-id="${product.id}">أضف إلى السلة</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // إضافة أحداث لأزرار إضافة إلى السلة
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
            e.target.classList.add('added');
            setTimeout(() => {
                e.target.classList.remove('added');
            }, 500);
        });
    });
}

// الحصول على اسم الماركة بالعربية
function getBrandName(brand) {
    switch(brand) {
        case 'jordan1': return 'جوردن 1';
        case 'jordan4': return 'جوردن 4';
        case 'adidas': return 'أديداس';
        case 'balenciaga': return 'بالينسياجا';
        default: return brand;
    }
}

// إضافة منتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث عرض السلة
    updateCart();
    
    // عرض المنتجات المقترحة
    showSuggestedProducts();
}

// تحديث سلة التسوق
function updateCart() {
    // تحديث عدد العناصر
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // تحديث السعر الإجمالي
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total.toFixed(2);
    
    // تحديث عرض العناصر في السلة
    renderCartItems();
}

// عرض عناصر السلة
function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">سلة التسوق فارغة</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">${item.price.toLocaleString()} ر.س × ${item.quantity}</div>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // إضافة أحداث لأزرار الحذف
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// إزالة منتج من السلة
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// عرض المنتجات المقترحة
function displaySuggestedProducts() {
    // نعرض 4 منتجات عشوائية من غير المنتجات الموجودة في السلة
    const cartIds = cart.map(item => item.id);
    const availableProducts = products.filter(product => !cartIds.includes(product.id));
    
    if (availableProducts.length === 0) return;
    
    const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());
    const suggested = shuffled.slice(0, 4);
    
    suggestedGrid.innerHTML = '';
    
    suggested.forEach(product => {
        const suggestedProduct = document.createElement('div');
        suggestedProduct.className = 'suggested-product';
        suggestedProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="suggested-product-info">
                <h4 class="suggested-product-title">${product.name}</h4>
                <div class="suggested-product-price">${product.price.toLocaleString()} ر.س</div>
                <button class="btn add-suggested-to-cart" data-id="${product.id}" style="margin-top: 10px; padding: 8px 15px; font-size: 14px;">أضف إلى السلة</button>
            </div>
        `;
        suggestedGrid.appendChild(suggestedProduct);
    });
    
    // إضافة أحداث لأزرار المنتجات المقترحة
    document.querySelectorAll('.add-suggested-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
            e.target.textContent = 'تمت الإضافة!';
            e.target.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                e.target.textContent = 'أضف إلى السلة';
                e.target.style.backgroundColor = '';
            }, 1500);
        });
    });
}

// إظهار المنتجات المقترحة
function showSuggestedProducts() {
    suggestedProducts.classList.add('active');
    displaySuggestedProducts();
}

// تصفية المنتجات
function filterProducts(filter) {
    if (filter === 'all') {
        displayProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => product.brand === filter);
    displayProducts(filteredProducts);
}

// إعداد نموذج الطلب
function setupOrderForm() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';
    
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>${(item.price * item.quantity).toLocaleString()} ر.س</span>
        `;
        orderSummary.appendChild(orderItem);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const totalItem = document.createElement('div');
    totalItem.className = 'order-item';
    totalItem.innerHTML = `
        <span><strong>الإجمالي:</strong></span>
        <span><strong>${total.toLocaleString()} ر.س</strong></span>
    `;
    orderSummary.appendChild(totalItem);
}

// إرسال الطلب عبر واتساب
function sendOrderViaWhatsApp(formData) {
    const phoneNumber = "0123456789"; // استبدل برقم واتساب المتجر الحقيقي
    
    let message = "🛒 طلب جديد من متجر أحذية ماركات أصلية:\n\n";
    message += `👤 الاسم: ${formData.name}\n`;
    message += `📱 الهاتف: ${formData.phone}\n`;
    message += `📍 العنوان: ${formData.address}\n`;
    message += `📏 المقاس: ${formData.size}\n`;
    
    if (formData.notes) {
        message += `📝 ملاحظات: ${formData.notes}\n`;
    }
    
    message += "\n📦 تفاصيل الطلب:\n";
    cart.forEach(item => {
        message += `- ${item.name} (${item.quantity}) - ${(item.price * item.quantity).toLocaleString()} ر.س\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n💰 الإجمالي: ${total.toLocaleString()} ر.س`;
    message += "\n\n💳 طريقة الدفع: عند الاستلام";
    message += "\n\nمتجر أحذية ماركات أصلية - جوردن 1، جوردن 4، أديداس، بالينسياجا";
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // فتح رابط واتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
}

// إضافة الأحداث
function addEventListeners() {
    // فتح وإغلاق القائمة
    menuToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
    
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // فتح وإغلاق سلة التسوق
    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        cartSidebar.classList.add('active');
    });
    
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
    
    continueShopping.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
    
    // فتح وإغلاق نموذج الطلب
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('سلة التسوق فارغة. أضف منتجات لإتمام الشراء.');
            return;
        }
        
        setupOrderForm();
        checkoutModal.classList.add('active');
        cartSidebar.classList.remove('active');
    });
    
    closeModal.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });
    
    // إغلاق النماذج عند النقر خارجها
    window.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
        if (e.target === cartSidebar) {
            cartSidebar.classList.remove('active');
        }
    });
    
    // معالجة نموذج الطلب
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            size: document.getElementById('size').value,
            notes: document.getElementById('notes').value
        };
        
        // إرسال الطلب عبر واتساب
        sendOrderViaWhatsApp(formData);
        
        // إعادة تعيين النموذج وتفريغ السلة
        orderForm.reset();
        cart = [];
        localStorage.removeItem('cart');
        updateCart();
        checkoutModal.classList.remove('active');
        suggestedProducts.classList.remove('active');
        
        // عرض رسالة نجاح
        setTimeout(() => {
            alert('تم إرسال طلبك بنجاح! سنتصل بك قريباً لتأكيد التفاصيل.');
        }, 500);
    });
    
    // مرشحات المنتجات
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // إزالة النشاط من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة النشاط للزر المحدد
            button.classList.add('active');
            
            // تصفية المنتجات
            const filter = button.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    // روابط التنقل
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // إزالة النشاط من جميع الروابط
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // إضافة النشاط للرابط المحدد
            link.classList.add('active');
            
            // تصفية المنتجات إذا كان الرابط له خاصية data-category
            const category = link.getAttribute('data-category');
            if (category) {
                filterProducts(category);
                
                // تحديث أزرار التصفية
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-filter') === category) {
                        btn.classList.add('active');
                    }
                });
                
                // التمرير إلى قسم المنتجات
                document.getElementById('products').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // زر الواتساب العائم
    whatsappFloat.addEventListener('click', (e) => {
        e.preventDefault();
        
        const phoneNumber = "0123456789"; // استبدل برقم واتساب المتجر الحقيقي
        const message = "مرحباً، أرغب في الاستفسار عن منتجاتكم (جوردن 1، جوردن 4، أديداس، بالينسياجا)";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
    
    // إغلاق النماذج بمفتاح ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cartSidebar.classList.remove('active');
            checkoutModal.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// إضافة تأثيرات عند التمرير
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '8px 0';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    }
});

// إضافة زر للتمرير للأعلى (اختياري)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 99;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});