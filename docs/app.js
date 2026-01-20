// MovieStore JavaScript functionality

// User authentication
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Authentication functions
function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
}

function registerUser(name, email, password) {
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return false; // User already exists
    }

    // Create new user
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password,
        role: "user"
    };

    users.push(newUser);
    return true;
}

function updateAuthUI() {
    const loginLinks = document.querySelectorAll('.nav-link[href="login.html"]');
    const signupLinks = document.querySelectorAll('.btn[href="login.html"]');

    if (currentUser) {
        // User is logged in
        loginLinks.forEach(link => {
            link.textContent = `Hi, ${currentUser.name}`;
            link.href = "#";
            link.onclick = (e) => {
                e.preventDefault();
                logoutUser();
                location.reload();
            };
        });
        signupLinks.forEach(link => {
            link.textContent = "Logout";
            link.onclick = (e) => {
                e.preventDefault();
                logoutUser();
                location.reload();
            };
        });
    }
}

// Add to cart
function addToCart(movieId, type = 'rental') {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        const cartItem = {
            id: movie.id,
            title: movie.title,
            poster: movie.poster,
            price: type === 'purchase' ? movie.price : movie.rentalPrice,
            type: type,
            quantity: 1
        };

        // Check if item already in cart
        const existingItem = cart.find(item => item.id === movieId && item.type === type);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`${movie.title} added to cart!`, 'success');
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Render cart
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div class="cart-item mb-3 p-3 bg-white">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${item.poster}" alt="${item.title}" class="img-fluid rounded">
                    </div>
                    <div class="col-md-4">
                        <h5>${item.title}</h5>
                        <p class="text-muted">${item.type === 'purchase' ? 'Purchase' : 'Rental'}</p>
                    </div>
                    <div class="col-md-2">
                        <p class="mb-0">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="col-md-2">
                        <input type="number" class="form-control" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Update quantity
