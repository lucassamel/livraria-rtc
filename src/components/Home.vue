<template>
  <div>
    <br />
    <div class="cards" v-if="livros.length > 0">
      <b-card
        v-for="livro in livros"
        :key="livro.id"
        :title="livro.nome"
        :id="i.id"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text> {{ livro.descricao }} </b-card-text>
        <b-card-text v-if="livro.estoque <= 2" id="estoque"
          >Estoque Disponível: {{ livro.estoque }}</b-card-text
        >
        <b-card-text v-if="livro.estoque >= 3" id="disponivel"
          >Estoque Disponível: {{ livro.estoque }}</b-card-text
        >
        <b-button size="sm" class="mb-2" variant="danger">
          <b-icon @click="deleteIten(livro.id)" icon="trash"></b-icon>
        </b-button>
        <router-link
          tag="a"
          :to="{ name: 'DetalheIten', params: { id: livro.id } }"
        >
          <b-button class="margemBotao" size="sm" variant="success"
            >Detalhe do Item</b-button
          >
        </router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
//import config from "../config/config";
import axios from "axios";

/*import { mapGetters, mapActions } from "vuex";
 */

export default {
  name: "home",
  components: {},
  data() {
    return {
      livros: [],
    };
  },
  created() {
    axios.get('http://localhost:61303/api/livros').then((response) => {
      this.livros = response.data
    });
  },
  /**computed: mapGetters(["allItens"]),
  created() {
    this.getItens();
  },

  methods:{
    ...mapActions(["getItens", "deleteIten"]),

    editar() {
      this.$router.push({ name: 'editarIten' });
    },
    detalheIten() {
      this.$router.push({ name: 'DetalheIten' });
    }
  }
  */
};
</script>

<style>
.cards {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.margemBotao {
  margin: 5px;
  float: right;
}

#estoque {
  color: red;
}

#disponivel {
  color: green;
}
</style>
