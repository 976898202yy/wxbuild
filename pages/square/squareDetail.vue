<template>
	<view class="detail">
		<view class="img-top">
			<image :src="info.img1" mode=""></image>
			<image :src="info.img1" mode=""></image>
			<image :src="info.img1" mode=""></image>
		</view>
		<view class="form">
			<u-form labelPosition="left" :model="info">
				<u-form-item label="活动名称" labelWidth="140" prop="info.name" borderBottom>
					<u--input v-model="info.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="开始时间" labelWidth="140" prop="info.time" borderBottom>
					<u--input v-model="info.time" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="非会员价" labelWidth="140" prop="info.noVip" borderBottom>
					<u--input v-model="info.noVip" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
					<view class="margin-l" slot="right">元</view>
				</u-form-item>
				<u-form-item label="会员价" labelWidth="140" prop="info.vip" borderBottom>
					<u--input v-model="info.vip" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
					<view class="margin-l" slot="right">元</view>
				</u-form-item>
				<view style="padding: 12px 0;">
					<text style="font-size: 15px;color: #303133;margin: 6px 0;">活动简介</text>
					<view>
						<u--textarea
							v-model="info.content"
							disabled
							autoHeight
						></u--textarea>
					</view>
				</view>
			</u-form>
		</view>
		<view style="margin-top: 60px;">
			<u-button type="primary" text="报名" @click="toForm()"></u-button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				info:{
					img1: 'https://cdn.uviewui.com/uview/goods/1.jpg',
					name: '羽毛球',
					time: '2023-5-1',
					noVip: '200',
					vip: '100',
					content: '这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩这个活动超级好玩'
				}
			}
		},
		onLoad() {
			
		},
		methods:{
			toForm(){
				uni.navigateTo({
					url: '/pages/square/form'
				})
			}
		}
	}
</script>

<style lang="less">
	.detail{
		padding: 10px;
		.img-top{
			display: flex;
			justify-content: space-between;
			image{
				width: 115px;
				height: 115px;
			}
		}
		.form{
			// box-shadow: 0px 2px 4px 0px #dad2d2fa;
			margin: 14px 0;
			padding: 10px;
			border-radius: 8px;
			border: 1px solid #dad2d2fa;
		}
		.margin-l{
			margin-left: 20px;
		}
		.u-textarea--disabled{
			background-color: #FFF !important;
			padding: 10px 0 !important;
		}
		.u-button--primary{
			width: 350rpx !important;
			height: 50px !important;
			background-color: #211C22 !important;
		}
	}
</style>