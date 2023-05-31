<template>
	<view class="container">
		<u-tabs :list="tabs" :current="current" :scrollable="false" lineColor="#ffffff" :itemStyle="{display:'flex',justifyContent:'start'}" @change="tabChange"></u-tabs>
		<view v-if="current == 0">
			<scroll-view>
				<view class="box">
					<view class="box-item" v-for="(item,i) in squareList" :key="i" @click="toDetail()">
						<image :src="item.img" mode=""></image>
						<view style="margin-left: 10px;line-height: 1.5;font-size: 28rpx;">
							<view>{{tabs[0].name}}</view>
							<view>{{item.content}}</view>
							<view>
								<text>报名费</text>
								<text>{{item.money}}</text>
								<text>已报名</text>
								<text>{{item.num}}</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tabs:[
					{
						name: '进行中',
					}, {
						name: '往期活动',
					}
				],
				current: 0,
				squareList:[{
					img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					content: '5.3日晚上xx活动',
					money: '300',
					num: '20'
				},{
					img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					content: '5.3日晚上xx活动',
					money: '300',
					num: '20'
				},{
					img: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					content: '5.3日晚上xx活动',
					money: '300',
					num: '20'
				}]
			}
		},
		onLoad() {
			
		},
		methods:{
			tabChange(){
				
			},
			toDetail(){
				uni.navigateTo({
					url: '/pagesSquare/squareDetail'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("square.less");
</style>