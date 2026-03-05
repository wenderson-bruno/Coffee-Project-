/* ----------------------Login---------------------------- */
const userLogin = document.querySelector('.login')
const user = document.querySelector('.user')
const overlay = document.querySelector('.overlay')
const btnConfirm = document.querySelector('.btn-confirm')
const btnClose = document.querySelector('.close')
const inputName = document.getElementById('input-name')
const inputEmail = document.getElementById('input-email')
/* ------------------------------------------------------ */

/* ---------------------------cart--------------------------------- */
const OpenCart = document.querySelector('.cart_add') /* iocn cart */
const sectionCart = document.querySelector('.cart') /* container */
const btn_add = document.querySelectorAll('.box-cardapio .btn') /* btn add */
const cartItems = document.querySelector('.cart-items')
const BtnCloseCart = document.querySelector('.close-cart')

const CartCount = document.querySelector('.cart-count')
const btnRemove = document.querySelector('.btn-remove')
const buttonDelete = document.querySelector('.buttonDelete')
/* ---------------------------------------------------------- */



                /* login */


/* onde tudo desaparese */
user.addEventListener('click', () => {
    userLogin.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
})

/* btn close (x) */
btnClose.addEventListener('click', () => {
    userLogin.classList.add('hidden')
    overlay.classList.add('hidden')
    document.body.classList.remove('no-scroll')

})

/* get user dado */
btnConfirm.addEventListener('click', () => {
    if (inputName.value && inputEmail.value) {
        const dados = {
            nome: inputName.value,
            email: inputEmail.value
        }

        localStorage.setItem('dados', JSON.stringify(dados))

        userLogin.classList.add('hidden')
        overlay.classList.add('hidden')
        document.body.classList.remove('no-scroll')
    } else {
        window.alert('[ERROR]')
    }
})
const dates = JSON.parse(localStorage.getItem('dados'))
if (dates) {
    inputEmail.value = dates.email
    inputName.value = dates.nome
}


/* carrinho */

/* close the cart (X) */
BtnCloseCart.addEventListener('click', () => {
    sectionCart.classList.toggle('hidden')
})

const cart_with_product = [{
      id: 1, name: 'brewed coffee', price: '$15.99', img_product: 'images/menu-1.png'},
    {id: 2, name: 'brewed coffee',  price: '$19.99', img_product: 'images/menu-2.png'},
    {id: 3, name: 'brewed coffee',  price: '$12.99', img_product: 'images/menu-3.png'},
    {id: 4, name: 'brewed coffee',  price: '$10.99', img_product: 'images/menu-4.png'},
    {id: 5, name: 'brewed coffee',  price: '$13.75', img_product: 'images/menu-5.png'},
    {id: 6, name: 'brewed coffee',  price: '$7.99', img_product: 'images/menu-6.png'},]

const cart = []

/* get product array*/
function AddCartProduct(index){
    cart.push(cart_with_product[index])
}

function upDateCart(){
    /* produtos do cart */
    cartItems.innerHTML = ''
    cart.forEach((ItensCart, index) =>{ 
        cartItems.innerHTML += `
        <div class="cart-product">
            <div>
                <img src="${ItensCart.img_product}">
            </div>
            <div>
                <p>${ItensCart.name}</p>
                <p>${ItensCart.price}</p>
                <button class="buttonDelete" date-index="${index}">delete</button>
            </div>
        </div>
        `
    })
    CartCount.textContent = cart.length
}
cartItems.addEventListener('click', (e) => {
    if(e.target.classList.contains('buttonDelete')){
        const index = e.target.dataset.index

        cart.splice(index, 1)
        upDateCart()
    }
})


/* add product on the cart */
btn_add.forEach((add, index) => {
    add.addEventListener('click', () => {
        AddCartProduct(index)
        upDateCart()
    })
}) 

/* open cart */
OpenCart.addEventListener('click', () => {
    sectionCart.classList.toggle('hidden')
})

/* button for remove list */
btnRemove.addEventListener('click', () => {
   cart.length = 0
   sectionCart.classList.toggle('hidden')
   upDateCart()

})



const scroll = new IntersectionObserver((animate) => {
    animate.forEach((animat) => {
        if(animat.isIntersecting){
            animat.target.classList.add('show')
        }else{
            animat.target.classList.remove('show')
        }
    })
})
const element = document.querySelectorAll('.section-cardapio')
element.forEach((element) => scroll.observe((element)))