function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Render featured movies
function renderFeaturedMovies() {
    const featuredContainer = document.getElementById('featured-movies');
    if (!featuredContainer) return;

    const featuredMovies = movies.filter(movie => movie.featured);

    featuredMovies.forEach(movie => {
        featuredContainer.innerHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card movie-card h-100">
                    <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${movie.title}</h5>
                        <div class="mb-2">
                            <span class="badge bg-primary me-2">${movie.genre}</span>
                            <span class="badge bg-secondary">${movie.year}</span>
                        </div>
                        <div class="mb-3">
                            <i class="fas fa-star star-rating"></i>
                            <span class="ms-1">${movie.rating}</span>
                        </div>
                        <p class="card-text flex-grow-1">${movie.description.substring(0, 100)}...</p>
                        <div class="mt-auto">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-outline-primary btn-sm w-100" onclick="addToCart(${movie.id}, 'rental')">
                                        Rent $${movie.rentalPrice}
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-primary btn-sm w-100" onclick="addToCart(${movie.id}, 'purchase')">
                                        Buy $${movie.price}
                                    </button>
                                </div>
                            </div>
                            <a href="movie.html?id=${movie.id}" class="btn btn-link btn-sm w-100 mt-2">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// Render movie catalog
function renderMovieCatalog(filterCategory = '', searchTerm = '') {
    const catalogContainer = document.getElementById('movie-catalog');
    if (!catalogContainer) return;

    let filteredMovies = movies;

    if (filterCategory) {
        filteredMovies = filteredMovies.filter(movie => movie.genre === filterCategory);
    }

    if (searchTerm) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    catalogContainer.innerHTML = '';

    filteredMovies.forEach(movie => {
        catalogContainer.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card movie-card h-100">
                    <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${movie.title}</h5>
                        <div class="mb-2">
                            <span class="badge bg-primary me-2">${movie.genre}</span>
                            <span class="badge bg-secondary">${movie.year}</span>
                        </div>
                        <div class="mb-3">
                            <i class="fas fa-star star-rating"></i>
                            <span class="ms-1">${movie.rating}</span>
                        </div>
                        <p class="card-text flex-grow-1">${movie.description.substring(0, 80)}...</p>
                        <div class="mt-auto">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-outline-primary btn-sm w-100" onclick="addToCart(${movie.id}, 'rental')">
                                        Rent $${movie.rentalPrice}
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-primary btn-sm w-100" onclick="addToCart(${movie.id}, 'purchase')">
                                        Buy $${movie.price}
                                    </button>
                                </div>
                            </div>
                            <a href="movie.html?id=${movie.id}" class="btn btn-link btn-sm w-100 mt-2">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// Render movie details
function renderMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));

    if (!movieId) return;

    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    const movieDetails = document.getElementById('movie-details');
    if (!movieDetails) return;

    movieDetails.innerHTML = `
        <div class="row">
            <div class="col-lg-4">
                <img src="${movie.poster}" alt="${movie.title}" class="img-fluid movie-details mb-4">
            </div>
            <div class="col-lg-8">
                <h1>${movie.title}</h1>
                <div class="mb-3">
                    <span class="badge bg-primary me-2">${movie.genre}</span>
                    <span class="badge bg-secondary me-2">${movie.year}</span>
                    <span class="badge bg-info">${movie.duration}</span>
                </div>
                <div class="mb-3">
                    <i class="fas fa-star star-rating"></i>
                    <span class="ms-1 fs-5">${movie.rating}</span>
                </div>
                <p class="lead">${movie.description}</p>
                <div class="mb-4">
                    <h5>Director:</h5>
                    <p>${movie.director}</p>
                    <h5>Cast:</h5>
                    <p>${movie.cast.join(', ')}</p>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5>Rent</h5>
                                <h3 class="text-primary">$${movie.rentalPrice}</h3>
                                <button class="btn btn-outline-primary w-100" onclick="addToCart(${movie.id}, 'rental')">
                                    <i class="fas fa-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5>Purchase</h5>
                                <h3 class="text-success">$${movie.price}</h3>
                                <button class="btn btn-success w-100" onclick="addToCart(${movie.id}, 'purchase')">
                                    <i class="fas fa-shopping-cart"></i> Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="${movie.trailer}" target="_blank" class="btn trailer-btn">
                    <i class="fab fa-youtube"></i> Watch Trailer
                </a>
            </div>
        </div>
    `;
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderFeaturedMovies();

    // Handle catalog page
    if (document.getElementById('movie-catalog')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        renderMovieCatalog(category);

        // Search functionality
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');

        if (searchInput && searchBtn) {
            searchBtn.addEventListener('click', () => {
                renderMovieCatalog(category, searchInput.value);
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    renderMovieCatalog(category, searchInput.value);
                }
            });
        }

        // Category filter
        const categoryButtons = document.querySelectorAll('.category-filter');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedCategory = btn.dataset.category;
                renderMovieCatalog(selectedCategory);
                categoryButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Handle movie details page
    if (document.getElementById('movie-details')) {
        renderMovieDetails();
    }

    // Handle cart page
    if (document.getElementById('cart-items')) {
        renderCart();
    }

    // Handle login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (loginUser(email, password)) {
                showNotification('Login successful! Welcome back!', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                showNotification('Invalid email or password!', 'danger');
            }
        });
    }

    // Handle signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            if (registerUser(name, email, password)) {
                showNotification('Account created successfully! Please login.', 'success');
                // Flip back to login
                const container = document.getElementById('container');
                container.className = 'close';
            } else {
                showNotification('Email already exists!', 'danger');
            }
        });
    }

    // Handle flip buttons
    const registerButton = document.getElementById('register');
    const loginButton = document.getElementById('login');
    const container = document.getElementById('container');

    if (registerButton && loginButton && container) {
        registerButton.onclick = function(){
            container.className = 'active';
        };
        loginButton.onclick = function(){
            container.className = 'close';
        };
    }

    // Update auth UI on page load
    updateAuthUI();
});