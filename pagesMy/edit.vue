<template>
	<view class="container">
		<view>
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
				uploadText="广场头像"
			>
			</u-upload>
		</view>
		<u-form labelPosition="left" :model="form" :rules="rules" ref="uForm">
			<u-form-item label="出生年月" labelWidth="140" prop="birthDate" borderBottom @click="showTime = true">
				<u--input v-model="form.birthDate" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择出生年月"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="昵称" labelWidth="140" prop="nickName" borderBottom>
				<u--input v-model="form.nickName" border="none" inputAlign="right" placeholder="请输入昵称"></u--input>
			</u-form-item>
			<u-form-item label="性别" labelWidth="140" prop="sex" borderBottom @click="showTypeSex = true">
				<u--input v-model="form.sexName" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择性别"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="身高" labelWidth="140" prop="height" borderBottom>
				<u--input v-model="form.height" border="none" inputAlign="right" placeholder="请输入身高"></u--input>
				<view class="margin-l" slot="right">cm</view>
			</u-form-item>
			<u-form-item label="体重" labelWidth="140" prop="weight" borderBottom>
				<u--input v-model="form.weight" border="none" inputAlign="right" placeholder="请输入体重"></u--input>
				<view class="margin-l" slot="right">kg</view>
			</u-form-item>
			<u-form-item label="手机号" labelWidth="140" prop="phonenumber" borderBottom>
				<u--input v-model="form.phonenumber" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请输入手机号"></u--input>
			</u-form-item>
			<u-form-item label="微信号(互相关注可查看)" labelWidth="340" prop="wechatId" borderBottom>
				<u--input v-model="form.wechatId" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请输入微信号"></u--input>
			</u-form-item>
			<u-form-item label="出生地" labelWidth="140" prop="birthplace" borderBottom>
				<u--input v-model="form.birthplace" border="none" inputAlign="right" placeholder="请输入出生地"></u--input>
			</u-form-item>
			<u-form-item label="户籍地" labelWidth="140" prop="domicilePlace" borderBottom>
				<u--input v-model="form.domicilePlace" border="none" inputAlign="right" placeholder="请输入户籍地"></u--input>
			</u-form-item>
			<u-form-item label="学历信息" labelWidth="140" prop="education" borderBottom>
				<u--input v-model="form.education" border="none" inputAlign="right" placeholder="请输入学历信息"></u--input>
			</u-form-item>
			<u-form-item label="毕业学校" labelWidth="140" prop="graduationSchool" borderBottom>
				<u--input v-model="form.graduationSchool" border="none" inputAlign="right" placeholder="请输入毕业学校"></u--input>
			</u-form-item>
			<u-form-item label="从事行业" labelWidth="140" prop="professial" borderBottom>
				<u--input v-model="form.professial" border="none" inputAlign="right" placeholder="请输入您从事的行业"></u--input>
			</u-form-item>
			<u-form-item label="工作地" labelWidth="140" prop="workplace" borderBottom>
				<u--input v-model="form.workplace" border="none" inputAlign="right" placeholder="请输入工作地"></u--input>
			</u-form-item>
			<u-form-item label="平均月薪" labelWidth="140" prop="monthlyPay" borderBottom>
				<u--input v-model="form.monthlyPay" border="none" inputAlign="right" placeholder="请输入月薪"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<u-form-item label="感情与婚姻状态" labelWidth="240" prop="maritalStatusDm" borderBottom @click="showType = true">
				<u--input v-model="form.maritalStatus" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择婚姻状态"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="有无子女" labelWidth="140" prop="childrenNum" borderBottom>
				<u--input v-model="form.childrenNum" border="none" inputAlign="right" placeholder="请输入子女人数,若无则填0"></u--input>
			</u-form-item>
			<u-form-item label="房产情况" labelWidth="140" prop="propertypermits" borderBottom>
				<u--input v-model="form.propertypermits" border="none" inputAlign="right" placeholder="请输入房产情况"></u--input>
			</u-form-item>
			<u-form-item label="兴趣爱好" labelWidth="140" prop="interests" borderBottom>
				<u--input v-model="form.interests" border="none" inputAlign="right" placeholder="请输入您的兴趣爱好"></u--input>
			</u-form-item>
			<view style="padding: 12px 0;">
				<text style="font-size: 15px;color: #303133;margin: 6px 0;">个人介绍</text>
				<view style="border-bottom: 1px solid #EEEEEF;">
					<u--textarea
						v-model="form.seltIntroduction"
						autoHeight
						border="surround"
						placeholder="请输入个人介绍,选填"
					></u--textarea>
				</view>
			</view>
			<view style="margin: 30px auto;">
				<u-button type="primary" text="确认信息修改并提交" color="#211C22" @click="submit(form.id)"></u-button>
			</view>
		</u-form>
		<u-datetime-picker
			:show="showTime"
			v-model="value1"
			minDate="Number(new Date('1970-01-01'))"
			:maxDate="new Date().getTime()"
			mode="date"
			closeOnClickOverlay
			@cancel="showTime = false"
			@close="showTime = false"
			@confirm="dateConfirm"
		></u-datetime-picker>
		<u-picker :show="showTypeSex" :columns="sexColumns" closeOnClickOverlay @cancel="showTypeSex = false" @close="showTypeSex = false" @confirm="sexConfirm"></u-picker>
		<u-picker :show="showType" :columns="columns" closeOnClickOverlay @cancel="showType = false" @close="showType = false" @confirm="maritalConfirm"></u-picker>
	</view>
</template>

