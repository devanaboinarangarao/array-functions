class array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index] ? this.data[index] : -1;
    }

    push(element) {
        this.data[this.length++] = element;
        return this.data;
    }

    pop() {
        let element = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length-- ;
        return element;
    }

    deleteAtIndex(index) {
        let element = this.data[index];
        this.shiftItems(index);
        return element;
    }

    shiftItems(index) {
        for(let i = index; i< this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

module.exports = array;