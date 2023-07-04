<template>
	<view class="container">
		<view class="my-top">
			<view class="top">
				<view class="left">
					<image :src="userInfo.avatar" mode=""></image>
					<view>{{userInfo.nickName}}</view>
				</view>
				<view style="margin-right: 20px;color: #D9001B;">季度会员</view>
			</view>
			<view style="text-align: center;">
				<image class="vip-img" src="../../static/vip.jpg" mode="widthFix" @click="toClub()"></image>
			</view>
		</view>
		<view class="my-list">
			<view class="my-list-item" @click="toEdit()">
				<image style="width: 50px;height: 50px;" src="../../static/info.png" mode="widthFix"></image>
				<text>我的信息</text>
			</view>
			<view class="my-list-item" @click="show = true">
				<image style="width: 50px;height: 50px;" src="../../static/service.png" mode="widthFix"></image>
				<text>我的客服</text>
			</view>
			<view class="my-list-item" @click="toAudit()">
				<image style="width: 50px;height: 50px;" src="../../static/square.png" mode="widthFix"></image>
				<text>基本信息审核</text>
			</view>
			<view class="my-list-item" @click="toEvent()">
				<image style="width: 50px;height: 50px;" src="../../static/square.png" mode="widthFix"></image>
				<text>活动发布</text>
			</view>
		</view>
		<view>
			<u-modal :show="show" :title="title" confirmText="我知道了" confirmColor="#EFC439" @confirm="() => show = false">
				<image
					style="width: 220px;height: 220px;"
					src="/static/erweima.png"
					:show-menu-by-longpress="true"
					@click="previewImage"
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
		},
		methods:{
			previewImage(e){
				uni.previewImage({
					// 需要预览的图片链接列表。若无需预览，可以注释urls
					urls: [e.target.src],
					// 为当前显示图片的链接/索引值
					current: e.target.src,
					// 图片指示器样式	
					indicator:'default',
					// 是否可循环预览
					loop:false,
					// 长按图片显示操作菜单，如不填默认为保存相册
					// longPressActions:{
					// 	itemList:[this.l('发送给朋友'),this.l]
					// },
					success: res => {
						console.log('previewImage res', res);
					}, 
					fail: err => {
						console.log('previewImage err', err);
					}
				});
			},
			toClub(){
				uni.navigateTo({
					url: '/pagesMy/offlineClub'
				})
			},
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