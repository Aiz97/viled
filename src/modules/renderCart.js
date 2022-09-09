const renderCart = () => {
    const cartWrapper = document.querySelector('.cart-wrapper')

    cartWrapper.innerHTML = ''

    if(goods.length === 0) {
        cartWrapper.insertAdjacentHTML('beforeend', `
        <div id="cart-empty">
                Ваша корзина пока пуста
        </div>
        `)
    } else {
        goods.forEach((goodsItem) => {
            cartWrapper.insertAdjacentHTML('beforeend', `
            <div class="card" data-key="${goodsItem.id}">
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${goodsItem.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
					<h5 class="card-title">${goodsItem.title}</h5>
                    <div class="card-description">${goodsItem.shoes}</div>
                    <div class="card-price">${goodsItem.price} ₸</div>
				</div>
            </div>`)
        })
    }
}

export default renderCart