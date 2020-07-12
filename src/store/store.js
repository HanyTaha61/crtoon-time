import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        search_word: '',
        action_movies:[
            {
                title: 'Trollhunters: Tales of Arcadia',
                img: './src/assets/action/trollhunters.jpg'
            },
            {
                title: 'Dragons: Race to the Edge',
                img: './src/assets/action/Dragons-race-to-the-edge.jpg'
            },
            {
                title: 'Shrek\'s Swamp Stories',
                img: './src/assets/action/shrek.jpg'
            },
            {
                title: 'Kung Fu Panda: Awesome Secrets',
                img: './src/assets/action/kung-fu-panda.jpg'
            } 
            ,
            {
                title: 'Batman & Robin',
                img: './src/assets/action/batman-robin.jpg'
            },  
            {
                title: 'She-Ra',
                img: './src/assets/action/she-ra.jpg'
            },
            {
                title: 'Dragon Prince',
                img: './src/assets/action/dragon-prince.jpg'
            },
            {
                title: 'Tintin',
                img: './src/assets/action/tintin.jpg'
            }              
        ],
        education_movies:[
            {
                title: 'Beat Bugs',
                img: './src/assets/education/Beat Bugs.jpg'
            },
            {
                title: 'Bo on the go',						
                img: './src/assets/education/Bo on the go.jpg'
            },
            {
                title: 'Charlie',						
                img: './src/assets/education/Charlie.jpg'
            },
            {
                title: 'Daniel',						
                img: './src/assets/education/Daniel.jpg'
            } 
            ,
            {
                title: 'Floogals',						
                img: './src/assets/education/Floogals.jpg'
            },  
            {
                title: 'Justin Time',						
                img: './src/assets/education/Justin Time.jpg'
            },
            {
                title: 'Llama',						
                img: './src/assets/education/Llama.jpg'
            }
        ],
        comedy_movies:[
            {
                title: 'Doraemon',
                img: './src/assets/comedy/doraemon.png'
            },
            {
                title: 'Gumball',						
                img: './src/assets/comedy/gambol.jpg'
            },
            {
                title: 'Looney Tunes',						
                img: './src/assets/comedy/looney tunes.jpg'
            },
            {
                title: 'Masha',						
                img: './src/assets/comedy/masha.jpg'
            } 
            ,
            {
                title: 'Pink Panther',						
                img: './src/assets/comedy/pink panther.png'
            },  
            {
                title: 'Shrek2',						
                img: './src/assets/comedy/shrek2.jpg'
            },
            {
                title: 'Tom and Jerry',						
                img: './src/assets/comedy/tom-and-jerry.jpg'
            }
        ],
        sport_movies:[
            {
                title: 'Bey Battle',
                img: './src/assets/sport/bey battle.jpg'
            },
            {
                title: 'Football Champions',						
                img: './src/assets/sport/ball champs.jpg'
            },
            {
                title: 'Let\'s Go!',						
                img: './src/assets/sport/sabeq wa laheq.jpeg'
            },
            {
                title: 'Captain Majed',						
                img: './src/assets/sport/captain Majed.jpg'
            }
        ]
    },
    getters:{
        Action_List(state){
            return state.action_movies.filter((movie) =>{
                return movie.title.toLowerCase().match(state.search_word.toLowerCase())
            })
        },
        Education_List(state){
            return state.education_movies.filter((movie) =>{
                return movie.title.toLowerCase().match(state.search_word.toLowerCase())
            })
        },
        Comedy_List(state){
            return state.comedy_movies.filter((movie) =>{
                return movie.title.toLowerCase().match(state.search_word.toLowerCase())
            })
        },
        Sport_List(state){
            return state.sport_movies.filter((movie) =>{
                return movie.title.toLowerCase().match(state.search_word.toLowerCase())
            })
        },        
    },
    mutations:{
        reset_search(){
            let target = document.getElementById('search')
            return console.log(target.innerHTML)
        }
    },
    actions:{
        reset_search({commit}){
            return commit('reset_search')
        }
    }
})
