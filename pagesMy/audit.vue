<template>
	<view class="container">
		<scroll-view v-if="list.length > 0" scroll-y @scrolltolower="scrolltolower" style="height: 94vh">
			<view style="border:1px solid #999;">
				<view class="list-box" v-for="(item, i) in list" :key="i" @click="toDetail(item.id)">
					<view style="font-size: 28rpx;">
						<text style="margin-right: 30px;">昵称</text>
						<text>{{item.nickName}}</text>
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<u-loadmore v-if="list.length > 8" :status="status" loading-text="努力加载中" loadmore-text="轻轻上拉"
				nomore-text="没有更多了" line />
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
				page: 1,
				allPages: '',
				status: 'loadmore'
			}
		},
		onLoad() {
			
		},
		onShow(){
			this.page = 1;
			this.list = [];
			this.loadData();
		},
		methods: {
			loadData(){
				let data = {
					state: 0,
					pageNum: this.page,
					pageSize: 12
				}
				getList(data).then(res => {
					if(res.rows.length > 0){
						for (let i = 0; i < res.rows.length; i++) {
							this.list.push(res.rows[i])
						}
						if(this.list.length > 0){
							this.allPages = res.totalNum;
						}else {
							this.status = 'noMore'
						}
					}else{
						this.list = []
					}
				})
			},
			toDetail(id){
				uni.navigateTo({
					url: '/pagesMy/auditDetails?id=' + id
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