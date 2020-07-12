<template>
	<div id="app">
		<Header/>
		<navList/>
		<router-view/>
		<Footer/>
	</div>
</template>

<script>
	import Header from './components/Header'
	import navList from './components/nav-list'
	import Footer from './components/footer'
	export default{
		data(){
			return{

			}
		},
		components:{Header,navList,Footer}
	}

	window.onscroll = function(){

		let target = document.getElementById('categories')

		if(window.pageYOffset > 600){
			target.style.position = 'fixed'
			target.style.width = '100%'
			target.style.top = '0'
			target.style.zIndex = '1'
		}

		else{
			target.style.position = 'static'
		}		
	}
</script>

<style>
	body{
		--transparent-color: #7700ff2c;
		--alt-color: #4b1b7b;
		--trd-color: #e100ff;
		--categories-bg-color: #F44336;
	}
</style>
