import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesViews } from "../views/negociacoes-views.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesViews = new NegociacoesViews("#negociacaoViews");
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesViews.update(this.negociacoes);
    }
    ;
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Negociações só são permitidas em dias úteis");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesViews.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
