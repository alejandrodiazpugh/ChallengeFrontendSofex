<script lang="ts" setup>
import { TData } from '../types/types';
import fetchData from '../helpers/fetchData';
import Card from './Card.vue';

const url = 'https://jsonplaceholder.typicode.com/users'; // Para propositos de la prueba pongo el URL aqui
const data: TData[] = await fetchData(url);

// mapear imagenes a cada usuario - idealmente la data ya vendria con la referencia a la imagen para cada usuario.
const images = [
	'004-LUGO.png',
	'009-FABIAN.png',
	'011-MANUEL.png',
	'016-VICTORIA.png',
	'027-ALEXIS.png',
	'028-JAIR.png',
	'034-KEREN.png',
	'035-EUGENIO.png',
	'037-MAURICIO.png',
	'038-RUT.png',
	'039-DANIEL.png',
	'040-RASHID.png',
];
const backgroundImgs = ['cover1.jpg', 'cover2.jpg','cover3.jpg','cover4.jpg','cover5.jpg','cover6.jpg','cover7.jpg','cover8.jpg','cover9.jpg','cover10.jpg', ]

data.forEach((user, index) => {
    user.profile = images[index]
    user.background = backgroundImgs[index]
})

</script>

<template>
	<section class="card-section">
		<Card
			v-for="user in data"
			:key="user.id"
            :profile="(user.profile as string)"
            :background="(user.background as string)"
			:name="user.name"
			:email="user.email"
			:phone="user.phone"
			:address="user.address"
		/>
	</section>
</template>

<style scoped>
.card-section {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(23.25rem, 1fr));
	row-gap: 4.75rem;
    column-gap: 10px;
	align-items: center;
	justify-content: center;
    padding-block-end: 2rem;
}
</style>
