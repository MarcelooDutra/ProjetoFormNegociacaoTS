export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(modal) {
        const template = this.template(modal);
        this.elemento.innerHTML = template;
    }
}
