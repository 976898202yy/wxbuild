<template>
	<view class="container">
		<scroll-view>
			<view style="border:1px solid #999;">
				<view class="list-box" v-for="(item, i) in list" :key="i" @click="toDetail()">
					<view style="font-size: 28rpx;">
						<text style="margin-right: 30px;">昵称</text>
						<text>{{item.name}}</text>
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[{
					name: "zzzzz"
				},{
					name: "zzzzz"
				},{
					name: "zzzzz"
				},{
					name: "zzzzz"
				},{
					name: "zzzzz"
				}]
			}
		},
		onLoad() {
			
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					url: '/pagesMy/auditDetails'
				})
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
	}
</style>