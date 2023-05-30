<template>
	<view class="container">
		<view class="my-top">
			<view class="left">
				<image src="../../static/logo.png" mode=""></image>
				<view>微信号</view>
			</view>
			<view style="margin-right: 20px;">季度会员</view>
		</view>
		<view class="my-list">
			<view class="list-top">线下俱乐部会员</view>
			<view class="my-list-item"></view>
			<view class="my-list-item" @click="toEdit()">我的信息</view>
			<view class="my-list-item" @click="show = true">我的客服</view>
			<view class="my-list-item" @click="toAudit()">基本信息审核</view>
			<view class="my-list-item" @click="toEvent()">活动发布</view>
		</view>
		<view>
			<u-modal :show="show" :title="title" confirmText="我知道了" confirmColor="#EFC439" @confirm="() => show = false">
				<image
					style="width: 220px;height: 220px;"
					src="/static/erweima.png"
				></image>
			</u-modal>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show: false,
				title: '添加客服微信',
			}
		},
		onLoad() {
			
		},
		methods:{
			toEdit(){
				uni.navigateTo({
					url: '/pages/my/edit'
				})
			},
			toAudit(){
				uni.navigateTo({
					url: '/pages/my/audit'
				})
			},
			toEvent(){
				uni.navigateTo({
					url: '/pages/my/eventRelease'
				})
			}
		}
	}
</script>

<style lang="less">
	.container{
		padding: 20px;
		.my-top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				align-items: center;
			}
			image{
				width: 80px;
				height: 80px;
				border-radius: 50%;
				margin-right: 20px;
			}
		}
		.my-list{
			margin: 40px auto;
			border: 1px solid #999;
			position: relative;
			.my-list-item{
				height: 50px;
				border-bottom: 1px solid #999;
				line-height: 50px;
				padding-left: 16px;
				font-size: 28rpx;
			}
			.my-list-item:last-child{
				border-bottom: none;
			}
			.list-top{
				border: 1px solid #999;
				height: 70px;
				line-height: 70px;
				padding-left: 16px;
				font-size: 28rpx;
				position: absolute;
				background-color: #FFF;
				position: absolute;
				top: -34px;
				left: 16px;
				right: 16px	;
			}
		}
	}
</style>