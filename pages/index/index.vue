<template>
	<view class="content">
		<view>
			<u-swiper
				:list="bannerList"
				keyName="img"
				indicator
				previousMargin="20"
				nextMargin="20"
				indicatorMode="line"
				height="130"
				circular
			></u-swiper>
		</view>
		<view class="center-btn">
			<view class="btn btn-left" @click="toSquare()">俱乐部活动</view>
			<view class="btn btn-right" @click="toGroup()">交友群</view>
		</view>
		<view style="position: relative;">
			<view class="service" @click="openModal()">
				<u-icon name="server-fill" color="#fff" size="28"></u-icon>
				<text>客服</text>
			</view>
			<u-tabs :list="tabs"
					:current="current" 
					:scrollable="false" 
					:itemStyle="{display:'flex',justifyContent:'start',paddingLeft:'15px',paddingRight:'15px',height:'36px'}" 
					:activeStyle="{fontWeight:'bold',color: '#333333',transform: 'scale(1.05)'}" 
					:inactiveStyle="{transform: 'scale(1)'}"
					lineColor="#333333" 
					lineHeight="6" 
					lineWidth="40" 
					@change="tabChange"
			></u-tabs>
			<view v-if="current == 0">
				<scroll-view v-if="dataList.length > 0" scroll-y @scrolltolower="scrolltolower" style="height: 64vh">
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i" @click="toDetail(item.id,item.age)">
							<image :src="item.squareImagesList[0]" mode="aspectFill"></image>
							<view style="padding: 8px;">
								<view style="display: flex;">
									<view style="font-size: 28rpx;margin-right: 10px;">{{item.nickName}}</view>
									<u-icon name="man" color="#79CDFE" size="28"></u-icon>
								</view>
								<view class="list-item-bottom">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text style="margin-left: 4px;">{{item.age}}</text>
									</view>
									<view>
										<text>月薪</text>
										<text style="margin-left: 4px;">¥{{item.monthlyPay}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<u-loadmore v-if="dataList.length > 6" :status="status" loading-text="努力加载中" loadmore-text="轻轻上拉"
						nomore-text="没有更多了" line />
				</scroll-view>
			</view>
			<view v-if="current == 1">
				<scroll-view v-if="dataList.length > 0" scroll-y @scrolltolower="scrolltolower" style="height: 64vh">
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i" @click="toDetail(item.id,item.age)">
							<image :src="item.squareImagesList[0]" mode="aspectFill"></image>
							<view style="padding: 8px;">
								<view style="display: flex;">
									<view style="font-size: 28rpx;margin-right: 10px;">{{item.nickName}}</view>
									<u-icon name="woman" color="#FE2F25" size="28"></u-icon>
								</view>
								<view class="list-item-bottom">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text style="margin-left: 4px;">{{item.age}}</text>
									</view>
									<view>
										<text>月薪</text>
										<text style="margin-left: 4px;">¥{{item.monthlyPay}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<u-loadmore v-if="dataList.length > 6" :status="status" loading-text="努力加载中" loadmore-text="轻轻上拉"
						nomore-text="没有更多了" line />
				</scroll-view>
			</view>
			<view v-if="current == 2">
				<scroll-view v-if="dataList.length > 0" scroll-y @scrolltolower="scrolltolower" style="height: 64vh">
					<view class="boy-list">
						<view class="boy-list-item" v-for="(item, i) in dataList" :key="i" @click="toDetail(item.id,item.age)">
							<image :src="item.squareImagesList[0]" mode="aspectFill"></image>
							<view style="padding: 8px;">
								<view style="font-size: 28rpx;">{{item.nickName}}</view>
								<view class="list-item-bottom">
									<view style="margin-right: 10px;">
										<text>年龄</text>
										<text style="margin-left: 4px;">{{item.age}}</text>
									</view>
									<view>
										<text>月薪</text>
										<text style="margin-left: 4px;">{{item.monthlyPay}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<u-loadmore v-if="dataList.length > 6" :status="status" loading-text="努力加载中" loadmore-text="轻轻上拉"
						nomore-text="没有更多了" line />
				</scroll-view>
			</view>
			<view v-if="dataList.length == 0" class="no-data">
				<u-empty text="正在努力开发中..." mode="page" icon="http://cdn.uviewui.com/uview/empty/page.png"></u-empty>
			</view>
			<view>
				<u-modal :show="show" :title="title" confirmText="我知道了" confirmColor="#EFC439" @confirm="() => show = false">
					<image
						style="width: 220px;height: 150px;"
						src="/static/erweima.png"
						:show-menu-by-longpress="true"
						mode="widthFix"
						@click="previewImage"
					></image>
				</u-modal>
			</view>
		</view>
		<u-popup :show="showPopup" :round="10" mode="bottom" closeOnClickOverlay="false" overlayOpacity="0.9">
			<view class="login-top">
				<view class="login-top-title">需要您的授权</view>
				<view class="login-top-center">
					<view>为了提供更好的服务</view>
					<view>请在稍后的提示框中点击“允许”</view>
				</view>
				<image style="width:100%;text-align: center;" src="../../static/authorized.png" width="80px" height="80px"></image>
				<button class="login-btn" open-type="getUserInfo" @tap="wxLogin()">我知道了</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { getList, getPhotoList } from '@/api/admin/index'
	let that
	export default {
		data() {
			return {
				bannerList: [],
				tabs:[
					{
						name: '男生',
					}, {
						name: '女生',
					}, {
						name: '精英圈'
					}
				],
				current: 0,
				page: 1,
				allPages: '',
				status: 'loadmore',
				dataList:[],
				show:false,
				title: '添加客服微信',
				showPopup: false
			}
		},
		onLoad() {
			that = this
		},
		mounted(){
			let token = uni.getStorageSync('token');
			if(token == ''){
				this.showPopup = true;
			}else{
				this.showPopup = false;
				this.dataList = [];
				this.bannerList = [];
				that.loadData();
				this.loadSwiper();
			}
			if(this.showPopup){
				uni.hideTabBar();
			}
		},
		methods: {
			loadData(){
				let data = {
					sex: this.current + 1,
					state: 1,
					pageNum: that.page,
					pageSize: 6
				}
				getList(data).then(res => {
					if(res.rows.length > 0){
						for (let i = 0; i < res.rows.length; i++) {
							this.dataList.push(res.rows[i])
						}
						if(this.dataList.length > 0){
							this.allPages = res.totalNum;
						}else {
							this.status = 'noMore'
						}
					}else{
						this.dataList = [];
					}
				})
			},	
			loadSwiper(){
				getPhotoList().then(res => {
					let rows = res.rows[0];
					rows.addressList.forEach((item, index) => {
						this.bannerList.push({img: item});
					})
				})
			},
			tabChange(e){
				this.page = 1;
				this.dataList = [];
				that.current = e.index;
				that.loadData();
			},
			toDetail(id,age){
				uni.navigateTo({
					url: '/pagesIndex/personnelDetails?id=' + id + '&age=' + age
				})
			},
			openModal(){
				that.show = true
			},
			toSquare(){
				uni.switchTab({
					url: '/pages/square/square'
				})
			},
			toGroup(){
				uni.navigateTo({
					url: '/pagesIndex/friendGroup'
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
			},
			previewImage(e){
				uni.previewImage({
					// 需要预览的图片链接列表。若无需预览，可以注释urls
					urls: [e.target.src],
					// 为当前显示图片的链接/索引值
					current: e.target.src,
					// 图片指示器样式	
					indicator:'default',
					// 是否可循环预览
					loop:false,
					// 长按图片显示操作菜单，如不填默认为保存相册
					// longPressActions:{
					// 	itemList:[this.l('发送给朋友'),this.l]
					// },
					success: res => {
						console.log('previewImage res', res);
					}, 
					fail: err => {
						console.log('previewImage err', err);
					}
				});
			},
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
										if(res.data.code == 200){
											uni.setStorageSync('token', res.data.token);
											uni.setStorageSync('userInfo', res.data.user.user);
											uni.setStorageSync('viptime', res.data.vipEndTime);   // 会员时间
											uni.setStorageSync('personalInfoId', res.data.personalInfoId);  //个人id
											uni.setStorageSync('isSystem', res.data.isSystem);  // 0：普通用户，1:超管
											uni.showTabBar();
											this.showPopup = false;
											this.dataList = [];
											this.bannerList = [];
											that.loadData();
											this.loadSwiper();
										}else{
											uni.$u.toast(res.data.msg);
										}									
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
			},
		}
	}
</script>

<style lang="less">
	@import url("index.less");
</style>
