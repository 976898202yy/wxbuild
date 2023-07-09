<template>
	<view class="detail">
		<view class="img-top">
			<view class="img-item" v-for="(item,i) in info.activityImagesList" :key="i">
				<image :src="item" mode=""></image>
			</view>
		</view>
		<view class="form">
			<u-form labelPosition="left" :model="info">
				<u-form-item label="活动名称" labelWidth="140" prop="info.name" borderBottom>
					<u--input v-model="info.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="开始时间" labelWidth="140" prop="info.time" borderBottom>
					<u--input v-model="info.beginTime" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="报名人数" labelWidth="140" prop="info.noVip" borderBottom>
					<u--input v-model="info.people" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<view style="padding: 12px 0;">
					<text style="font-size: 15px;color: #303133;margin: 6px 0;">活动简介</text>
					<view>
						<u--textarea
							v-model="info.briefIntroduction"
							disabled
							autoHeight
						></u--textarea>
					</view>
				</view>
			</u-form>
		</view>
		<view class="bottm-btn">
			<view style="position: relative;" v-if="vipTime == 0">
				<view class="btn-money">{{info.vipPrice}}元</view>
				<u-button type="primary" text="加入俱乐部" @click="toClub()"></u-button>
			</view>
			<view style="position: relative;" v-if="info.registration == 0">
				<view class="btn-money">{{info.price}}元</view>
				<u-button type="primary" text="立即报名" @click="signUp()"></u-button>
			</view>
			<view style="position: relative;" v-if="info.registration == 1">
				<u-button type="primary" disabled text="已报名"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import { getSquareDetails } from '@/api/square/form.js'
	export default{
		data(){
			return{
				id: '',
				vipTime: '',
				info:{}
			}
		},
		onLoad(option) {
			this.id = option.id;
		},
		onShow() {
			this.vipTime = uni.getStorageSync('viptime');
		},
		mounted() {
			this.loadData(this.id);
		},
		methods:{
			loadData(id){
				getSquareDetails(id).then(res => {
					this.info = res.data;
					this.info.people = "男生"+ this.info.defaultBoy + "人 " + "女生" + this.info.defaultGirl + "人"
				})
			},
			toClub(){
				uni.navigateTo({
					url: '/pagesMy/offlineClub'
				})
			},
			signUp(){
				
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
			.img-item{
				width: 32%;
				&:last-child:nth-child(3n + 2){
					margin-right: calc((100% - 31%) / 2);
				}
			}
		}
		.form{
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
			width: 300rpx !important;
			height: 50px !important;
			background-color: #211C22 !important;
		}
		.bottm-btn{
			display: flex;
			justify-content: space-around;
			margin-top: 60px;
			.btn-money{
				width: 60px;
				line-height: 28px;
				background-color: #F9C13D;
				position: absolute;
				right: -20px;
				top: -13px;
				z-index: 99;
				text-align: center;
				border-radius: 14px;
				font-size: 28rpx;
			}
		}
	}
</style>