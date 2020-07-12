<template>
    <div class="slider_action">
        <div class="main-cont container" >
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(movie, i) in filtered_Action" :key="i">
                    <router-link to="">
                        <img class="single-movie" :src="movie.img">
                        <div class="title text-light">{{movie.title}}</div>
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
            filtered_Action(){
                return this.$store.getters.Action_List
            }
        }
    }
</script>

<style scoped>
    .slider_action{
        background: url('../../assets/action/bg-action.jpg');
        background-size: cover;
        background-attachment: scroll;
    }
    .slider_action .main-cont{
        padding-top: 40px;
    }
    .slider_action .single-movie{
        display: block;
        background-size: contain;
        border: 1px solid #fff;
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
    }
    .slider_action .single-movie img{width: 100%}
    .slider_action .main-cont .title{
        margin: 20px auto;
        border: 1px solid #fff;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background-color: var(--alt-color);
        border-radius: 5px;
        font-family: 'Lacquer', sans-serif;
        font-size: 0.9em;
        transition: 0.5s;
    }
    .slider_action .main-cont a{
        text-decoration: none;
    }
    .slider_action .main-cont .title:hover, .slider_action .main-cont img:hover ~ .title{
        background-color: var(--trd-color);
    }
</style>>



