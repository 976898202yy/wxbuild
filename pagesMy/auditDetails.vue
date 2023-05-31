<template>
	<view class="container">
		<view>
			<u-upload
				width="210"
				height="210"
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
		<u-form labelPosition="left" :model="form">
			<u-form-item label="出生年月" labelWidth="140" prop="form.time" borderBottom @click="showTime = true">
				<u--input v-model="form.time" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择出生年月"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="昵称" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入昵称"></u--input>
			</u-form-item>
			<u-form-item label="身高" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入身高"></u--input>
				<view class="margin-l" slot="right">cm</view>
			</u-form-item>
			<u-form-item label="体重" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入体重"></u--input>
				<view class="margin-l" slot="right">kg</view>
			</u-form-item>
			<u-form-item label="手机号" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入手机号"></u--input>
			</u-form-item>
			<u-form-item label="微信号(互相关注可查看)" labelWidth="340" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入微信号"></u--input>
			</u-form-item>
			<u-form-item label="出生地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入出生地"></u--input>
			</u-form-item>
			<u-form-item label="户籍地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入户籍地"></u--input>
			</u-form-item>
			<u-form-item label="学历信息" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入学历信息"></u--input>
			</u-form-item>
			<u-form-item label="毕业学校" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入毕业学校"></u--input>
			</u-form-item>
			<u-form-item label="从事行业" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入您从事的行业"></u--input>
			</u-form-item>
			<u-form-item label="工作地" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入工作地"></u--input>
			</u-form-item>
			<u-form-item label="平均月薪" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入月薪"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<u-form-item label="感情与婚姻状态" labelWidth="240" prop="form.time" borderBottom @click="showType = true">
				<u--input v-model="form.time" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择婚姻状态"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="有无子女" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入子女人数,若无则填0"></u--input>
			</u-form-item>
			<u-form-item label="房产情况" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入房产情况"></u--input>
			</u-form-item>
			<u-form-item label="兴趣爱好" labelWidth="140" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入您的兴趣爱好"></u--input>
			</u-form-item>
			<view style="padding: 12px 0;">
				<text style="font-size: 15px;color: #303133;margin: 6px 0;">个人介绍</text>
				<view style="border: 1px solid #999;">
					<u--textarea
						v-model="form.content"
						autoHeight
						border="surround"
						placeholder="请输入个人介绍,选填"
					></u--textarea>
				</view>
			</view>
			<view class="btn-bottom">
				<u-button type="primary" text="同意"></u-button>
				<u-button type="primary" text="驳回"></u-button>
			</view>
		</u-form>
		<u-datetime-picker
			:show="showTime"
			v-model="value1"
			mode="date"
			closeOnClickOverlay
			@cancel="showTime = false"
			@close="showTime = false"
		></u-datetime-picker>
		<u-picker :show="showType" :columns="columns" closeOnClickOverlay @cancel="showType = false" @close="showType = false"></u-picker>
	</view>
</template>

<script>
	let that
	export default {
		data(){
			return{
				action: 'http://www.example.com/upload',
				fileList: [],
				form:{},
				showTime: false,
				value1: Number(new Date()),
				showType: false,
				columns: [
					['已婚', '未婚']
				]
			}
		},
		onLoad() {
			that = this
		},
		methods: {
			afterRead(event){
				let lists = [].concat(event.file);
				console.log(lists);
				lists.map((item) => {
					that.fileList.push({'url': item.url})
				})
				console.log(that.fileList);
			},
			// 删除图片
			deletePic(event) {
				this.fileList.splice(event.index, 1)
			},
		}
	}
</script>

<style lang="less">
	.container{
		padding: 20px 10px;
		picker-view {
			height: 190px !important;
		}
		.u-icon__icon{
			font-size: 13px !important;
			line-height: 13px !important;
		}
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