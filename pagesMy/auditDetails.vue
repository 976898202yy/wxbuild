<template>
	<view class="container">
		<view style="padding-bottom: 20px;">
			<view style="font-weight: bold;border-left: 4px solid #FEC300;padding-left: 10px;">个人信息</view>
		</view>
		<view class="img-1">
			<u-upload
				:fileList="fileList"
				name="1"
				:maxCount="fileList.length"
				:previewFullImage="true"
			></u-upload>
		</view>
		<u-form labelPosition="left" :model="form">
			<u-form-item label="真实姓名" labelWidth="140" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="身份证号" labelWidth="140" borderBottom>
				<u--input v-model="form.idcard" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="出生年月" labelWidth="140" borderBottom>
				<u--input v-model="form.birthDate" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="昵称" labelWidth="140" borderBottom>
				<u--input v-model="form.nickName" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="性别" labelWidth="140" prop="form.sex" borderBottom>
				<u--input v-model="form.sexInfo" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="身高" labelWidth="140" borderBottom>
				<u--input v-model="form.height" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">cm</view>
			</u-form-item>
			<u-form-item label="体重" labelWidth="140" borderBottom>
				<u--input v-model="form.weight" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">kg</view>
			</u-form-item>
			<u-form-item label="手机号" labelWidth="140" borderBottom>
				<u--input v-model="form.phonenumber" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="微信号(互相关注可查看)" labelWidth="340" borderBottom>
				<u--input v-model="form.wechatId" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="出生地" labelWidth="140" borderBottom>
				<u--input v-model="form.birthplace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="户籍地" labelWidth="140" borderBottom>
				<u--input v-model="form.domicilePlace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="学历信息" labelWidth="140" borderBottom>
				<u--input v-model="form.education" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="毕业学校" labelWidth="140" borderBottom>
				<u--input v-model="form.graduationSchool" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="从事行业" labelWidth="140" borderBottom>
				<u--input v-model="form.professial" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="工作地" labelWidth="140" borderBottom>
				<u--input v-model="form.workplace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="平均月薪" labelWidth="140" borderBottom>
				<u--input v-model="form.monthlyPay" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<u-form-item label="感情与婚姻状态" labelWidth="240" borderBottom>
				<u--input v-model="form.maritalStatus" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="有无子女" labelWidth="140" borderBottom>
				<u--input v-model="form.childrenNum" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="房产情况" labelWidth="140" borderBottom>
				<u--input v-model="form.propertypermits" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="兴趣爱好" labelWidth="140" borderBottom>
				<u--textarea
					v-model="form.interests"
					disabled
					autoHeight
				></u--textarea>
			</u-form-item>
			<u-form-item label="个人介绍" labelWidth="140" labelPosition="top" borderBottom>
				<u--textarea
					v-model="form.seltIntroduction"
					disabled
					autoHeight
				></u--textarea>
			</u-form-item>
			<view style="padding: 20px 0;">
				<view style="font-weight: bold;border-left: 4px solid #FEC300;padding-left: 10px;">择偶标准</view>
			</view>
			<u-form-item label="最小年龄" labelWidth="140" borderBottom>
				<u--input v-model="form.mateMinAge" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">岁</view>
			</u-form-item>
			<u-form-item label="最大年龄" labelWidth="140" borderBottom>
				<u--input v-model="form.mateMaxAge" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" ></u--input>
				<view class="margin-l" slot="right">岁</view>
			</u-form-item>
			<u-form-item label="最小身高" labelWidth="140" borderBottom>
				<u--input v-model="form.mateMinHeight" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">cm</view>
			</u-form-item>
			<u-form-item label="最大身高" labelWidth="140" borderBottom>
				<u--input v-model="form.mateMaxHeight" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">cm</view>
			</u-form-item>
			<u-form-item label="婚姻状况" labelWidth="140" borderBottom>
				<u--input v-model="form.mateMaritalStatus" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="学历" labelWidth="140" borderBottom>
				<u--input v-model="form.mateEducation" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择学历"></u--input>
			</u-form-item>
			<u-form-item label="其他要求" labelWidth="140" labelPosition="top" borderBottom>
				<u--textarea
					v-model="form.mateCondition"
					disabled
					autoHeight
				></u--textarea>
			</u-form-item>
		</u-form>
		<view class="btn-bottom">
			<u-button type="primary" text="同意" @click="agree(form.id)"></u-button>
			<u-button type="primary" text="驳回" @click="turnDown(form.id)"></u-button>
		</view>
	</view>
</template>

<script>
	import { getInfo } from '@/api/admin/index'
	import { infoEdit } from '@/api/my/my.js'
	let that
	export default {
		data(){
			return{
				id: '',
				fileList: [],
				form:{}
			}
		},
		onLoad(option) {
			that = this;
			this.id = option.id;
		},
		mounted() {
			this.loadData(this.id);
		},
		methods: {
			loadData(id){
				getInfo(id).then(res => {
					console.log(res);
					this.form = res.data;
					if(this.form.sex == 1){
						this.form.sexInfo = "男"
					}else{
						this.form.sexInfo = "女"
					}
					this.form.squareImagesList.forEach((item, index) => {
						this.fileList.push({url: item});
					})
				})
			},
			agree(id){
				infoEdit({id: id, state: 1}).then(res => {
					if(res.code == 200){
						uni.$u.toast('审核成功');
						setTimeout(() => {
							let pages = getCurrentPages()   // 获取页面栈
							let prePage = pages[pages.length - 2] //获取上一页
							wx.navigateBack({
								delta: 1
							})
						},500)
					}else{
						uni.$u.toast('审核失败');
					}
				})
			},
			turnDown(id,state){
				infoEdit({id: id, state: 2}).then(res => {
					if(res.code == 200){
						uni.$u.toast('驳回成功');
						setTimeout(() => {
							let pages = getCurrentPages()   // 获取页面栈
							let prePage = pages[pages.length - 2] //获取上一页
							wx.navigateBack({
								delta: 1
							})
						},500)
					}else{
						uni.$u.toast('驳回失败');
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.container{
		padding: 20px;
		picker-view {
			height: 190px !important;
		}
		.u-icon__icon{
			font-size: 13px !important;
			line-height: 13px !important;
		}
		.u-textarea--disabled{
			background-color: #fff !important;
		}
		.u-textarea{
			padding: 0 !important;
		}
	}
	.img-1{
		.u-upload__wrap{
			width: 100%;
		}
		image{
			width: 120px !important;
			height: 120px !important;
		}
		.u-upload__wrap__preview{
			width: 30%;
			&:last-child:nth-child(3n + 2){
				margin-right: calc((100% - 31%) / 2);
			}
		}
	}
	.u-upload__deletable{
		z-index: -1 !important;
	}
	.margin-l{
		margin-left: 20px;
	}
	.btn-bottom{
		display: flex;
		margin: 30px auto;
	}
	.u-button--primary{
		width: 260rpx !important;
		height: 50px !important;
		background-color: #211C22 !important;
	}
</style>