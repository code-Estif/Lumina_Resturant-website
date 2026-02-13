const menuData = [
    {
        id: 1,
        name: "Truffle Ribeye",
        category: "food",
        price: "$45",
        desc: "Prime aged ribeye served with black truffle butter and roasted heirloom carrots.",
        img: "Truffle Ribeye.jpg",
        alt: "Gourmet ribeye steak with truffle butter"
    },
    {
        id: 2,
        name: "Miso Glazed Salmon",
        category: "food",
        price: "$38",
        desc: "Wild-caught salmon with a sweet miso glaze, bok choy, and ginger-infused rice.",
        img: "Miso Glazed Salmon.jpg",
        alt: "Glazed salmon fillet on a bed of rice"
    },
    {
        id: 3,
        name: "Saffron Risotto",
        category: "food",
        price: "$32",
        desc: "Creamy carnaroli rice with premium saffron, parmesan crisps, and microgreens.",
        img: "Saffron Risotto.jpg",
        alt: "Vibrant yellow saffron risotto"
    },
    {
        id: 4,
        name: "Midnight Martini",
        category: "drinks",
        price: "$18",
        desc: "Gold-dusted espresso martini with a hint of vanilla and roasted cocoa beans.",
        img: "Midnight Martini.jpg",
        alt: "Dark espresso martini in a tall glass"
    },
    {
        id: 5,
        name: "Artisan Cheeseboard",
        category: "food",
        price: "$28",
        desc: "A selection of curated local cheeses, honeycomb, and house-made fig jam.",
        img: "Artisan Cheeseboard.jpg",
        alt: "Gourmet cheese board with crackers"
    },
    {
        id: 6,
        name: "Vintage Old Fashioned",
        category: "drinks",
        price: "$22",
        desc: "Smoked bourbon, maple reduction, and aromatic bitters over a sphere of hand-carved ice.",
        img: "Vintage Old Fashioned.jpg",
        alt: "Classic old fashioned cocktail"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResults = document.getElementById('no-results');

    function displayMenuItems(items) {
        if (items.length === 0) {
            noResults.style.display = 'block';
            menuGrid.innerHTML = '';
            return;
        }

        noResults.style.display = 'none';
        menuGrid.innerHTML = items.map(item => `
            <article class="menu-item" data-category="${item.category}" style="opacity: 0; transform: translateY(10px);">
                <img 
                    src="${item.img}" 
                    alt="${item.alt}" 
                    class="menu-item-img" 
                    loading="lazy"
                >
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                </div>
            </article>
        `).join('');

        setTimeout(() => {
            const articles = menuGrid.querySelectorAll('.menu-item');
            articles.forEach((art, index) => {
                setTimeout(() => {
                    art.style.opacity = '1';
                    art.style.transform = 'translateY(0)';
                }, index * 50);
            });
        }, 10);
    }

    displayMenuItems(menuData);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.filter;
            const filtered = category === 'all'
                ? menuData
                : menuData.filter(item => item.category === category);

            displayMenuItems(filtered);
        });
    });
});
