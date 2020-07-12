<template>
    <div class="slider_edu">
        <div class="main-cont container" >
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(movie, i) in filtered_Education" :key="i">
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
        filtered_Education(){
            return this.$store.getters.Education_List
        }
    }
}
</script>

<style scoped>
    .slider_edu{
        background: url('../../assets/education/bg-education.jpg');
        background-size: cover;
        background-attachment: scroll;
    }
    .slider_edu .main-cont{
        padding-top: 40px;
    }
    .slider_edu .single-movie{
        display: block;
        background-size: contain;
        border: 1px solid #fff;
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
    }
    .slider_edu .single-movie img{width: 100%}
    .slider_edu .main-cont .title{
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
    .slider_edu .main-cont a{
        text-decoration: none;
    }
    .slider_edu .main-cont .title:hover, .slider_edu .main-cont img:hover ~ .title{
        background-color: var(--trd-color);
    }
</style>


