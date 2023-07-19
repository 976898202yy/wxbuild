<template>
	<view class="details">
		<view class="detail-top">
			<view class="left">
				<image :src="form.squareImagesList[0]" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view style="margin-bottom: 10px;">{{form.nickName}}</view>
				<view style="display: flex; font-size: 28rpx;">
					<text style="margin-right: 10px;">{{age}}岁</text>
					<text style="margin-right: 10px;">{{form.height}}cm</text>
					<text style="margin-right: 10px;">{{form.weight}}kg</text>
					<u-icon v-if="form.sex == 1" name="man" color="#79CDFE" size="36"></u-icon>
					<u-icon v-if="form.sex == 2" name="woman" color="#FE2F25" size="36"></u-icon>
				</view>
			</view>
		</view>
		<view style="padding: 20px 20px 40px 20px;">
			<scroll-view scroll-x="true" scroll-with-animation="true" class="scrollContainer">
				<u-upload
					:fileList="fileList"
					name="1"
					:maxCount="fileList.length"
					:previewFullImage="true"
				></u-upload>
			</scroll-view>
			<view style="margin: 14px 0;font-size: 32rpx;">个人信息</view>
			<u-form labelPosition="left" :model="form">
				<u-form-item label="出生年月" labelWidth="200">
					<u--input v-model="form.birthDate" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="出生地" labelWidth="200">
					<u--input v-model="form.birthplace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="户籍地" labelWidth="200">
					<u--input v-model="form.domicilePlace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="工作地" labelWidth="200">
					<u--input v-model="form.workplace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="毕业学校" labelWidth="200">
					<u--input v-model="form.graduationSchool" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="学历" labelWidth="200">
					<u--input v-model="form.education" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="行业" labelWidth="200">
					<u--input v-model="form.professial" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="平均月薪" labelWidth="200">
					<u--input v-model="form.monthlyPay" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="未婚/离异" labelWidth="200">
					<u--input v-model="form.maritalStatus" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>	
				</u-form-item>
				<u-form-item label="有无子女" labelWidth="200">
					<u--input v-model="form.childrenNum" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="房产情况" labelWidth="200">
					<u--input v-model="form.propertypermits" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="兴趣爱好" labelWidth="200">
					<u--textarea
						v-model="form.interests"
						disabled
						autoHeight
					></u--textarea>
				</u-form-item>
				<u-form-item label="个人介绍" labelWidth="200">
					<u--textarea
						v-model="form.seltIntroduction"
						disabled
						autoHeight
					></u--textarea>
				</u-form-item>
				<view style="margin: 14px 0;font-size: 32rpx;">择偶要求</view>
				<u-form-item label="年龄" labelWidth="200">
					<u--input v-model="form.ageRadius" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="身高" labelWidth="200">
					<u--input v-model="form.heightRadius" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="婚姻状况" labelWidth="200">
					<u--input v-model="form.mateMaritalStatus" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="学历" labelWidth="200">
					<u--input v-model="form.mateEducation" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				</u-form-item>
				<u-form-item label="其他要求" labelWidth="200">
					<u--textarea
						v-model="form.mateCondition"
						disabled
						autoHeight
					></u--textarea>
				</u-form-item>
			</u-form>
		</view>
	</view>
</template>

<script>
	import { getInfo } from '@/api/admin/index'
	export default{
		data(){
			return{
				id: '',
				age: '',
				fileList: [],
				form:{}
			}
		},
		onLoad(option) {
			this.id = option.id;
			this.age = option.age;
		},
		mounted() {
			this.loadData(this.id);
		},
		methods: {
			loadData(id){
				getInfo(id).then(res => {
					this.form = res.data;
					if(this.form.sex == 1){
						this.form.sexInfo = "男"
					}else{
						this.form.sexInfo = "女"
					}
					this.form.ageRadius = this.form.mateMinAge + '岁 - ' + this.form.mateMaxAge + '岁';
					this.form.heightRadius = this.form.mateMinHeight + 'cm - ' + this.form.mateMaxHeight + 'cm'
					this.form.monthlyPay = this.form.monthlyPay + '元';
					if(this.form.squareImagesList != null){
						this.form.squareImagesList.forEach((item, index) => {
							this.fileList.push({url: item});
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.detail-top{
		background-color: #FEC300;
		padding: 25px;
		display: flex;
		align-items: center;
		.left{
			display: flex;
			align-items: center;
		}
		image{
			width: 80px;
			height: 80px;
			border-radius: 50%;
			margin-right: 20px;
		}
	}
	.u-upload__deletable{
		z-index: -1 !important;
	}
	.scrollContainer{
	    white-space: nowrap;
		.u-upload__wrap__preview{
			image{
				width: 150px !important;
				height: 150px !important;
			}
		}
		.u-upload__wrap{
			flex-wrap: nowrap !important;
		}
	}
	.u-form-item__body__left__content__label{
		color: #999 !important;
	}
	.u-form-item__body{
		padding: 4px 0 !important;
	}
	.u-textarea__field{
		color: #333 !important;
	}
	.u-form-item__body__left__content{
		padding-right: 0 !important;
	}
	.u-input{
		input{
			text-align: left !important;
		}
	}
	.u-textarea--disabled{
		background-color: #fff !important;
	}
	.u-textarea{
		padding: 0 !important;
	}
</style>