<template>
	<view class="container">
		<scroll-view scroll-x="true" scroll-with-animation="true" class="scrollContainer"> 
			<view style="display: -webkit-inline-box;">
				<view class="vip-info">
					<view class="title">年度会员</view>
					<view class="subhead">条件及权益</view>
					<view style="color: #74500E;">
						<view>• 支付1199元/年度会员费,可免费参加俱乐部大部分活动</view>
						<view>•可以参加俱乐部一年内所有线下活动，目前每周二四晚上和每周六下午都有活动。</view>
						<view>(会员权益不含部分专场，比如研究生专场、土著专场等，需要满足条件）</view>
						<view>•注：有聚餐或者其他消费的，会员需要AA制支付费用</view>
					</view>
				</view>
				<view class="vip-info">
					<view class="title">季度会员</view>
					<view class="subhead">条件及权益</view>
					<view style="color: #74500E;">
						<view>• 支付499元/年度会员费,可免费参加俱乐部大部分活动</view>
						<view>•可以参加俱乐部一年内所有线下活动，目前每周二四晚上和每周六下午都有活动。</view>
						<view>(会员权益不含部分专场，比如研究生专场、土著专场等，需要满足条件）</view>
						<view>•注：有聚餐或者其他消费的，会员需要AA制支付费用</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view style="margin: 30px 20px;">
			<u-button type="primary" text="确认开通" color="#211C22" @click="submit()"></u-button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	.container{
		.scrollContainer{
		    white-space: nowrap;
		}
		.vip-info{
			border-radius: 10px;
			padding: 20px 20px 10px;
			background-color: #DCDCDC;
			white-space: normal;
			width: 70%;
			margin: 10px;
			.title{
				font-size: 50rpx;
				margin-bottom: 80px;
				color: #74500E;
			}
			.subhead{
				color: #73480C;
				font-size: 40rpx;
				margin-bottom: 10px;
			}
		}
	}
	
</style>