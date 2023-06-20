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
				<scroll-view>
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i" @click="toDetail()">
							<image style="width:336rpx;height:260rpx;border-radius: 8px 8px 0 0;" :src="item.img"></image>
							<view style="padding: 0 6px;">
								<view>{{item.name}}</view>
								<view style="display: flex; margin: 10px 0;">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text>{{item.age}}</text>
									</view>
									<view>
										<text>月薪</text>
										<text>{{item.money}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="current == 1">
				<scroll-view>
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i">
							<image style="width:336rpx;height:260rpx;" :src="item.img"></image>
							<view>
								<view>{{item.name}}</view>
								<view style="display: flex; margin: 10px 0;">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text>{{item.age}}</text>
									</view>
									<view>
										<text>月薪</text>
										<text>{{item.money}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-if="current == 2">
				<scroll-view>
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i">
							<image style="width:336rpx;height:260rpx;" :src="item.img"></image>
							<view>
								<view>{{item.name}}</view>
								<view style="display: flex; margin: 10px 0;">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text>{{item.age}}</text>
									</view>
									<view>
										<text>月薪</text>
										<text>{{item.money}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
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
	</view>
</template>

<script>
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
				dataList:[{
					 img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					 name: '张三',
					 age: '30',
					 money: '10k'
					},{
					 img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					 name: '张三',
					 age: '30',
					 money: '10k'
					},{
					 img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					 name: '张三',
					 age: '30',
					 money: '10k'
					},{
					 img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					 name: '张三',
					 age: '30',
					 money: '10k'
					}
				],
				show:false,
				title: '添加客服微信',
			}
		},
		onLoad() {
			that = this
		},
		methods: {
			tabChange(e){
				
			},
			toDetail(){
				uni.navigateTo({
					url: '/pagesIndex/personnelDetails'
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
			}
		}
	}
</script>

<style lang="less">
	@import url("index.less");
</style>
