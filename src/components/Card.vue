<script lang="ts" setup>

// Declaro el tipo aqui, porque Vue tiene problema usando tipos importados para definir props
type TCard = {
    profile: string,
    background: string,
    name: string,
    email:string,
    phone: string,
    address: {
        street:string,
        suite:string,
        city:string,
        zipcode: string
    }
}

const props = defineProps<TCard>() //Para asegurar que la informacion que entra es la correcta

const address = `${props.address.street}, ${props.address.suite}, ${props.address.city}, ${props.address.zipcode}`
const profilePicture = `/images/${props.profile}`
const backgroundImg = `/images/${props.background}`
</script>

<template>
    <div class="card">
        <div class="card__header">
            <div class="background-container">
                <img class="background-image"  :src="backgroundImg" alt="">
            </div>
            <img class="profile-image" :src='profilePicture' alt="">
            <h1 class="card__name">{{ props.name }}</h1>
        </div>
            <div class="card__info">
                <div class="card__detail">
                    <img src="/images/email_black_24dp (2).svg" alt="">
                    <span>{{ props.email }}</span>
                </div>
                <div class="card__detail">
                    <img src="/images/smartphone_black_24dp.svg" alt="">
                    <span>{{ props.phone }}</span>
                </div>
                <div class="card__detail">
                    <img src="/images/fmd_good_black_24dp.svg" alt="">
                    <span>{{ address }}</span>
                </div>

            </div>
           
    </div>
</template>

<style scoped>
    .card {
        --transition: all 300ms;
        position: relative;
        background-color: white;
        justify-self: center;
        width: 23.25rem;
        box-shadow: 0px 20px 40px rgba(var(--blue-100), 0.1);
        border-radius: 14px;
        transition: var(--transition);
    }

    .card__header {
        height: 9rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .background-container {
        position: absolute;
        width: 100%;
        height: 9rem;
        border-radius: 14px 14px 0 0;
        overflow: hidden;
    }
    .card__name {
        font-size: 1.25rem;
        font-weight: bold;
        padding-inline: 1.125rem;
        padding-block-end: 15px;
        color: rgb(var(--white));
        z-index: 100;
        
    }
    .background-image {
        width: 100%;
        position: absolute;
        object-position: 0 -3rem;
        background-color: rgb(var(--blue-300));
        transition: var(--transition);
    }
    .profile-image {
        position: absolute;
        top: -90px;
        z-index: 200;
        margin: 0;
        padding: 0;
        overflow: hidden;
        transition: var(--transition);

    }

    .card__info {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-inline: 18px;
        padding-block-start: 20px;
        padding-block-end: 16px;
    }
    .card__detail {
        width: 100%;
        display: flex;
        gap: 6px;
        align-items: flex-start;
    }

   

    /*HOVER STATES*/

    .card:hover,
    .card:focus {
        box-shadow: 0px 20px 40px rgba(var(--blue-100, 0.35));
    }
    .card:hover .profile-image,
    .card:focus .profile-image
    {
        scale: 1.15;
    }
    .card:hover .background-image,
    .card:focus .background-image {
        scale: 1.15;
    }

    @media only screen and (max-width: 500px) {
        .card {
            width: 18rem;
        }
    }

</style>