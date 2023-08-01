<template>
	<view class="container">
		<scroll-view scroll-x="true" scroll-with-animation="true" class="scrollContainer">
			<view style="display: -webkit-inline-box;">
				<view class="vip-info" :class="changeId == 1 ? 'active' : ''" @click="changeIt(1)">
					<view class="title">年度会员</view>
					<view class="subhead">条件及权益</view>
					<view>
						<view>• 支付{{vipPayment}}元/年度会员费,可免费参加俱乐部大部分活动</view>
						<view>•可以参加俱乐部一年内所有线下活动，目前每周二四晚上和每周六下午都有活动。</view>
						<view>(会员权益不含部分专场，比如研究生专场、土著专场等，需要满足条件）</view>
						<view>•注：有聚餐或者其他消费的，会员需要AA制支付费用</view>
					</view>
				</view>
				<view class="vip-info" :class="changeId == 2 ? 'active' : ''" @click="changeIt(2)">
					<view class="title">季度会员</view>
					<view class="subhead">条件及权益</view>
					<view>
						<view>• 支付{{noVipPayment}}元/季度会员费,可免费参加俱乐部大部分活动</view>
						<view>•可以参加俱乐部一年内所有线下活动，目前俱乐部每周都有三场活动。</view>
						<view>(会员权益不含部分专场，比如研究生专场、土著专场等，需要满足条件）</view>
						<view>•注：有聚餐或者其他消费的，会员需要AA制支付费用</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view style="margin: 30px 20px;">
			<u-button type="primary" text="确认开通" color="#211C22" @click="wxPay(changeId)"></u-button>
		</view>
	</view>
</template>

<script>
	import { wxPayment, getVipMoney } from '@/api/my/my.js'
	export default {
		data() {
			return {
				changeId: '1',
				vipPayment: 0,
				noVipPayment: 0,
				orderObj:{}
			}
		},
		mounted() {
			this.loadData();
		},
		methods: {
			changeIt(id) {
				this.changeId = id;
			},
			loadData(){
				getVipMoney().then(res => {
					this.vipPayment = Number(res.vipYear);
					this.noVipPayment = Number(res.vipQuarter);
				})
			},
			wxPay(id) {
				let money
				if(id == 1){
					money = this.vipPayment;
				}else if(id == 2){
					money = this.noVipPayment;
				}
				let data = {
					actualPayment: money,
					kind: '1',
					orderPrice: money,
					vipType: id
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
							let pages = getCurrentPages()   // 获取页面栈
							let prePage = pages[pages.length - 2] //获取上一页
							wx.navigateBack({
								delta: 1
							})
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
	.container {
		padding: 10px;

		.scrollContainer {
			white-space: nowrap;
		}

		.vip-info {
			border-radius: 10px;
			padding: 20px 20px 10px;
			background-color: #DCDCDC;
			white-space: normal;
			width: 76%;
			margin: 10px;
			box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.5);

			.title {
				font-size: 50rpx;
				margin-bottom: 80px;
			}

			.subhead {
				font-size: 40rpx;
				margin-bottom: 10px;
			}
		}

		.active {
			color: #74500E;
			background: linear-gradient(to right bottom, #FCE399, #FAD187 70px);
			color: #74500E;
			box-shadow: 0px 0px 10px 2px #F5DAA1;
		}
	}
</style>