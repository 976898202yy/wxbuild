<template>
	<view class="container">
		<view class="my-top">
			<view class="left">
				<image :src="userInfo.avatarUrl" mode=""></image>
				<view>{{userInfo.nickName}}</view>
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
				userInfo: {}
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo');
			console.log(this.userInfo);
		},
		methods:{
			toEdit(){
				uni.navigateTo({
					url: '/pagesMy/edit'
				})
			},
			toAudit(){
				uni.navigateTo({
					url: '/pagesMy/audit'
				})
			},
			toEvent(){
				uni.navigateTo({
					url: '/pagesMy/eventRelease'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("my.less");
</style>