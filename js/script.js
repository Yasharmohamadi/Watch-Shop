const itemsArray = [
    {id: 1, name: 'ساعت هوشمند اپل واچ', description: 'این ساعت طراحی ظریف و زیبایی دارد. فرم صفحه این مدل دایره‌ای بوده و ...', price: '2,350,000', src: './image/01.webp',},
    {id: 2, name: 'ساعت هوشمند سامسونگ', description: 'صفحه‌نمایش این نسخه از ساعت Galaxy Watch4 سامسونگ 1.4 اینچی دارد و ...', price: '7,129,000', src: './image/02.webp',},
    {id: 3, name: 'ساعت هوشمند شیائومی', description: 'ساعت هوشمند یکی از محصولات جذاب و متفاوت شیائومی است و ...', price: '8,569,000', src: './image/03.webp',},
];

const $ = document;
const itemsContainer = $.querySelector('.container');

// add items to HTML from JS.
itemsArray.forEach(function (item) {
    itemsContainer.insertAdjacentHTML('beforeend',`
    <div class="item_btn">
        <div class="item">
        <h1 class="item_title">${item.name}</h1>
        <p class="item_description">${item.description}</p>
        <img class="item_image" src="${item.src}">
        <p class="item_price">
        ${item.price}
        <span class="item_price_unit">تومان</span>
        </p>
        </div>
        <button class="item_button">
        <a class="item_link" taarget="_blank" href="product.html?id=${item.id}">
        اطلاعات بیشتر
        </a>
        </button>
    </div>
        `
);
});