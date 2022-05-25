class Goods2 extends Goods{
    constructor(name,amount,image,count,sale){
        super(name,amount,image,count);
        this.sale = sale;
    }
    draw () {
        let div = super.draw();
        if (this.sale) {
          let s = document.createElement('p');
          s.innerText = 'Распродажа';
          div.append(s);
        }
        return div;
    }
}