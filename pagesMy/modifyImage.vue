<template>
	<view class="container">
		<u-upload
			width="210"
			height="210"
			deletable
			:fileList="fileList"
			@afterRead="afterRead"
			@delete="deletePic"
			name="1"
			:maxCount="6"
			:previewFullImage="true"
			uploadText="轮播图片"
		>
		</u-upload>
		<view style="margin: 30px auto;">
			<u-button type="primary" text="上传" @click="submitSwiper"></u-button>
		</view>
	</view>
</template>

<script>
	import { photoAdd } from '@/api/my/my.js'
	export default{
		data(){
			return{
				fileList: [],
				address: ''
			}
		},
		methods:{
			submitSwiper(){
				this.address = this.fileList.map(function(item,index){
					return item.url;
				}).join(";")
				let data = {
					address: this.address
				}
				photoAdd(data).then(res => {
					if(res.code == 200){
						uni.$u.toast('上传成功');
						setTimeout(() => {
							let pages = getCurrentPages()   // 获取页面栈
							let prePage = pages[pages.length - 2] //获取上一页
							wx.navigateBack({
								delta: 1
							})
						},500)
					}else{
						uni.$u.toast('上传失败');
					}
				})
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this['fileList'].length
				lists.map((item) => {
					this['fileList'].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this['fileList'][fileListLen]
					this['fileList'].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			// 删除图片
			deletePic(event) {
				this['fileList'].splice(0, 1);
			},
			// 上传图片
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let headers = {
						'Authorization': uni.getStorageSync('token')
					}
					uni.uploadFile({
						url:`${this.$url}/common/upload`,
						header: headers,
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							const result=JSON.parse(res.data) //最终传给的是字符串，这里需要转换格式
							 // 获取上传成功后的文件地址
							resolve(result.url)
						}
					});
				})
			}
		}
	}
</script>

<style lang="less">
	.container{
		padding: 10px;
		.u-subsection__item{
			text{
				font-size: 12px !important;
			}
		}
		.u-icon__icon{
			font-size: 13px !important;
			line-height: 13px !important;
		}
		.u-button--primary{
			width: 350rpx !important;
			height: 50px !important;
			background-color: #211C22 !important;
		}
	}
</style>