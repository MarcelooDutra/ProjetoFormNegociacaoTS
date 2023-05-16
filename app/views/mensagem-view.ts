import { View } from "./view.js";

export class MensagemView extends View<string> {

   protected template(modal: string): string{
        return `<p class="alert alert-info">${modal}</p>`;
    }
}