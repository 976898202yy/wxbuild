<template>
	<view class="container">
		<view>
			<u-upload
				width="200"
				height="200"
				:fileList="fileList"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				:maxCount="3"
				:previewFullImage="true"
			>
			</u-upload>
		</view>
		<u-form labelPosition="left" :model="form" :rules="rules" ref="uForm">
			<u-form-item label="活动名称" labelWidth="150" prop="name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入活动名称"></u--input>
			</u-form-item>
			<u-form-item label="开始时间" labelWidth="150" prop="beginTime" borderBottom @click="showTime = true">
				<u--input v-model="form.beginTime" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择时间"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="非会员价" labelWidth="150" prop="price" borderBottom>
				<u--input v-model="form.price" border="none" inputAlign="right" placeholder="请输入"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<u-form-item label="会员价" labelWidth="150" prop="vipPrice" borderBottom>
				<u--input v-model="form.vipPrice" border="none" inputAlign="right" placeholder="请输入"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<view style="padding: 12px 0;">
				<text style="font-size: 15px;color: #303133;margin: 6px 0;">活动简介</text>
				<view style="border-bottom: 1px solid #EEEEEF;">
					<u--textarea
						v-model="form.briefIntroduction"
						autoHeight
						placeholder="请输入活动简介"
					></u--textarea>
				</view>
			</view>
			<view style="margin-top: 90px;">
				<u-button type="primary" text="确认发布" @click="submit()"></u-button>
			</view>
		</u-form>
		<u-datetime-picker
			:show="showTime"
			v-model="value1"
			mode="date"
			closeOnClickOverlay
			@cancel="showTime = false"
			@close="showTime = false"
			@confirm="dateConfirm"
		></u-datetime-picker>
	</view>
</template>

<script>
	import { clubAdd } from '@/api/my/my.js'
	let that
	export default{
		data(){
			return{
				fileList: [],
				date: '',
				form: {
					activityImages: '',
					name: '',
					beginTime: '',
					price: '',
					vipPrice: '',
					briefIntroduction: ''
				},
				rules: {
					'name': [{
						type: 'string',
					    required: true,
						message: '请填写名称',
						trigger: "change"
					}],
					'beginTime': [{
						type: 'string',
					    required: true,
						message: '请选择时间',
						trigger: "change"
					}],
					'price': [{
						type: 'string',
					    required: true,
						message: '请填写非会员价',
						trigger: "change"
					}],
					'vipPrice': [{
						type: 'string',
					    required: true,
						message: '请填写会员价',
						trigger: "change"
					}],
				},	
				showTime: false,
				value1: Number(new Date())
			}
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules)
		},
		onLoad() {
			that = this;
		},
		methods: {
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
					console.log(lists[i].url);
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
			},
			submit(){
				this.form.activityImages = this.fileList.map(function(item,index){
					return item.url;
				}).join(",")
				this.$refs.uForm.validate().then(res => {
					clubAdd(this.form).then(res => {
						if(res.code == 200){
							uni.$u.toast('发布成功');
							this.form = {};
							this.fileList = [];
						}else{
							uni.$u.toast('发布失败')
						}
					})
				}).catch(errors => {
					
				})
			},
			dateConfirm(e) {
				this.form.beginTime = this.result(e.value, e.mode)
				this.showTime = false
			},
			result(time, mode) {
				const timeFormat = uni.$u.timeFormat
				switch (mode) {
					case 'datetime':
						return timeFormat(time, 'yyyy-mm-dd hh:MM')
					case 'date':
						return timeFormat(time, 'yyyy-mm-dd')
					case 'year-month':
						return timeFormat(time, 'yyyy-mm')
					case 'time':
						return time
					default:
						return ''
				}
			},
		}
	}
</script>

<style lang="less">
	.container{
		padding: 10px;
		.margin-l{
			margin-left: 20px;
		}
		.u-button--primary{
			width: 350rpx !important;
			height: 50px !important;
			background-color: #211C22 !important;
		}
		.u-form-item__body{
			padding: 16px 0 !important;
		}
		.u-icon__icon{
			font-size: 13px !important;
			line-height: 13px !important;
		}
		picker-view {
			height: 190px !important;
		}
	}
</style>