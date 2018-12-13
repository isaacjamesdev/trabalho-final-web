module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.qty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = (item, id)=>{
        var storedItem = this.items[id];
        if(!storedItem)
            storedItem = this.items[id] = {item:item, qty:0, price:0};
        storedItem.qty++;
        // total price item
        storedItem.Price = this.totalPrice * storedItem.qty;
        // total cart qty
        this.totalQty++;
        // total cart price
        this.totalPrice += storedItem.item.price;
    }

    this.generateArray = ()=>{
        var arr = [];
        for (let id in this.items) 
            arr.push(this.items[id]);
        return arr;
    }
};