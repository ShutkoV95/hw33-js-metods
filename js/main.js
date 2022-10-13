let goods = [
    {brand: 'Asus', category: 'notebooks', price: 20000},
    {brand: 'Lenovo', category: 'laptop', price: 25000},
    {brand: 'Acer', category: 'laptop', price: 20000},
    {brand: 'Asus', category: 'laptop', price: 35000},
    {brand: 'Aple', category: 'laptop', price: 40000},
    {brand: 'Lenovo', category: 'notebooks ', price: 15000},
    {brand: 'Acer', category: 'notebooks', price: 30000},

];

let filterGood = goodFilter(goods, function(item){
    return item.category == 'laptop'; 
});

let upperBrands = newGoodsUpperBrands(goods, function(item) {
    return item.brand.toUpperCase();
});


while (true) {
    let choice = prompt('1.Сортировка по бренду; 2.Сортировка по категории; 3.Сортировка по цене; 4.Фильтр товаров; 5.Все бренды.');
    
    if (choice == '1') {
        console.log('Сортировка товаров по бренду: ', sortByBrand(goods));
        break;
    } else if (choice == '2') {
        console.log('Сортировка товаров по категории: ', sortByCategory(goods));
        break;
    } else if (choice == '3') {
        console.log('Сортировка товаров по цене: ', sortByPrice(goods));
        break;
    } else if (choice == '4') {
        console.log('Фильтр товаров: ', filterGood);
        break;
    } else if (choice == '5') {
        console.log('Все назвы брендов большими буквами: ', upperBrands);;
        break;
    } 
}

function sortByBrand(arr) {
    arr.sort(function(a, b) {
        if (a.brand > b.brand) return 1;
        if (a.brand < b.brand) return -1;
        if (a.brand == b.brand) return 0;
    });
    return arr;
};

function sortByCategory(arr) {
    arr.sort(function(a, b) {
        if (a.category > b.category) return 1;
        if (a.category < b.category) return -1;
        if (a.category == b.category) return 0;
    });
    return arr;
};

function sortByPrice(arr) {
    arr.sort(function(a, b) {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1; 
        if (a.price == b.price) return 0; 
    });
    return arr;
};

function goodFilter(arr, callback) {
    let copyArr = arr.slice();
    let filterArr = [];
    let index = copyArr.findIndex(function(item) {
        return callback (item);
    });

    while(index != -1) {
        filterArr.push(copyArr[index]);
        copyArr.splice(index, 1)

        index = copyArr.findIndex(function(item) {
            return callback (item);
        });
    }

    return filterArr;
}

function newGoodsUpperBrands(arr, callback) {
    let arrHtml = [];
    arr.forEach(function(item) {
        arrHtml.push(callback(item));
    });

    return arrHtml;
}