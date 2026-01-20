// Movie data for MovieStore
const movies = [
    {
        id: 1,
        title: "The Dark Knight",
        genre: "action",
        year: 2008,
        rating: 9.0,
        price: 4.99,
        rentalPrice: 2.99,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        duration: "152 min",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSrkl4OLvST4y_f-fz56oL5olr-DCvJ2cWQ&s",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        featured: true
    },
    {
        id: 2,
        title: "The Expendables 4",
        genre: "action",
        year: 2023,
        rating: 4.8,
        price: 5.0,
        rentalPrice: 8.99,
        description: "sebuah film aksi Amerika tahun 2023 yang disutradarai Scott Waugh dari skenario karya Kurt Wimmer, Tad Daggerhart, dan Max Adams, berdasarkan cerita karangan Spenser Cohen, Wimmer, dan Daggerhart. Merupakan sekuel dari The Expendables 3 dan seri keempat dari The Expendables.",
        director: "Scott Waugh",
        cast: [" Jason Statham , Sylvester Stallone , Curtis Jackson , Megan Fox , Dolph Lundgren , Tony Jaa , Iko Uwais , Randy Couture , dan Andy Garcia"],
        duration: "103 min",
        poster: "https://play-lh.googleusercontent.com/hUEyvoV-6RaS4JZU7Rzm4QhtoOimdD2PL_AajzoV5A_rJn2H0BZFkJP6Xa1OO031R7kEoyYF81BcWeErSg",
        trailer: "https://youtu.be/DhlaBO-SwVE?si=sHPVWB1woFBhOUw4",
        featured: true
    },
    {
        id: 3,
        title: "Pertaruhan 2 the series",
        genre: "action",
        year: 2004,
        rating: 9.3,
        price: 3.99,
        rentalPrice: 1.99,
        description: "Pertaruhan the Series 2 adalah serial televisi Indonesia produksi Screenplay Films yang ditayangkan perdana 3 November 2023 di Vidio berdasarkan film Pertaruhan karya Upi. Serial ini disutradarai oleh Sidharta Tata dan Fajar Martha Santosa serta dibintangi oleh Jefri Nichol, Giulio Parengkuan, dan Clara Bernadet.",
        director: "Sidharta Tata and Fajar Martha Santosa ",
        cast: ["Jefri Nichol; Giulio Parengkuan; Clara Bernadeth; Juan Bio One; Khiva Iskak"],
        duration: "180 min",
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2muIvaZawcnasr8_dHuOoErowZm7RA3SRXW6P92bgO-u_RHl8Hhbc8l_qpt4tTFN-uOixnGAEJWnje746vqmydAGWyAbTXnhIp07AY-9hXA",
        trailer: "https://youtu.be/x_suyF59MfA?si=iF78t88Gq895dUa_",
        featured: true
    },
    {
        id: 4,
        title: "The Raid",
        genre: "crime",
        year: 2011,
        rating: 9,
        price: 3.99,
        rentalPrice: 1.99,
        description: "he Raid: Redemption (2011) adalah film aksi Indonesia tentang tim SWAT yang terjebak saat menjalankan misi untuk menggerebek apartemen seorang gembong narkoba di Jakarta. Dikenal karena aksi seni bela diri pencak silat yang brutal dan terorganisir dengan baik",
        director: "Gareth Evans",
        cast: ["Iko Uwais · Ray Sahetapy · Joe Taslim · Donny Alamsyah · Yayan Ruhian · Pierre Gruno · Tegar Satrya · Celluloid Nightmares: Fajar Yuskemal "],
        duration: "154 min",
        poster: "https://upload.wikimedia.org/wikipedia/id/thumb/e/ed/The_Raid_Poster.JPG/500px-The_Raid_Poster.JPG",
        trailer: "https://youtu.be/m6Q7KnXpNOg?si=IUMyDXBJoCv_WS2H",
        featured: false
    },
    {
        id: 5,
        title: "Forrest Gump",
        genre: "drama",
        year: 1994,
        rating: 8.8,
        price: 3.99,
        rentalPrice: 1.99,
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        duration: "142 min",
        poster: "https://via.placeholder.com/300x450/333/fff?text=Forrest+Gump",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        featured: false
    },
    {
        id: 6,
        title: "The Matrix",
        genre: "scifi",
        year: 1999,
        rating: 8.7,
        price: 3.99,
        rentalPrice: 1.99,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        duration: "136 min",
        poster: "https://via.placeholder.com/300x450/333/fff?text=The+Matrix",
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        featured: false
    },
    {
        id: 7,
        title: "John wik 4",
        genre: "crime",
        year: 2023,
        rating: 9,
        price: 4.5,
        rentalPrice: 2.3,
        description: "ohn Wick (Keanu Reeves) menemukan jalan untuk mengalahkan The High Table. Tapi sebelum dia bisa mendapatkan kebebasannya, Wick harus berhadapan dengan musuh baru dengan aliansi yang kuat di seluruh dunia! Memaksanya mengubah teman lama menjadi musuh.Criminal merupakan sebuah film Aksi-Kejahatan Amerika Serikat yang dirilis pada tahun 2016. Film yang disutradarai oleh Ariel Vromen ini diperankan oleh Kevin Costner, Gary Oldman dan masih banyak lagi",
        director: "Ariel Vromen",
        cast: ["KDonnie Yen · Bill Skarsgård · Marko Zaror · Laurence Fishburne · Hiroyuki Sanada · Shamier Anderson · Lance Reddick · Rina Sawayamaevin Costner · Gary Oldman · Tommy Lee Jones · Alice Eve · Gal Gadot · Michael Pitt · Jordi Mollà"],
        duration: "169 min",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDr6JpQI5SBwR1MecwmUHXY2noPWgPjXbDsw&s",
        trailer: "https://youtu.be/3bvnoqsvY-M?si=yvF-dl_ystlVEgw7",
        featured: false
    },
    {
        id: 8,
        title: "The Silence of the Lambs",
        genre: "thriller",
        year: 1991,
        rating: 8.6,
        price: 3.99,
        rentalPrice: 1.99,
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
        director: "Jonathan Demme",
        cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
        duration: "118 min",
        poster: "https://via.placeholder.com/300x450/333/fff?text=Silence+of+the+Lambs",
        trailer: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
        featured: false
    },
    {
        id: 9,
        title: "Schindler's List",
        genre: "drama",
        year: 1993,
        rating: 8.9,
        price: 4.99,
        rentalPrice: 2.99,
        description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
        director: "Steven Spielberg",
        cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        duration: "195 min",
        poster: "https://via.placeholder.com/300x450/333/fff?text=Schindlers+List",
        trailer: "https://www.youtube.com/watch?v=JdRGC-w9syA",
        featured: false
    },
    {
        id: 10,
        title: "Pertaruhan the series",
        genre: "action",
        year: 2022,
        rating: 9.0,
        price: 2.5,
        rentalPrice: 1.99,
        description: "Pertaruhan the Series adalah serial televisi Indonesia produksi Screenplay Films yang ditayangkan perdana 11 Juni 2022 di Vidio berdasarkan film Pertaruhan. Serial ini disutradarai oleh Sidharta Tata dan dibintangi oleh Jefri Nichol, Giulio Parengkuan, dan Clara Bernadeth. ",
        director: " Sidharta Tata",
        cast: ["Jefri Nichol; Giulio Parengkuan; Clara Bernadeth; Widika Sidmore; Abdurrahman Arif"],
        duration: "61 min",
        poster: "https://upload.wikimedia.org/wikipedia/id/b/b8/Pertaruhan_the_Series_poster.jpeg",
        trailer: "https://youtu.be/tV3hg8HTE18?si=7jnv9y3WnkidoX1V",
        featured: false
    },
    {
        id: 11,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "fantasy",
        year: 2001,
        rating: 8.8,
        price: 4.99,
        rentalPrice: 2.99,
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        duration: "178 min",
        poster: "https://via.placeholder.com/300x450/333/fff?text=LotR+Fellowship",
        trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
        featured: false
    },
    {
        id: 12,
        title: "Star Wars: Episode IV - A New Hope",
        genre: "scifi",
        year: 1977,
        rating: 8.6,
        price: 3.99,
        rentalPrice: 1.99,
        description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station.",
        director: "George Lucas",
        cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        duration: "121 min",
        poster: "https://via.placeholder.com/300x450/333/fff?text=Star+Wars",
        trailer: "https://www.youtube.com/watch?v=1g3_CFmnU7k",
        featured: false
    }
];

