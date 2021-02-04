<template>
  <div>
    <br>
    <div>
  <b-card>
    <b-media>
      <template #aside>
        <b-img src="src/assets/troca de livros.png" width="256" alt="livro"></b-img>
      </template>

      <h5 class="mt-0">Sobre</h5>
      <p>
        Livrando é um site do Rotaract Club de Niterói Icaraí, um grupo de jovens filiado ao Rotary Internacional 
        voltado a fazer serviços à comunidade, desenvolvimento pessoal e profissional, além de fomentar a liderança.
        Nosso intuito com o site é possibilitar, de maneira fácil e intuitiva, a troca de livros!
      </p>
      <p>
        Mais informações!
      </p>

      <b-media>
        <template #aside>
          <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0">Nested Media</h5>
        <p class="mb-0">
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
          faucibus.
        </p>
      </b-media>
    </b-media>
  </b-card>
</div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      
    }
  }
</script>