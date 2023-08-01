<script>
	export default {
		onLaunch: function() {
			try{
				const userInfo = uni.getStorageSync('userInfo');
				let headers = {
					'Authorization': 'eyJhbGciOiJIUzUxMiJ9',
					'content-type': 'application/x-www-form-urlencoded'
				}
				let data = {
					openId: userInfo.openId
				}
				if(userInfo.openId){
					uni.request({
						url: `${this.$url}/wxloginByOpenid`,
						method:'POST',
						header:headers,
						data: data,
						success:(res)=>{
							if(res.data.code == 200){
								uni.setStorageSync('token', res.data.token);
								uni.setStorageSync('userInfo', res.data.user.user);
								uni.setStorageSync('viptime', res.data.vipEndTime);   // 会员时间
								uni.setStorageSync('personalInfoId', res.data.personalInfoId);  //个人id
								uni.setStorageSync('isSystem', res.data.isSystem);  // 0：普通用户，1:超管
							}
						},
						fail: (err) => {}
					})
				}
			}catch(e){
				
			}
		},
		onShow: function() {
			wx.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
