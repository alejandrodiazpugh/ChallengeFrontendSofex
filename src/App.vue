<script setup lang="ts">
import CardContainer from './components/CardContainer.vue';
import Layout from './components/Layout.vue';
import Loading from './components/Loading.vue';

</script>

<template>
  <Layout>
    <div class="h-1"></div> <!-- Para evitar modificar de mas el margin y padding. Usualmente seguiria la convencion de tailwind para esto, pero como solamente lo utilice dos veces lo dejo asi  -->
    <div class="title">
      <h1>Usuarios</h1>
      <div class="toggle-icons">
        <div class="list-view selected"></div>
        <div class="grid-view"></div>
      </div>
    </div>
    <div class="h-4875"></div>
    <!-- El Suspense API es experimental, pero funciona en esta version para el fetch de los datos -->
    <Suspense>
      <CardContainer />
  
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </Layout>
</template>


<style scoped> 

.title {
  color: rgb(var(--gray-300));
  width: 100%;
  padding-inline: 40px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
}
.title h1 {
  font-size: 2.81rem;
}

.toggle-icons {
  display: flex;
  width: 5.4rem;
  height: 3rem;
  align-items: center;
  border: solid 1px rgb(var(--blue-300));
  border-radius: 12px;
}

.list-view,
.grid-view {
  width: 2.75rem;
  height: 2.75rem;
  flex-basis: 100%;
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.list-view {
  background-image: url("/images/list_black_24dp.svg") ;
 
}

.grid-view {
  background-image: url("/images/grid_view_black_24dp.svg");
}

.selected {
  background-color: rgb(var(--blue-200));
  border-radius: 11px;
  outline: solid 1px rgb(var(--blue-300));
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 500px) {
  .title {
    padding-inline: 0;
    flex-direction: column;
  }
}

</style>