class ShoppingCart {
    constructor(){
        this.amt=0
        this.cardNo=undefined
    }
    setAmt(amt){}
    setCardNo(no){}
    processPurchase() {
        if(this.cardNo === undefined || !(this.amt > 0))
            return
        this.CardPrcBank1.charge(this.cardNo, this.amt)
    }
}