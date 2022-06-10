
let all_price = document.querySelector("#all-price");

let order_btn = document.querySelector("#order-btn");
let order_btn_close = document.querySelector(".fa-xmark");
order_btn_close.addEventListener('click', ShowPopUp);
order_btn.addEventListener('click', ShowPopUp);

let send_email_btn = document.querySelector('#send-email');
send_email_btn.addEventListener('click', createOrder);


function createOrder(){
    let email_input = document.querySelector("#email-input");

    if(validate(email_input.value)){
        email_input.classList.remove('incorrect');
        ShowPopUp();

        let data = CreateDataToSend();
 

   fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    }
    else{
        
        email_input.classList.add('incorrect');
    }


}

function validate(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

function CreateDataToSend(){
    let data = {};
    data.email = document.querySelector("#email-input").value;
    data.order = [];

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        
        data.order.push(JSON.parse(localStorage.getItem(key)));

         
    }

    data.all_price = document.querySelector("#all-price").innerHTML;
    return data;
    
}

function ShowPopUp(){
    let shadow = document.querySelector('.shadow-back');
    shadow.classList.toggle('hide');
    
    let popUp = document.querySelector('.order-window');
    popUp.classList.toggle('hide');
}


function renderFromLS(){

    let list = document.querySelector('.products');

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
      
        list.appendChild(buildElement(JSON.parse(localStorage.getItem(key)), key));
         
    }

}

function changePrice(product, price){
    price.innerHTML = product.count * product.price;
    price.innerHTML = price.innerHTML + "₽";

    all_price.innerHTML = "0₽";
    let all_price_ = 0;

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);

        let c_product = JSON.parse(localStorage.getItem(key))
        all_price_ = all_price_ + (c_product.count * c_product.price);


        
    }

    all_price.innerHTML = all_price_ + "₽";
}

function add_btn_click(obj, product){
    let count = obj.parentElement.querySelector("p");
    count.innerHTML = parseInt(count.innerHTML) + 1;
    product.count = product.count + 1;

    let key = obj.parentElement.parentElement.id;
    localStorage.setItem(key, JSON.stringify(product));

    let price = obj.parentElement.parentElement.querySelector("#price");
    
    changePrice(product, price);


};

function remove_btn_click(obj, product){
    
    let count = obj.parentElement.querySelector("p");
    count.innerHTML = parseInt(count.innerHTML) - 1;
    product.count = product.count - 1;


    let key = obj.parentElement.parentElement.id;
    if(product.count <= 0){
        localStorage.removeItem(key);
        obj.parentElement.parentElement.remove();
    }
    else{
        localStorage.setItem(key, JSON.stringify(product));
    }


    let price = obj.parentElement.parentElement.querySelector("#price");
    
    changePrice(product, price);

    toggleOrderBtnVisibility();
    

};


function buildElement(product, key){

    let el = document.createElement("div");
    el.classList = "row product align-items-center";
    el.id = key;

    let img = document.createElement("img");
    img.src = product.img

    let p = document.createElement("p");
    p.innerHTML = product.name;
    p.classList = "col-3";

    let price = document.createElement("p");
    price.classList = "col-3";
    price.id = "price";
    changePrice(product, price);

    let product_count = document.createElement("div");
    product_count.classList = "product-count col-3";

    let add_btn = document.createElement("button");
    add_btn.classList = "add-btn";
    add_btn.innerHTML = "<i class='fa-solid fa-plus'></i>";
    add_btn.addEventListener('click', (event)=>{
        add_btn_click(event.currentTarget, product);
    });


    let cnt = document.createElement("p");
    cnt.innerHTML = product.count;

    let remove_btn = document.createElement("button");
    remove_btn.classList = "remove-btn";
    remove_btn.innerHTML = "<i class='fa-solid fa-minus'></i>";
    remove_btn.addEventListener('click', (event)=>{
        remove_btn_click(event.currentTarget, product);
    });
    
    product_count.appendChild(add_btn);
    product_count.appendChild(cnt);
    product_count.appendChild(remove_btn);


    el.appendChild(img);
    el.appendChild(p);
    el.appendChild(price);
    el.appendChild(product_count);

    return el;


};

function toggleOrderBtnVisibility (){
    if(localStorage.length>0){
        order_btn.style.visibility = 'visible';

        
    }else{
        order_btn.style.visibility = 'hidden';
        
    }

}

window.onload = function(){
    
    renderFromLS();
    toggleOrderBtnVisibility();
}

