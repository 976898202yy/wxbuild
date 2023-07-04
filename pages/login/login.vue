<template>
	<view class="content">
		<view class="login-top">
			<view class="login-top-title">需要您的授权</view>
			<view class="login-top-center">
				<view>为了提供更好的服务</view>
				<view>请在稍后的提示框中点击“允许”</view>
			</view>
			<image style="width:100%;text-align: center;" src="../../static/authorized.png" width="80px" height="80px"></image>
			<button class="login-btn" open-type="getUserInfo" @tap="wxLogin()">我知道了</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			wxLogin(){
				uni.getUserProfile({
					desc: 'weixin',
					success: (obj) => {
						uni.login({
							provider: 'weixin',
							success: (res) => {
								let code = res.code;
								let headers = {
									'Authorization': 'eyJhbGciOiJIUzUxMiJ9',
									'content-type': 'application/x-www-form-urlencoded'
								}
								uni.request({
									url: `${this.$url}/wxlogin`,
									method: 'POST',
									header: headers,
									data: {
										code: code,
										rawData: obj.rawData,
										encrypteData: obj.encryptedData,
										iv: obj.iv
									},
									success: (res) => {
										uni.setStorageSync('token', res.data.token);
										uni.setStorageSync('userInfo', res.data.user.user);
									    uni.setStorageSync('viptime', res.data.vipEndTime);   // 会员时间
										uni.setStorageSync('personalInfoId', res.data.personalInfoId);  //个人id
										uni.switchTab({
											url:"../index/index"
										})
									}
								})
							},
						});
					},
					fail: () => {
						uni.showToast({
							title: '授权已取消',
							icon: 'error',
							mask: true,
						});
					}
				});
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #919191;
	}
	.login-top{
		background-color: #FFFFFF;
		margin: 34% 27.5px;
		border-radius: 8px;
		padding: 20px 0;
		.login-top-title{
			text-align: center;
			font-size: 36rpx;
			color: #434343;
		}
		.login-top-center{
			padding: 30px 0;
			text-align: center;
			font-size: 34rpx;
			color: #434343;
		}
	}
	.login-btn{
		border-radius: 25px;
		margin: 0 30px;
		background-color: #0FBE0F;
		color: #FFFFFF;
		font-size: 28rpx;
	}
</style>