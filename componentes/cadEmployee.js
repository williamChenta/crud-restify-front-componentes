Vue.component('cademp-comp', {
    template: `<div class="form" id="form">
                    <input type="hidden" name="fid" id="fid" v-model="fid">

                    <div class="lbl">
                        <label for="fnome">Nome:</label>
                    </div>
                    <div id="nome">
                        <input type="text" id="fnome" v-model="fnome">
                    </div>

                    <div class="lbl">
                        <label for="fsalario">Salario:</label>
                    </div>
                    <div id="salario">
                        <input type="number" id="fsalario" v-model="fsalario">
                    </div>

                    <div class="lbl">
                        <label for="fidade">Idade:</label>
                    </div>
                    <div id="idade">
                        <input type="number" id="fidade" min="18" max="100" v-model="fidade">
                    </div>

                    <div class="lbl">
                        &nbsp;
                    </div>
                    <div>
                        <button id="salvar" v-on:click="salvar" class="button-success pure-button">Salvar</button>
                    </div>
                </div>`
})

var form = new Vue({
    el: '#form',
    data: {
        fid: null,
        fnome: null,
        fsalario: null,
        fidade: null
    },
    methods: {
        salvar: function () {
            // salvaFunc(fid.value, fnome.value, fsalario.value, fidade.value)
            console.log(fnome.value)
        }
    }
})