// User database for authentication
const users = [
    {
        id: 1,
        name: "Admin User",
        email: "admin@moviestore.com",
        password: "admin123",
        role: "admin"
    },
    {
        id: 2,
        name: "yuda.py",
        email: "yudapy@gmail.com",
        password: "py12345",
        role: "user"
    },
    {
        id: 3,
        name: "akshai.java",
        email: "akshai@gmail.com",
        password: "sembiring123",
        role: "user"
    }
];

// Cloud storage simulation for orders and payment methods
let cloudStorage = {
    orders: [],
    paymentMethods: [],
    transferProofs: []
};

// Cloud storage functions
function saveToCloud(dataType, data) {
    if (!cloudStorage[dataType]) {
        cloudStorage[dataType] = [];
    }
    cloudStorage[dataType].push(data);
    // Simulate saving to localStorage as cloud storage
    localStorage.setItem('cloudStorage', JSON.stringify(cloudStorage));
    console.log(`Data saved to cloud: ${dataType}`, data);
    return true;
}

function loadFromCloud(dataType) {
    const stored = localStorage.getItem('cloudStorage');
    if (stored) {
        cloudStorage = JSON.parse(stored);
    }
    return cloudStorage[dataType] || [];
}

// Payment method storage
function savePaymentMethod(userId, paymentMethod) {
    const method = {
        id: Date.now(),
        userId: userId,
        ...paymentMethod,
        savedAt: new Date().toISOString()
    };
    saveToCloud('paymentMethods', method);
    return method;
}

