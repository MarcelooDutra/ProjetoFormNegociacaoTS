export abstract class View<T> {
    protected elemento!: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)!;
    }

   public update(modal: T): void {
        const template = this.template(modal);
        this.elemento.innerHTML = template
    }

   protected abstract template(modal: T): string
}