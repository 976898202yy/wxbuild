<template>
	<view class="container">
		<u-tabs :list="tabs"
				:current="current" 
				:scrollable="false" 
				:itemStyle="{display:'flex',justifyContent:'start',paddingLeft:'15px',paddingRight:'15px',height:'36px'}" 
				:activeStyle="{fontWeight:'bold',color: '#333333',transform: 'scale(1.05)'}" 
				:inactiveStyle="{transform: 'scale(1)'}"
				lineColor="#333333" 
				lineHeight="6" 
				lineWidth="50" 
				@change="tabChange"
		></u-tabs>
		<view v-if="current == 0">
			<scroll-view v-if="squareList.length > 0" scroll-y @scrolltolower="scrolltolower" style="height: 92vh">
				<view class="box">
					<view class="box-item" v-for="(item,i) in squareList" :key="i" @click="toDetail(item.id)">
						<image :src="item.activityImagesList[0]" mode=""></image>
						<view style="width: 56%;margin-left: 10px;line-height: 1.5;font-size: 28rpx;">
							<view>{{tabs[0].name}}</view>
							<view>{{item.beginTime + item.name}}</view>
							<view>
								<text>报名费</text>
								<text>{{item.price}}元</text>
								<text style="margin-left: 8px;">已报名</text>
								<text>{{item.registrationsNum}}人</text>
							</view>
						</view>
					</view>
				</view>
				<u-loadmore v-if="squareList.length > 6" :status="status" loading-text="努力加载中" loadmore-text="轻轻上拉"
					nomore-text="没有更多了" line />
			</scroll-view>
		</view>
		<view v-if="current == 1">
			<scroll-view v-if="squareList.length > 0" scroll-y @scrolltolower="scrolltolower" style="height: 93vh">
				<view class="box">
					<view class="box-item" v-for="(item,i) in squareList" :key="i" @click="toDetail(item.id)">
						<image :src="item.activityImagesList[0]" mode=""></image>
						<view style="width: 56%;margin-left: 10px;line-height: 1.5;font-size: 28rpx;">
							<view>{{tabs[1].name}}</view>
							<view>{{item.beginTime + item.name}}</view>
							<view>
								<text>报名费</text>
								<text>{{item.price}}元</text>
								<text style="margin-left: 8px;">已报名</text>
								<text>{{item.registrationsNum}}人</text>
							</view>
						</view>
					</view>
				</view>
				<u-loadmore v-if="squareList.length > 6" :status="status" loading-text="努力加载中" loadmore-text="轻轻上拉"
					nomore-text="没有更多了" line />
			</scroll-view>
		</view>
		<view v-if="squareList.length == 0" class="no-data">
			<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png"></u-empty>
		</view>
		<view>
			<u-modal :show="show" :closeOnClickOverlay="true" showCancelButton content="您尚未完善个人信息,请轻触'立即完善'开始提交信息." confirmText="立即完善" cancelText="稍后完善" confirmColor="#EFC439" @cancel="() => show = false" @confirm="confirm"></u-modal>
		</view>
	</view>
</template>

<script>
	import { getSquareList, getInfoExamine } from '@/api/square/form.js'
	export default{
		data(){
			return{
				page: 1,
				size: 6,
				allPages: '',
				tabs:[
					{
						name: '进行中',
					}, {
						name: '往期活动',
					}
				],
				current: 0,
				squareList:[],
				status: 'loadmore',
				examine: '',
				show: false
			}
		},
		onShow() {
			this.loadExamine();
		},
		mounted(){
			this.squareList = [];
			this.loadData();
		},
		methods:{
			tabChange(e){
				this.current = e.index;
				this.page = 1;
				this.squareList = [];
				this.loadData();
				this.loadExamine();
			},
			toDetail(id){
				if(this.examine == 1){
					uni.navigateTo({
						url: '/pagesSquare/squareDetail?id=' + id
					})
				}else{
					this.show = true;
				}
				
			},
			confirm(){
				this.show = false;
				uni.navigateTo({
					url: '/pagesSquare/form'
				})
			},
			loadData(){
				let data = {
					activityType: this.current + 1,
					pageNum: this.page,
					pageSize: this.size
				}
				getSquareList(data).then(res => {
					if(res.rows.length > 0){
						for (let i = 0; i < res.rows.length; i++) {
							this.squareList.push(res.rows[i])
						}
						if(this.squareList.length > 0){
							this.allPages = res.totalNum;
						}else {
							this.status = 'noMore'
						}
					}else{
						this.squareList = []
					}
				})
			},
			loadExamine(){
				getInfoExamine().then(res => {
					this.examine = res.msg;
				})
			},
			//   上拉加载	
			scrolltolower(){
				if (this.page == this.allPages) {
					this.status = 'noMore'
					return
				} else{
					this.page = this.page + 1;
					this.status = 'loading';
					setTimeout(() => {
						this.loadData();
					}, 1000)
				}
			}
		}
	}
</script>

<style lang="less">
	@import url("square.less");
</style>