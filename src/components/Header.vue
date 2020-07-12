<template>
    <div class="main">
        <div class="Header">
            <div class="layout"></div>
        </div>
        <div class="container">
            
            <a href="./index.html"><h1 class="logo">Cartoon Time</h1></a>
            <div class="about">
                Cartoons can take us to different worlds, times and dimensions, all without ever leaving the couch. Get ready for laughs, adventure and loads of fun!
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
    methods:{
        
    }
}
</script>

<style lang='css'>
    .Header{
        background: url('../assets/header.jpg') center center  no-repeat;
        background-attachment: fixed;
        background-size: cover;
        height: 400px;
        position: relative;
    }
    .layout{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--transparent-color);
    }
    .main{background-color: #CDDC39;}
    .main h1{
        color: var(--alt-color);
        font-family: 'Righteous', cursive;
        font-weight: 700;
        font-size: 5em;
        display: inline-block;
        transition: 0.5s;
    }

    .main h1:hover{color: var(--transparent-color)}

    .main .about{
        width: 75%;
        font-size: 1.5em;
        font-family: 'Barlow', sans-serif;
        border-radius: 5px;
        padding: 10px;
    }
    @media(max-width: 960px){
        .main .about{
            width: 100%;
        }
        .main h1{
            font-size: 4em
        }
    }
    @media(max-width: 570px){
        .main h1{
            font-size: 3.2em
        }
    }
    
</style>
