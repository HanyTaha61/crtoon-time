<template>
    <div class="slider_sport">
        <div class="main-cont container" >
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(movie, i) in filtered_Sport" :key="i">
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
        filtered_Sport(){
            return this.$store.getters.Sport_List
        }
    }
}
</script>

<style scoped>

.slider_sport{
    background: url('../../assets/sport/bg-sport.jpg');
    background-size: cover;
    background-attachment: scroll;
}
.slider_sport .main-cont{
    padding-top: 40px;
}
.slider_sport .single-movie{
    display: block;
    background-size: contain;
    border: 1px solid #fff;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
}
.slider_sport .single-movie img{width: 100%}
.slider_sport .main-cont .title{
    margin: 20px auto;
    border: 1px solid #fff;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: var(--alt-color);
    border-radius: 5px;
    font-family: 'Changa', sans-serif;
    font-size: 1.3em;
    transition: 0.5s;
}
.slider_sport .main-cont a{
    text-decoration: none;
}
.slider_sport .main-cont .title:hover, .slider_sport .main-cont img:hover ~ .title{
    background-color: var(--trd-color);
}




</style>


