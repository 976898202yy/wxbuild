<template>
	<view class="container">
		<rich-text :nodes="article"></rich-text>
	</view>
</template>

<script>
	import { getGroupInfo } from '@/api/admin/index'
	import graceRichText from './components/rechText.js';
	export default{
		data(){
			return{
				article: ''
			}
		},
		onShow(){
			this.loadData();
		},
		methods:{
			loadData(){
				getGroupInfo().then(res => {
					this.article = res.msg;
				})
			}
		}
	}
</script>

<style lang="less">
	.container{
		padding: 20px;
	}
</style>