<template>
    <div class="categories" id="categories">
        <div class="container cats">
            <div>
                <b-navbar toggleable="lg" type="dark" variant="transparent">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <router-link exact to="/">Action</router-link>
                        <router-link to="/education" @click="reset_search()">Education</router-link>
                        <router-link to="/comedy">Comedy</router-link>
                        <router-link to="/sport">Sports</router-link>
                        <b-nav-form class="search">
                            <b-form-input v-model="$store.state.search_word" size="sm" class="search_box" placeholder="Search movie name ..."></b-form-input>
                        </b-nav-form>
                    </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
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

<style scoped>
.navbar-dark .navbar-toggler{
    border-color: #8b008b;
    padding: 1px;
}
.navbar-dark .navbar-toggler-icon{
    background-color: darkmagenta !important;
    border-radius: 3px;
}
    .categories{
        background-color: var(--categories-bg-color);
        margin-top: -8px;
    }

    .cats .router-link-active{
        background-color: var(--alt-color);
        color: #fff;
        border-radius: 5px;
        padding: 10px 20px;
        margin-top: 10px;
        width: 30%;
    }
    .cats a{
        margin-top: 10px;
        width: 30%;
        font-size: 1.75em;
        font-family: 'Lacquer', sans-serif;
        text-decoration: none;
        border-radius: 5px;
        color: #FFEB3B;
        text-align: center;
        margin-right: 60px;
        padding: 10px 20px;
    }

 

.search .search_box{
    width: 300px;
    font-size: 1.7rem;
    color: #8b008b;
    font-weight: bold;
}
@media (min-width: 992px) and (max-width: 1199px){
    .search .search_box{
        width: 140px;
    }
    .search .search_box::placeholder{
        font-size: 0.8rem !important;
    }
}

.search .search_box::placeholder{
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: normal;
}
</style>
