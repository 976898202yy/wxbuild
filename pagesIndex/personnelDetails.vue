<template>
	<view class="details">
		<view class="img-1">
			<image :src="form.img" mode=""></image>
			<image :src="form.img" mode=""></image>
			<image :src="form.img" mode=""></image>
		</view>
		<view class="img-1">
			<image :src="form.img" mode=""></image>
			<image :src="form.img" mode=""></image>
			<image :src="form.img" mode=""></image>
		</view>
		<u-form labelPosition="left" :model="form">
			<u-form-item label="出生年月" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="昵称" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="身高" labelWidth="140" prop="form.height" borderBottom>
				<u--input v-model="form.height" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">cm</view>
			</u-form-item>
			<u-form-item label="体重" labelWidth="140" prop="form.height" borderBottom>
				<u--input v-model="form.height" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">kg</view>
			</u-form-item>
			<u-form-item label="手机号" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="出生地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="户籍地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="学历信息" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="毕业学校" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="从事行业" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="工作地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="平均月薪" labelWidth="140" prop="form.height" borderBottom>
				<u--input v-model="form.height" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<u-form-item label="感情与婚姻状态" labelWidth="240" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>	
			</u-form-item>
			<u-form-item label="有无子女" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="房产情况" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="兴趣爱好" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
			<u-form-item label="个人介绍" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" disabled disabledColor="#FFFFFF" inputAlign="right"></u--input>
			</u-form-item>
		</u-form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					name:"1993.4.2",
					height: '180',
					img: 'https://cdn.uviewui.com/uview/goods/1.jpg'
				}
			}
		}
	}
</script>

<style lang="less">
	.details{
		padding: 10px;
	}
	.margin-l{
		margin-left: 20px;
	}
	.img-1{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		image{
			width: 110px;
			height: 110px;
		}
	}
	.u-form{
		margin: 20px 0;
	}
</style>