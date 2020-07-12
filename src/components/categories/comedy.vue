<template>
    <div class="slider_comedy">
        <div class="main-cont container" >
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(movie, i) in filtered_Comedy" :key="i">
                    <router-link to="">
                        <img class="single-movie" :src="movie.img">
                        <div class="title">{{movie.title}}</div>
                        <p></p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    computed:{
        filtered_Comedy(){
            return this.$store.getters.Comedy_List
        }
    }
}
</script>

<style scoped>

    .slider_comedy{
        background: url('../../assets/comedy/bg-comedy.jpg');
        background-size: cover;
        background-attachment: scroll;
    }
    .slider_comedy .main-cont{
        padding-top: 40px;
    }
    .slider_comedy .single-movie{
        display: block;
        background-size: contain;
        border: 1px solid #fff;
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
    }
    .slider_comedy .single-movie img{width: 100%}
    .slider_comedy .main-cont .title{
        margin: 20px auto;
        border: 1px solid #fff;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background-color: var(--alt-color);
        border-radius: 5px;
        font-family: 'Lacquer', sans-serif;
        font-size: 1.5em;
        transition: 0.5s;
    }
    .slider_comedy .main-cont a{
        text-decoration: none;
    }
    .slider_comedy .main-cont .title:hover, .slider_comedy .main-cont img:hover ~ .title{
        background-color: var(--trd-color);
    }
</style>