<script>
	import { getInfo } from '@/api/admin/index'
	import { infoEdit } from '@/api/my/my.js'
	let that
	export default {
		data(){
			return{
				fileList: [],
				form:{
					squareImages: '',
					birthDate: '',
					nickName: '',
					sex: '',
					sexName: '',
					height: '',
					weight: '',
					phonenumber: '',
					wechatId: '',
					birthplace: '',
					domicilePlace: '',
					education: '',
					graduationSchool: '',
					professial: '',
					workplace: '',
					monthlyPay: '',
					maritalStatus: '',
					maritalStatusDm: '',
					childrenNum: '',
					propertypermits: '',
					interests: '',
					seltIntroduction: ''
				},
				rules: {
					'birthDate': [{
						type: 'string',
					    required: true,
						message: '请选择出生年月',
						trigger: "change"
					}],
					'nickName': [{
						type: 'string',
					    required: true,
						message: '请输入昵称',
						trigger: "change"
					}],
					'sexName': [{
						type: 'string',
					    required: true,
						message: '请选择男或女',
						trigger: "change"
					}],
					'height': [{
						type: 'string',
					    required: true,
						message: '请输入身高',
						trigger: "change"
					}],
					'weight': [{
						type: 'string',
					    required: true,
						message: '请输入体重',
						trigger: "change"
					}],
					'phonenumber': [{
						type: 'string',
					    required: true,
						message: '请输入手机号',
						trigger: "change"
					},{
						pattern: /^(?:(?:\+|100)86)?1[3-9]\d{9}$/,
						message: '请输入正确的手机号',
						trigger: 'change',
					}],
					'wechatId': [{
						type: 'string',
					    required: true,
						message: '请输入微信号',
						trigger: "change"
					}],
					'birthplace': [{
						type: 'string',
					    required: true,
						message: '请输入出生地',
						trigger: "change"
					}],
					'domicilePlace': [{
						type: 'string',
					    required: true,
						message: '请输入户籍地',
						trigger: "change"
					}],
					'education': [{
						type: 'string',
					    required: true,
						message: '请输入学历信息',
						trigger: "change"
					}],
					'graduationSchool': [{
						type: 'string',
					    required: true,
						message: '请输入毕业学校',
						trigger: "change"
					}],
					'professial': [{
						type: 'string',
					    required: true,
						message: '请输入从事行业',
						trigger: "change"
					}],
					'workplace': [{
						type: 'string',
					    required: true,
						message: '请输入工作地',
						trigger: "change"
					}],
					'monthlyPay': [{
						type: 'string',
					    required: true,
						message: '请输入月薪',
						trigger: "change"
					}],
					'maritalStatus': [{
						type: 'string',
					    required: true,
						message: '请选择婚姻状态',
						trigger: "change"
					}],
					'childrenNum': [{
						type: 'number',
					    required: true,
						message: '请输入子女人数',
						trigger: ['blur', 'change']
					}],
					'propertypermits': [{
						type: 'string',
					    required: true,
						message: '请输入房产情况',
						trigger: "change"
					}],
					'interests': [{
						type: 'string',
					    required: true,
						message: '请输入兴趣爱好',
						trigger: "change"
					}]
				},
				showTime: false,
				value1: Number(new Date()),
				showTypeSex: false,
				sexColumns: [
				    ['男', '女']	
				],
				showType: false,
				columns: [
					['已婚', '未婚']
				],
				personalInfoId: ''
			}
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules)
		},
		onLoad() {
			that = this
		},
		onShow() {
			this.personalInfoId = uni.getStorageSync('personalInfoId');
		},
		mounted() {
			this.loadData(this.personalInfoId);
		},
		methods: {
			loadData(id){
				getInfo(id).then(res => {
					this.form = res.data;
					if(this.form.sex == 1){
						this.form.sexName = "男"
					}else{
						this.form.sexName = "女"
					}
					this.form.sex = this.form.sex - 1;
					this.form.squareImagesList.forEach((item, index) => {
						this.fileList.push({url: item});
					})
				})
			},
			submit(id){
				this.form.squareImages = this.fileList.map(function(item,index){
					return item.url;
				}).join(";")
				this.form.sex = this.form.sex + 1;
				this.form.id = id;
				this.form.childrenNum = this.form.childrenNum + '';
				this.form.state = 0;
				this.$refs.uForm.validate().then(res => {
					infoEdit(this.form).then(res => {
						if(res.code == 200){
							uni.$u.toast('修改成功');
							setTimeout(() => {
								let pages = getCurrentPages()   // 获取页面栈
								let prePage = pages[pages.length - 2] //获取上一页
								wx.navigateBack({
									delta: 1
								})
							},500)
						}else{
							uni.$u.toast('修改失败');
						}
					})
				}).catch(errors => {
					uni.$u.toast('请填写完整信息');
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
				this['fileList'].splice(event.index, 1);
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
			dateConfirm(e) {
				this.form.birthDate = this.result(e.value, e.mode)
				this.showTime = false
			},
			sexConfirm(e) {
				this.form.sex = e.indexs[0];
				this.form.sexName = e.value[0];
				this.showTypeSex = false;
			},
			maritalConfirm(e){
				this.form.maritalStatusDm = e.indexs[0];
				this.form.maritalStatus = e.value[0];
				this.showType = false;
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
			}
		}
	}
</script>

<style lang="less">
	.container{
		padding: 20px 10px;
		.u-icon__icon{
			font-size: 13px !important;
			line-height: 13px !important;
		}
		picker-view {
			height: 190px !important;
		}
	}
	.margin-l{
		margin-left: 20px;
	}
</style>