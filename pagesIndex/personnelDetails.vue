<template>
	<view class="details">
		<view class="img-1">
			<view class="img-item" v-for="(item, i) in form.squareImagesList">
				<image :src="item" mode=""></image>
			</view>
		</view>
		<u-form labelPosition="left" :model="form">
			<u-form-item label="出生年月" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.birthDate" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="昵称" labelWidth="140" prop="form.createByName" borderBottom>
				<u--input v-model="form.nickName" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="性别" labelWidth="140" prop="form.sex" borderBottom>
				<u--input v-model="form.sexInfo" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="身高" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.height" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">cm</view>
			</u-form-item>
			<u-form-item label="体重" labelWidth="140" prop="form.height" borderBottom>
				<u--input v-model="form.weight" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">kg</view>
			</u-form-item>
			<!-- <u-form-item label="手机号" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.phonenumber" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item> -->
			<u-form-item label="出生地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.birthplace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="户籍地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.domicilePlace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="学历信息" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.education" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="毕业学校" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.graduationSchool" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="从事行业" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.professial" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="工作地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.workplace" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="平均月薪" labelWidth="140" prop="form.height" borderBottom>
				<u--input v-model="form.monthlyPay" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<u-form-item label="感情与婚姻状态" labelWidth="240" prop="form.name" borderBottom>
				<u--input v-model="form.maritalStatus" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>	
			</u-form-item>
			<u-form-item label="有无子女" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.childrenNum" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">人</view>
			</u-form-item>
			<u-form-item label="房产情况" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.propertypermits" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="兴趣爱好" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.interests" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="个人介绍" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.seltIntroduction" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
		</u-form>
	</view>
</template>

<script>
	import { getInfo } from '@/api/admin/index'
	export default{
		data(){
			return{
				id: '',
				form:{}
			}
		},
		onLoad(option) {
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
				})
			}
		}
	}
</script>

<style lang="less">
	.details{
		padding: 20px;
	}
	.margin-l{
		margin-left: 20px;
	}
	.img-1{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 10px;
		image{
			width: 110px;
			height: 110px;
		}
		.img-item{
			width: 32%;
			&:last-child:nth-child(3n + 2){
				margin-right: calc((100% - 31%) / 2);
			}
		}
	}
	.u-form{
		margin: 20px 0;
	}
</style>