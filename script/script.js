const products = [
    {
        id: 1,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
        sub_category: "Snacks",
        category: "Snack & Spices",
        rate: 4,
        name: "Ground Nuts Oil Pack",
        oldPrice: 22,
        newPrice: 15,
        out_of_stock: false,
        weight: ["250g", "500g", "1Kg " , "2Kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 2,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/2.jpg",
        sub_category: "Juice",
        category: "Snack & Spices",
        rate: 3,
        name: "Organic Litchi Juice Pack",
        oldPrice: 30,
        newPrice: 25,
        out_of_stock: false,
        weight: ["100ml", "250ml", "500ml" , "1000ml"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 3,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/3.jpg",
        sub_category: "Chips",
        category: "Snack & Spices",
        rate: 4,
        name: "Crunchy Banana Chips",
        oldPrice: 2,
        newPrice: 1,
        out_of_stock: false,
        weight: ["100g", "250g"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 4,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/4.jpg",
        sub_category: "Chips",
        category: "Snack & Spices",
        rate: 5,
        name: "Crunchy Potato Chips",
        oldPrice: false,
        newPrice: 25,
        out_of_stock: "Out Of Stock",
        weight: ["100g", "250g"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 5,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/5.jpg",
        sub_category: "Spices",
        category: "Snack & Spices",
        rate: 4,
        name: "Black Pepper Spice pack",
        oldPrice: false,
        newPrice: 32,
        out_of_stock: "2 Left",
        weight: ["1 pack"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 6,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/6.jpg",
        sub_category: "Spices",
        category: "Snack & Spices",
        rate: 5,
        name: "Small Cardamom Spice Pack",
        oldPrice: 45,
        newPrice: 41,
        out_of_stock: false,
        weight: ["250g", "500g", "1Kg , 2Kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 7,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/7.jpg",
        sub_category: "Spices",
        category: "Snack & Spices",
        rate: 4,
        name: "Chilli Flakes Pack",
        oldPrice: 31,
        newPrice: 29,
        out_of_stock: false,
        weight: ["250g", "500g", "1Kg , 2Kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 8,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/8.jpg",
        sub_category: "Souces",
        category: "Snack & Spices",
        rate: 5,
        name: "Tomato Ketchup Pack",
        oldPrice: 10,
        newPrice: 9,
        out_of_stock: false,
        weight: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 9,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/9.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 5,
        name: "Organic dragon fruit",
        oldPrice: 7,
        newPrice: 5,
        out_of_stock: false,
        weight: ["Pcs"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 10,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/10.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 3,
        name: "Fresh blue berry",
        oldPrice: 30,
        newPrice: 25,
        out_of_stock: false,
        weight: ["250g", "500g", "1Kg , 2Kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 11,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/11.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 4,
        name: "Red Cherry Serbia",
        oldPrice: 8,
        newPrice: 6,
        out_of_stock: false,
        weight: ["250g", "500g", "1Kg , 2Kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 12,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/12.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 4,
        name: "Kwangtung Fresh Litchi",
        oldPrice: false,
        newPrice: 2,
        out_of_stock: "Out of Stock",
        weight: ["250g", "500g", "1Kg , 2Kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 13,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/13.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 4,
        name: "Fresh orange",
        oldPrice: false,
        newPrice: 10,
        out_of_stock: "2 Left",
        weight: ["Pcs"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 14,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/14.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 4,
        name: "Red Guava",
        oldPrice: 17,
        newPrice: 15,
        out_of_stock: false,
        weight: ["1kg", "2kg", "3kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 15,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/15.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 4,
        name: "Organic Kesar Mango",
        oldPrice: 31,
        newPrice: 29,
        out_of_stock: false,
        weight: ["1kg", "2kg", "3kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 16,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/16.jpg",
        sub_category: "Fruit",
        category: "Fruits",
        rate: 4,
        name: "Organic Banana",
        oldPrice: 10,
        newPrice: 9,
        out_of_stock: false,
        weight: ["1kg", "2kg", "3kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 17,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/17.jpg",
        sub_category: "Vegetable",
        category: "Vegetables",
        rate: 4,
        name: "Organic Tomato",
        oldPrice: 22,
        newPrice: 15,
        out_of_stock: false,
        weight: ["1kg", "2kg", "3kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 18,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/18.jpg",
        sub_category: "Tuber Root",
        category: "Vegetables",
        rate: 4,
        name: "Ecuador Red Potato",
        oldPrice: 30,
        newPrice: 25,
        out_of_stock: false,
        weight: ["1kg", "2kg", "3kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 19,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/19.jpg",
        sub_category: "Vegetable",
        category: "Vegetables",
        rate: 4,
        name: "Red organic Onion",
        oldPrice: 15,
        newPrice: 10,
        out_of_stock: false,
        weight: ["1kg", "2kg", "3kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 20,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/20.jpg",
        sub_category: "Leaves",
        category: "Vegetables",
        rate: 4,
        name: "Fresh Coriander",
        oldPrice: false,
        newPrice: 1,
        out_of_stock: "Out of Stock",
        weight: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 21,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/21.jpg",
        sub_category: "Vegetable",
        category: "Vegetables",
        rate: 4,
        name: "America Capcicum",
        oldPrice: false,
        newPrice: 4,
        out_of_stock: "2 Left",
        weight: ["100g", "250g", "1kg", "2kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 22,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/22.jpg",
        sub_category: "Spices",
        category: "Vegetables",
        rate: 4,
        name: "Mexico corn",
        oldPrice: 12,
        newPrice: 10,
        out_of_stock: false,
        weight: ["Pcs"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 23,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/23.jpg",
        sub_category: "Tuber Root",
        category: "Vegetables",
        rate: 4,
        name: "Jamaica Ginger",
        oldPrice: 4,
        newPrice: 3,
        out_of_stock: false,
        weight: ["100g", "250g", "1kg", "2kg"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
    {
        id: 24,
        Image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/24.jpg",
        sub_category: "Vegetable",
        category: "Vegetables",
        rate: 4,
        name: "Fresh Lemon",
        oldPrice: 10,
        newPrice: 9,
        out_of_stock: false,
        weight: null,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ea dolorem tempore a quasi eveniet voluptas!",
    },
];

let category = "All";
const categoriesContainer = document.querySelector(".arrivals-header-category");
const allProducts = document.querySelector(".arrivals-products");
function handleProductsCategory() {
    if (category == "All") {
        return displayProducts(products);
    } else {
        const filteredProducts = products.filter((product) => product.category == category);
        return displayProducts(filteredProducts);
    }
}
function handleCategories() {
    const categories = [];
    products.map((product) => categories.push(product.category));
    const uniqueCategories = ["All", ...new Set(categories)];
    const results = uniqueCategories.map((category) => ({
        label: category?.toUpperCase(),
        value: category,
    }));
    let html = ``;
    results.forEach(
        (results) =>
            (html += `<h3 class="${results.value == category ? "active" : ""}"data-value="${results.value}">${results.label}</h3>
                    <span>/</span>`),
                );
                categoriesContainer.innerHTML = html;
    const items = document.querySelectorAll(".arrivals-header-category h3");
    console.log(items);
    items.forEach((item) => item.onclick = () => {
        category = item.dataset.value;
        items.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        handleProductsCategory();
    })
}
function displayProducts(data) {
    let html = ``;
    data.forEach((product) => {
        html += `<div class="product">
                    <div class="product-image">
                        <img src="${product.Image}" alt="${product.name}">
                        <div class="icon-group">
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25"
                                    width="25" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Heart">
                                        <path
                                            d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="icon" onclick="showProductDetails(${product.id})">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="25" width="25"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="Repeat">
                                        <path
                                            d="M2.078,17.562c-0.01,-0.039 -0.016,-0.08 -0.016,-0.123c0,-0.138 0.056,-0.263 0.147,-0.353c0.008,-0.009 1.416,-1.417 2,-2c0.198,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.147,1.146l15.669,0c0.828,0 1.5,-0.671 1.5,-1.5l0,-3.439c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,3.439c0,1.381 -1.12,2.5 -2.5,2.5l-15.669,0l1.147,1.147c0.198,0.198 0.183,0.507 -0,0.707c-0.183,0.199 -0.522,0.185 -0.707,-0l-2,-2c-0.066,-0.063 -0.11,-0.143 -0.131,-0.231Zm19.845,-11.105c0.01,0.039 0.015,0.08 0.015,0.122c0,0.138 -0.056,0.263 -0.147,0.354c-0.008,0.008 -1.416,1.417 -2,2c-0.197,0.198 -0.507,0.183 -0.707,-0c-0.199,-0.183 -0.185,-0.522 0,-0.707l1.147,-1.147l-15.669,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,3.439c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-3.439c0,-1.381 1.12,-2.5 2.5,-2.5l15.669,0l-1.146,-1.146c-0.198,-0.198 -0.183,-0.507 -0,-0.707c0.183,-0.199 0.522,-0.185 0.707,-0l2,2c0.065,0.063 0.11,0.143 0.131,0.231Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="25" width="25"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM172,88a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="product-body">
                        <div class="category-and-rate">
                            <h3>${product.sub_category}</h3>
                            <span class="star">
                            ${new Array(5)
                                .fill(0)
                                .map((_, index) =>
                                    product.rate > index
                                        ? `<svg class="${
                                              product.rate > index ? "active" : ""
                                          }" stroke="currentColor" fill="currentColor" stroke-width="1px" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>`
                                        : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`,
                                )
                                .join("")}
                            </span>
                        </div>
                        <h2 class="name">${product.name}</h2>
                        <div class="prices-and-weight">
                            <div class="prices">
                                <span class="new-price">${product.newPrice}$</span>
                                <del class="old-price">${product.oldPrice ? product.oldPrice + "$" : ""}</del>
                                <span class="out-of-stock">${product.out_of_stock ? product.out_of_stock : ""}</span>
                            </div>
                            <div class="weight">
                                <span>${product.weight ? product.weight[0] : ""}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
    })
    allProducts.innerHTML = html;
}
console.log(handleCategories());
console.log(handleProductsCategory());
console.log(displayProducts(products));
// -----------------------------------------------------------------------------
const popup = document.querySelector(".popup-eye");
const popupContainer = document.querySelector(".popup-container");

function showProductDetails(productId) {
    popup.classList.add("show");
    popupContainer.classList.add("show");
    const findProduct = products.find((product) => product.id == productId);
    handlePopupData(findProduct);
}
// showProductDetails();
function handlePopupData(productDetails) {
    popupContainer.innerHTML = `
    <div class="popup-close" onclick="closePopup()">
                <span></span>
            </div>
            <div class="popup-data">
                <div class="popup-data-image">
                    <img src="${productDetails.Image}" alt="">
                </div>
                <div class="popup-data-content">
                    <h2>${productDetails.name}</h2>
                    <div class="popup-data-rate">
                    ${new Array(5)
                        .fill(0)
                        .map((_, index) =>
                            productDetails.rate > index
                                ? `<svg class="${
                                      productDetails.rate > index ? "active" : ""
                                  }" stroke="currentColor" fill="currentColor" stroke-width="1px" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>`
                                : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`,
                        )
                        .join("")}
                    </div>
                    <p class="popup-data-description">${productDetails.description}</p>
                    <div class="popup-data-price">
                        <strong>${productDetails.newPrice+"$"}</strong>
                        <del>${productDetails.oldPrice ? productDetails.oldPrice + "$" : ""}</del>
                        <span class="out-of-stock">${productDetails.out_of_stock ? productDetails.out_of_stock : ""}</span>
                    </div>
                    <div class="popup-data-weight">
                    ${productDetails.weight.map((weight) => `<span>${weight}</span>`).join("")}
                    </div>
                    <div class="popup-data-cart">
                        <div class="popup-data-cart-quantity">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <div class="popup-data-cart-btn">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M420 192h-68v-80a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12zm-106 0H198v-80.75a58 58 0 1 1 116 0z">
                                </path>
                            </svg>
                            <span>Add To cart</span>
                        </div>
                    </div>
                </div>
            </div>`;
}

function closePopup() {
    popup.classList.remove("show");
    popupContainer.classList.remove("show");
}
