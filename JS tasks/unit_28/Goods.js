class Goods {
    constructor(name, amount,image,count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(){
		// создаем div где товар будет помещаться
    let div = document.createElement('div');
    // создаем элемент с именем и добавляем в div
    let nameProduct = document.createElement('p');
    nameProduct.innerText = this.name;
    div.append(nameProduct);
    // создаем картинку
    let img = document.createElement('img');
    img.src = this.image;
    div.append(img);
    // аналогично создаете amount, count

		let amountProduct = document.createElement('p');
		amountProduct .innerText = this.amount;
		div.append(amountProduct);

		let countProduct = document.createElement('p');
		countProduct.innerHTML = this.count;
		div.append(countProduct);
    // почему не выводим здесь? Потому что мы делаем гибкий метод
    // он должен давать и наследоваться и расшираться
    return div;
	}
}

