<template>
  <div>
    <br>
    <div class="cards" v-if="allItens">
      <b-card  :key="i.id" v-for="i in allItens"
        :title="i.title"
        :img-src="i.src"
        :id="i.id"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        
      >
        <b-card-text> {{i.descricao}} </b-card-text>
        <b-card-text v-if=" (i.estoque) <= 2 " id="estoque">Estoque Disponível: {{ i.estoque}}</b-card-text>     
        <b-card-text v-if=" (i.estoque) >= 3 " id="disponivel">Estoque Disponível: {{ i.estoque}}</b-card-text>    
        <b-button size="sm" class="mb-2" variant="danger">
          <b-icon @click="deleteIten(i.id)" icon="trash" ></b-icon> 
        </b-button>
        <router-link
           tag="a"
           :to="{ name: 'DetalheIten', params: { id: i.id } }"
       >
        <b-button class="margemBotao" size="sm" variant="success"
          >Detalhe do Item</b-button>  
      </router-link>
         
          
      </b-card>
      
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "home",
  components: {
  },
  computed: mapGetters(["allItens"]),
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
}
</script>

<style>
.cards{
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.margemBotao{
  margin: 5px;
  float: right;
}

#estoque{
  color: red;
}

#disponivel{
  color: green;
}

</style>