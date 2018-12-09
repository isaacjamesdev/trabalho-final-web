module.exports = function Cart(oldCart){
    this.items = oldCart.items;
    this.totalQty = oldCart.qty;
    this.totalPrice = oldCart.totalPrice;

    this.add = (item, id)=>{
        var storedItem = this.items[id];
        if(!storedItem)
            storedItem = this.items[id] = {item:item, qty:0, price:0};
        storedItem.qty++;
        storedItem.Price = totalPrice * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.price
    }

    this.generateArray = ()=>{
        var arr = [];
        for (let id in this.items) 
            arr.push(this.items[id]);
        return arr;
    }
};