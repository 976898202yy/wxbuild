<template>
	<view class="container">
		<scroll-view v-if="list.length > 0">
			<view style="border:1px solid #999;">
				<view class="list-box" v-for="(item, i) in list" :key="i" @click="toDetail(item.id)">
					<view style="font-size: 28rpx;">
						<text style="margin-right: 30px;">昵称</text>
						<text>{{item.nickName}}</text>
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</scroll-view>
		<view v-if="list.length == 0" class="no-data">
			<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png"></u-empty>
		</view>
	</view>
</template>

<script>
	import { getList } from '@/api/admin/index'
	export default{
		data(){
			return{
				list:[],
				page: 1
			}
		},
		onLoad() {
			
		},
		onShow(){
			this.loadData();
		},
		methods: {
			loadData(){
				let data = {
					state: 0,
					pageNum: this.page,
					pageSize: 10
				}
				getList(data).then(res => {
					this.list = res.rows;
				})
			},
			toDetail(id){
				uni.navigateTo({
					url: '/pagesMy/auditDetails?id=' + id
				})
			}
		}
	}
</script>

<style lang="less">
	.container{
		padding: 10px;
		.list-box{
			border-bottom: 1px solid #999;
			padding: 20px 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.list-box:last-child{
			border-bottom: none;
		}
		.no-data{
			margin-top: 30%;
			image{
				width: 150px !important;
				height: 150px !important;
			}
			.u-empty__text{
				font-size: 28rpx !important;
			}
		}
	}
</style>