function getSavedPaymentMethods(userId) {
    const methods = loadFromCloud('paymentMethods');
    return methods.filter(method => method.userId === userId);
}

// Order storage
function saveOrder(orderData) {
    const order = {
        id: Date.now(),
        ...orderData,
        status: 'confirmed',
        savedAt: new Date().toISOString()
    };
    saveToCloud('orders', order);
    return order;
}

function getUserOrders(userId) {
    const orders = loadFromCloud('orders');
    return orders.filter(order => order.userId === userId);
}

// Transfer proof storage
function saveTransferProof(transferProof) {
    const proof = {
        ...transferProof,
        savedAt: new Date().toISOString()
    };
    saveToCloud('transferProofs', proof);
    return proof;
}

function getTransferProofs(orderId) {
    const proofs = loadFromCloud('transferProofs');
    return proofs.filter(proof => proof.orderId === orderId);
}

const categories = [
    { id: "action", name: "Action", icon: "fas fa-bolt" },
    { id: "comedy", name: "Comedy", icon: "fas fa-laugh" },
    { id: "drama", name: "Drama", icon: "fas fa-theater-masks" },
    { id: "scifi", name: "Sci-Fi", icon: "fas fa-rocket" },
    { id: "crime", name: "Crime", icon: "fas fa-handcuffs" },
    { id: "thriller", name: "Thriller", icon: "fas fa-skull" },
    { id: "fantasy", name: "Fantasy", icon: "fas fa-magic" },
    { id: "romance", name: "Romance", icon: "fas fa-heart" }
];
