<template>
	<view class="container">
		<view class="my-top">
			<view class="top">
				<view class="left">
					<image :src="userInfo.avatar" mode="aspectFill"></image>
					<view>{{userInfo.nickName}}</view>
				</view>
				<view v-if="vipTime != 0" style="color: #D9001B;">会员{{vipTime}}到期</view>
			</view>
			<view class="vip-img-box">
				<image class="vip-img" src="../../static/vip.jpg" @click="toClub()"></image>
			</view>
		</view>
		<view class="my-list">
			<view class="my-list-item" @click="toEdit()">
				<view class="list-item-left">
					<image style="width: 30px;height: 30px;" src="../../static/info.png" mode="widthFix"></image>
					<text>我的信息</text>
				</view>
				<u-icon name="arrow-right" color="#666666" size="30"></u-icon>
			</view>
			<view class="my-list-item" @click="show = true">
				<view class="list-item-left">
					<image style="width: 30px;height: 30px;" src="../../static/service.png" mode="widthFix"></image>
					<text>我的客服</text>
				</view>
				<u-icon name="arrow-right" color="#666666" size="30"></u-icon>
			</view>
			<view v-if="isSystem == 1" class="my-list-item" @click="toAudit()">
				<view class="list-item-left">
					<image style="width: 30px;height: 30px;" src="../../static/square.png" mode="widthFix"></image>
					<text>基本信息审核</text>
				</view>
				<u-icon name="arrow-right" color="#666666" size="30"></u-icon>
			</view>
			<view v-if="isSystem == 1" class="my-list-item" @click="toEvent()">
				<view class="list-item-left">
					<image style="width: 30px;height: 30px;" src="../../static/square.png" mode="widthFix"></image>
					<text>活动发布</text>
				</view>
				<u-icon name="arrow-right" color="#666666" size="30"></u-icon>
			</view>
			<view v-if="isSystem == 1" class="my-list-item" @click="toGroup()">
				<view class="list-item-left">
					<image style="width: 30px;height: 30px;" src="../../static/square.png" mode="widthFix"></image>
					<text>交友群发布</text>
				</view>
				<u-icon name="arrow-right" color="#666666" size="30"></u-icon>
			</view>
			<view v-if="isSystem == 1" class="my-list-item" @click="toModify()">
				<view class="list-item-left">
					<image style="width: 30px;height: 30px;" src="../../static/square.png" mode="widthFix"></image>
					<text>系统图片上传</text>
				</view>
				<u-icon name="arrow-right" color="#666666" size="30"></u-icon>
			</view>
		</view>
		<view>
			<u-modal :show="show" :title="title" confirmText="我知道了" confirmColor="#EFC439" @confirm="() => show = false">
				<image
					style="width: 220px;height: 150px;"
					src="/static/erweima.png"
					:show-menu-by-longpress="true"
					mode="widthFix"
					@click="previewImage"
				></image>
			</u-modal>
		</view>
		<view>
			<u-modal :show="showInfo" :closeOnClickOverlay="true" showCancelButton content="您尚未完善个人信息,请轻触'立即完善'开始提交信息." confirmText="立即完善" cancelText="稍后完善" confirmColor="#EFC439" @cancel="() => showInfo = false" @confirm="confirm"></u-modal>
			<u-modal :show="showResult" content="您提交的个人信息正在审核中,请耐心等待" confirmText="我知道了" confirmColor="#FEC300" @confirm="() => showResult = false"></u-modal>
		</view>
	</view>
</template>

<script>
	import { getVipInfo } from '@/api/admin/index.js'
	import { getInfoExamine } from '@/api/square/form.js'
	export default{
		data(){
			return{
				show: false,
				title: '添加客服微信',
				userInfo: {},
				vipTime: '',
				examine: '',
				showInfo: false,
				isSystem: '',
				showResult: false
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo');
			this.isSystem = uni.getStorageSync('isSystem');
			this.loadExamine();
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
				if(this.examine == 1){
					uni.navigateTo({
						url: '/pagesMy/edit'
					})
				}else if(this.examine == 0){
					this.showResult = true;
				}else{
					this.showInfo = true;
				}
			},
			confirm(){
				this.showInfo = false;
				uni.navigateTo({
					url: '/pagesSquare/form'
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
			},
			toGroup(){
				uni.navigateTo({
					url: '/pagesMy/datGroup'
				})
			},
			toModify(){
				uni.navigateTo({
					url: '/pagesMy/modifyImage'
				})
			},
			loadExamine(){
				getInfoExamine().then(res => {
					this.examine = res.msg;
				})
				getVipInfo().then(res => {
					this.vipTime = res.vipEndTime.slice(0,10); 
				})
			},
		}
	}
</script>

<style lang="less">
	@import url("my.less");
</style>