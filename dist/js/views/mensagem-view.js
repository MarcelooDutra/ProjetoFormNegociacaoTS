import { View } from "./view.js";
export class MensagemView extends View {
    template(modal) {
        return `<p class="alert alert-info">${modal}</p>`;
    }
}
