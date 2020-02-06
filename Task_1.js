class Button {
    constructor() {
        this.storage = {};
    }
    addEventListener(event, func) {
        if (!this.storage[event]) this.storage[event] = [];
        this.storage[event].push(func);
    }
    click() {
        this.storage.click.forEach(func => func());
    }
    dblclick() {
        this.storage.dblclick.forEach(func => func());
    }
}

let btn = new Button();

btn.addEventListener('click', () => {
    console.log('1');
});

btn.addEventListener('dblclick', () => {
    console.log('2');
});

btn.addEventListener('click', () => {
    console.log('3');
});

btn.click();
btn.dblclick();