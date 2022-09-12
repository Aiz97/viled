const renderGoods = (goods) =>{
    const goodsWrapper = document.querySelector('.goods')

    localStorage.setItem('goods', JSON.stringify(goods))

    goodsWrapper.innerHTML = ''

    goods.forEach((goodsItem) => {
        goodsWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12 col-md-6 col-lg-4 col-xl-4">
			<div class="card" data-key="${goodsItem.id}">
				<div class="card-img-wrapper">
					<span class="card-img-top"
						style="background-image: url('${goodsItem.image}')"></span>
				</div>
				<div class="card-body justify-content-between">
					<h5 class="card-title">${goodsItem.title}</h5>
                    <div class="card-description">${goodsItem.shoes}</div>
                    <div class="card-price">${goodsItem.price} ₸</div>
				</div>
			</div>
        </div>`)
    })
}

export default renderGoods