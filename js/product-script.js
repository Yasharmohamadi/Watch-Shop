const itemsArray = [
    {id: 1, name: 'ساعت هوشمند اپل واچ', description: 'شیائومی یکی از بزرگترین و موفق ترین برندهای دنیا در زمینه تولید محصولات الکترونیکی و هوشمند است. این برند در سال 2010 در چین تاسیس شد و از آن زمان تا کنون با تولید محصولات با کیفیت و نوآورانه در این حوزه، جایگاه بالایی را به خود اختصاص داده است. شیائومی در زمینه‌های مختلفی فعالیت می‌کند، از جمله گوشی هوشمند، لپ تاپ، تبلت، ساعت هوشمند، هدفون، اسپیکر، تلویزیون، دوربین، لوازم خانگی و غیره. شیائومی همچنین در زمینه‌های اینترنت اشیا، هوش مصنوعی، خدمات ابری و پلتفرم‌های نرم افزاری نیز فعالیت دارد.', price: '2,350,000', src: './image/01.webp',},
    {id: 2, name: 'ساعت هوشمند سامسونگ', description: 'این ساعت طراحی ظریف و زیبایی دارد. فرم صفحه این مدل دایره‌ای بوده و برای شما که ساعت گرد را به ساعت‌های مستطیلی ترجیح می‌دهید بسیار جذاب خواهدبود. در سمت راست ساعت دو عدد دکمه فیزیکی وجود دارد و اگر به دکمه‌های فیزیکی هنوز علاقه‌مند هستید برای شما جذاب خواهد بود. در این ساعت هم از بند‌های ۲۰ میلی‌متری استفاده شده است. قفل بند آن سگکی ساده است، بنابراین به راحتی و با سرعت می‌توانید ساعت را باز یا بسته کنید.علاوه بر آن بند در زیر ساعت جا می‌گیرد و بیرون نمی‌ماند. جنس بدنه ساعت از  آلومینیوم بوده و علاوه بر بالا بودن کیفیت ساعت احساس خوبی در شما به وجود می‌آورد. جنس بند هم سیلیکونی است. این بند در چند رنگ ارائه شده و شما طبق سلیقه می‌توانید از آن استفاده کنید.', price: '7,129,000', src: './image/02.webp',},
    {id: 3, name: 'ساعت هوشمند شیائومی', description: 'صفحه‌نمایش این نسخه از ساعت Galaxy Watch4 سامسونگ 1.4 اینچی دارد و برای ساخت آن از فناوری super AMOLED استفاده شده است. رزولوشن صفحه‌نمایش 450 × 450 پیکسل است و تصویر واضح و شفافی را به نمایش می‌گذارد. این ساعت دارای حسگرهای متنوعی است که باعث می‌شود، بتوانید فعالیت‌های روزانه‌ خود را به‌راحتی اندازه‌گیری کنید. این حسگرها شامل شتاب‌سنج، ژیروسکوپ، فشارسنج و شمارش ضربان قلب هستند. با به‌همراه‌داشتن این ساعت، خیالتان بابت تمامی مسئولیت‌هایی که در طول روز دارید، راحت می‌شود. قابلیت ضدآب این ساعت باعث می‌شود بتوانید از آن در شنا کردن استفاده کنید', price: '8,569,000', src: './image/03.webp',},
];

const $ = document;
const itemsContainer = $.querySelector('.container');
const backElement = $.querySelector('.back_button');
const buyElement = $.querySelector('.item_button');


let locationParams = new URLSearchParams(location.search);

let mainProductID = locationParams.get('id');

let mainProduct = itemsArray.find(function (item) {
    return item.id == mainProductID;
});

// add items to HTML from JS.
function createDOMElement(mainProduct) {
    itemsContainer.insertAdjacentHTML('beforeend',
    `
    <div class="item">
    <h1 class="item_name">${mainProduct.name}</h1>
    <div class="image_description_div">
    <p class="item_description">${mainProduct.description}</p>
    <img class="item_image" src="${mainProduct.src}">
    </div>
    <div class="item_price">
    ${mainProduct.price}
    <span class="item_price_unit">تومان</span>
    </div>
    </div>
    `
    );
};

createDOMElement(mainProduct);

backElement.addEventListener('click', function () {
    history.back();
});

buyElement.addEventListener('click', function () {
    alert('مبارکت باشه');
});