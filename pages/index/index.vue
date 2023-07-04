<template>
	<view class="content">
		<view>
			<u-swiper
				:list="bannerList"
				keyName="img"
				indicator
				previousMargin="20"
				nextMargin="20"
				indicatorMode="line"
				height="130"
				circular
			></u-swiper>
		</view>
		<view class="center-btn">
			<view class="btn btn-left" @click="toSquare()">俱乐部活动</view>
			<view class="btn btn-right" @click="toGroup()">交友群</view>
		</view>
		<view style="position: relative;">
			<view class="service" @click="openModal()">客服</view>
			<u-tabs :list="tabs" :current="current" :scrollable="false" lineColor="#ffffff" :itemStyle="{display:'flex',justifyContent:'start'}" @change="tabChange"></u-tabs>
			<view v-if="current == 0">
				<scroll-view v-if="dataList.length > 0" scroll-y>
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i" @click="toDetail(item.id)">
							<image :src="item.squareImagesList[0]"></image>
							<view style="padding: 8px;">
								<view style="font-size: 28rpx;">{{item.nickName}}</view>
								<view style="display: flex; margin: 10px 0;font-size: 28rpx;">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text style="margin-left: 4px;">{{item.age}}岁</text>
									</view>
									<view>
										<text>月薪</text>
										<text style="margin-left: 4px;">{{item.monthlyPay}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="current == 1">
				<scroll-view v-if="dataList.length > 0">
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i" @click="toDetail(item.id)">
							<image style="width:336rpx;height:260rpx;" :src="item.squareImagesList[0]"></image>
							<view style="padding: 8px;">
								<view style="font-size: 28rpx;">{{item.nickName}}</view>
								<view style="display: flex; margin: 10px 0;font-size: 28rpx;">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text style="margin-left: 4px;">{{item.age}}岁</text>
									</view>
									<view>
										<text>月薪</text>
										<text style="margin-left: 4px;">{{item.monthlyPay}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="current == 2">
				<scroll-view v-if="dataList.length > 0">
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i" @click="toDetail(item.id)">
							<image style="width:336rpx;height:260rpx;" :src="item.squareImagesList[0]"></image>
							<view style="padding: 8px;">
								<view style="font-size: 28rpx;">{{item.nickName}}</view>
								<view style="display: flex; margin: 10px 0;font-size: 28rpx;">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text style="margin-left: 4px;">{{item.age}}</text>
									</view>
									<view>
										<text>月薪</text>
										<text style="margin-left: 4px;">{{item.monthlyPay}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="dataList.length == 0" class="no-data">
				<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png"></u-empty>
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
	</view>
</template>

<script>
	import { getList } from '@/api/admin/index'
	let that
	export default {
		data() {
			return {
				bannerList: [{
					img: require("../../static/swiper1.jpg")
				},{
					img: require("../../static/swiper2.jpg")
				},{
					img: require("../../static/swiper3.jpg")
				}],
				tabs:[
					{
						name: '男生',
					}, {
						name: '女生',
					}, {
						name: '精英圈'
					}
				],
				current: 0,
				page: 1,
				dataList:[],
				show:false,
				title: '添加客服微信',
			}
		},
		onLoad() {
			that = this
		},
		onShow(){
			that.loadData(that.current+1);
		},
		methods: {
			loadData(index){
				let data = {
					sex: index,
					state: 1,
					pageNum: that.page,
					pageSize: 10
				}
				getList(data).then(res => {
					that.dataList = res.rows;
				})
			},
			tabChange(e){
				that.current = e.index;
				that.loadData(that.current+1);
			},
			toDetail(id){
				uni.navigateTo({
					url: '/pagesIndex/personnelDetails?id=' + id
				})
			},
			openModal(){
				that.show = true
			},
			toSquare(){
				uni.switchTab({
					url: '/pages/square/square'
				})
			},
			toGroup(){
				uni.navigateTo({
					url: '/pagesIndex/friendGroup'
				})
			},
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
			}
		}
	}
</script>

<style lang="less">
	@import url("index.less");
</style>
