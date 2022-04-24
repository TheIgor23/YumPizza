let products = {
    "01": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/eb6d128bbcd340e98fd4f14b377e769f_292x292.jpeg",
        price: 470,
        name: "Пепперони фреш",
        count: 0
    },
    "02": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_292x292.jpeg",
        price: 550,
        name: "Ветчина и грибы",
        count: 0
    },
    "03": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/01735d5a70154bd3884899030a671629_292x292.jpeg",
        price: 469,
        name: "Сырный цыпленок",
        count: 0
    },
    "04": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/5bf1c77b3ff44f93bb01c840ab35b033_292x292.jpeg",
        price: 400,
        name: "Гавайская",
        count: 0
    },
    "05": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/d23af75498eb47a8a586313792da917f_292x292.jpeg",
        price: 579,
        name: "Цыпленок ранч",
        count: 0
    },
    "06": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg",
        price: 250,
        name: "Ветчина и сыр",
        count: 0
    },
    "07": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/57157f013c164840a24c1d49c7adb3b6_292x292.jpeg",
        price: 449,
        name: "Цыпленок барбекю",
        count: 0
    },
    "08": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/961ba97167754e35831d1640ab91a4fe_292x292.jpeg",
        price: 570,
        name: "Индейка в мандаринах",
        count: 0
    },
    "09": {
        img: "img/deserts/cheese_cake.png",
        price: 200,
        name: "Чизкейк клубничный",
        count: 0
    },
    "10": {
        img: "img/deserts/Fruitcake.png",
        price: 250,
        name: "Немецкий шоколадный торт",
        count: 0
    },
    "11": {
        img: "img/deserts/Tiramisu.png",
        price: 349,
        name: "Тирамису",
        count: 0
    },
    "12": {
        img: "img/deserts/beze_limon.png",
        price: 270,
        name: "Лимонный пирог",
        count: 0
    },
    "13": {
        img: "img/deserts/chocolate_tort.png",
        price: 379,
        name: "Красный бархатный торт",
        count: 0
    },
    "14": {
        img: "img/deserts/chesee_cake_chocolate.png",
        price: 240,
        name: "Чизкейк Шоколадный",
        count: 0
    },
    "15": {
        img: "img/deserts/keks.png",
        price: 149,
        name: "Маффин с черникой",
        count: 0
    },
    "16": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/09cd1af3588944bcb56dded118a9774a_292x292.jpeg",
        price: 279,
        name: "Фонданы",
        count: 0
    },
    "17": {
        img: "img/drinks/seven_up.png",
        price: 100,
        name: "7 up",
        count: 0
    },
    "18": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/73eb242273e0477e9544104ca9b1d42f_292x292.jpeg",
        price: 100,
        name: "Sprite",
        count: 0
    },
    "19": {
        img: "https://dodopizza-a.akamaihd.net/static/Img/Products/5a945ed86ef943ac9583c4a6413d9ad0_292x292.jpeg",
        price: 100,
        name: "Coca-Cola",
        count: 0
    },
    "20": {
        img: "img/drinks/lipton.png",
        price: 100,
        name: "Lipton",
        count: 0
    },
    "21": {
        img: "https://s82079.cdn.ngenix.net/330x0/E6ww5qRFgmcu8BiALW6SV6qk.png",
        price: 79,
        name: "Кофе Капучино",
        count: 0
    },
    "22": {
        img: "https://s82079.cdn.ngenix.net/330x0/4UkJCfWF9A4que6dMPFUeeg1.png",
        price: 50,
        name: "Кофе Американо",
        count: 0
    },
    "23": {
        img: "https://s82079.cdn.ngenix.net/330x0/baFNcGZXBkJDuuVv77zwpQWg.png",
        price: 49,
        name: "Кофе Латте",
        count: 0
    },
    "24": {
        img: "https://s82079.cdn.ngenix.net/330x0/3ueLqbYvBmSaXPUtMzxbpH6X.png",
        price: 79,
        name: "Кофе Двойной Эспрессо",
        count: 0
    }

};

//подсветка товара при клике

let buttons = document.querySelectorAll(".block-el button");

function AddProductLocaleStorage(btn){
    let product;

    for (const [key, value] of Object.entries(products)){
        if(btn.id == key)
        {
            product = JSON.parse(localStorage.getItem(key));
            if(product)
            {
                
                product.count = product.count+1; 
            }
            else
            {  
                product = products[key];
                product.count = product.count + 1;
               
                
            }
            localStorage.setItem(key, JSON.stringify(product));

           
        }
    }
}

function ShowCount(){
    if(localStorage.length > 0)
    {
        
        let count = document.querySelector("#counter");
        count.innerHTML = "0";
        
        for(let i=0; i<localStorage.length; i++) {
            localStorage.key(i);
            
            let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
            count.innerHTML = parseInt(count.innerHTML) + product.count;
           
        }

        count.parentElement.style.visibility = "visible"; 
    }
}

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
       
        AddProductLocaleStorage(btn);
        ShowCount();

        
    })
})

window.onload = function(){
    ShowCount();
}