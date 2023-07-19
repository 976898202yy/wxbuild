<template>
	<view class="detail">
		<view class="img-top">
			<view class="img-item" v-for="(item,i) in info.activityImagesList" :key="i">
				<image :src="item" mode="aspectFill"></image>
			</view>
		</view>			
		<view class="form">
			<u-form labelPosition="left" :model="info">
				<view style="margin-bottom: 10px;font-weight: bold;">活动详情</view>
				<u-form-item label="活动名称:" labelWidth="180">
					<u--input v-model="info.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="left"></u--input>
				</u-form-item>
				<u-form-item label="开始时间:" labelWidth="180">
					<u--input v-model="info.beginTime" border="none" disabled disabledColor="#FFFFFF" inputAlign="left"></u--input>
				</u-form-item>
				<u-form-item label="报名人数:" labelWidth="180">
					<u--input v-model="info.people" border="none" disabled disabledColor="#FFFFFF" inputAlign="left"></u--input>
				</u-form-item>
				<u-form-item label="活动简介:" labelWidth="180" labelPosition="top">
					<u--textarea
						v-model="info.briefIntroduction"
						disabled
						autoHeight
					></u--textarea>
				</u-form-item>
			</u-form>
		</view>
		<view class="bottm-btn">
			<view style="position: relative;" v-if="vipTime == 0 && current == 0">
				<view class="btn-money">会员价¥{{info.vipPrice}}</view>
				<u-button type="primary" color="#211C22" text="加入俱乐部" @click="toClub()"></u-button>
			</view>
			<view style="position: relative;" v-if="info.registration == 0 && vipTime == 0 && current == 0">
				<view class="btn-money">非会员价¥{{info.price}}</view>
				<u-button type="default" text="立即报名" @click="signUp()"></u-button>
			</view>
			<view style="position: relative;" v-if="info.registration == 0 && vipTime != 0 && current == 0">
				<view class="btn-money">会员价¥{{info.vipPrice}}</view>
				<u-button type="default" text="立即报名" @click="signUp()"></u-button>
			</view>
			<view style="position: relative;" v-if="info.registration == 1 && current == 0">
				<u-button type="primary" color="#211C22" disabled text="已报名"></u-button>
			</view>
			<view style="position: relative;" v-if="current == 1">
				<u-button type="primary" color="#211C22" disabled text="活动已截止"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import { getSquareDetails } from '@/api/square/form.js'
	import { wxPayment } from '@/api/my/my.js'
	export default{
		data(){
			return{
				id: '',
				current: '',
				vipTime: '',
				info:{},
				orderObj:{}
			}
		},
		onLoad(option) {
			this.id = option.id;
			this.current = option.current;
		},
		onShow() {
			this.vipTime = uni.getStorageSync('viptime');
			this.loadData(this.id);
		},
		methods:{
			loadData(id){
				getSquareDetails(id).then(res => {
					this.info = res.data;
					this.info.people = "男生"+ (this.info.defaultBoy + this.info.actualEnrollmentBoy) + "人 " + "女生" + (this.info.defaultGirl + this.info.actualEnrollmentGirl) + "人";
				})
			},
			toClub(){
				uni.navigateTo({
					url: '/pagesMy/offlineClub'
				})
			},
			signUp(){
				let data
				if(this.vipTime == 0){
					data = {
						activityId: this.id,
						kind: '2',
						actualPayment: this.info.price,
						orderPrice: this.info.price 
					}
				}else{
					data = {
						activityId: this.id,
						kind: '2',
						actualPayment: this.info.vipPrice,
						orderPrice: this.info.vipPrice
					}
				}
				wxPayment(data).then(res => {
					this.orderObj = res;
					uni.requestPayment({ //下面参数为必传
						provider: 'wxpay', //支付类型
						appId: this.orderObj.appId, //小程序Appid
						timeStamp: this.orderObj.timeStamp, //创建订单时间戳
						nonceStr: this.orderObj.nonceStr,
						package: this.orderObj.package, // 订单包
						signType: 'MD5', // 加密方式统一'MD5'
						paySign: this.orderObj.paySign, // 后台支付签名返回
						success(res) { 
							uni.$u.toast('支付成功');
						},
						fail(err) {
							uni.$u.toast('支付失败');
						}
					})
				})
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #FEC300;
	}
	.detail{
		padding: 10px 0;
		.img-top{
			display: flex;
			justify-content: space-between;
			padding: 10px;
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
			padding: 20px 10px;
			border-top-left-radius: 24px;
			border-top-right-radius: 24px;
			background-color: #fff;
		}
		.margin-l{
			margin-left: 20px;
		}
		.u-form-item__body{
			padding: 4px 0 !important;
		}
		.u-textarea--disabled{
			background-color: #FFF !important;
			padding: 10px 0 !important;
		}
		.u-button--square{
			width: 340rpx !important;
			height: 50px !important;
			box-shadow: 0 2px 7px #333;
		}
		.bottm-btn{
			display: flex;
			justify-content: space-around;
			margin: 50px 0;
			.btn-money{
				width: 60px;
				line-height: 18px;
				background-color: #F9C13D;
				position: absolute;
				right: 10px;
				top: -8px;
				z-index: 99;
				text-align: center;
				border-radius: 14px;
				font-size: 18rpx;
			}
		}
	}
</style>