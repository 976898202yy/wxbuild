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
					<view class="box-item" v-for="(item,i) in squareList" :key="i" @click="toDetail(item.id, current)">
						<image :src="item.activityImagesList[0]" mode="aspectFill"></image>
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
			<scroll-view v-if="squareList.length > 0" scroll-y @scrolltolower="scrolltolower" style="height: 92vh">
				<view class="box">
					<view class="box-item" v-for="(item,i) in squareList" :key="i" @click="toDetail(item.id, current)">
						<image :src="item.activityImagesList[0]" mode="aspectFill"></image>
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
			<u-empty text="正在加载中..."></u-empty>
		</view>
		<view>
			<u-modal :show="show" :closeOnClickOverlay="true" showCancelButton content="您尚未完善个人信息,请轻触'立即完善'开始提交信息." confirmText="立即完善" cancelText="稍后完善" confirmColor="#EFC439" @cancel="() => show = false" @confirm="confirm"></u-modal>
			<u-modal :show="showResult" content="您提交的个人信息正在审核中,请耐心等待" confirmText="我知道了" confirmColor="#FEC300" @confirm="() => showResult = false"></u-modal>
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
				isLoading: false,
				examine: '',
				show: false,
				showResult: false
			}
		},
		onShow() {
			this.loadExamine();
			this.isLoading = true;
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
				this.status = 'loadmore';
				this.isLoading = true;
				this.loadData();
			},
			toDetail(id, current){
				if(this.examine == 1){
					uni.navigateTo({
						url: '/pagesSquare/squareDetail?id=' + id + '&current=' + current
					})
				}else if(this.examine == 0){
					this.showResult = true;
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
				this.isLoading = true;
				this.status = 'loadmore';
				let data = {
					activityType: this.current + 1,
					pageNum: this.page,
					pageSize: this.size
				}
				getSquareList(data).then(res => {
					setTimeout(() => {
						if(res.rows.length > 0){
							for (let i = 0; i < res.rows.length; i++) {
								this.squareList.push(res.rows[i])
							}
							if(this.page * this.size >= res.total){
								this.status = 'noMore'
							}else{
								this.status = 'loadmore'
							}
							this.isLoading = false;
						}else{
							this.squareList = [];
						}
					}, 1000)
				})
			},
			loadExamine(){
				getInfoExamine().then(res => {
					this.examine = res.msg;
				})
			},
			//   上拉加载	
			scrolltolower(){
				if(this.status == 'noMore') return
				if(this.isLoading) return
				this.page ++;
				this.loadData();
			}
		}
	}
</script>

<style lang="less">
	@import url("square.less");
</style>