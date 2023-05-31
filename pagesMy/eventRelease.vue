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
		<u-form labelPosition="left" :model="form">
			<u-form-item label="活动名称" labelWidth="150" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入活动名称"></u--input>
			</u-form-item>
			<u-form-item label="开始时间" labelWidth="150" prop="form.time" borderBottom @click="showTime = true">
				<u--input v-model="form.time" border="none" disabled disabledColor="#FFFFFF" inputAlign="right" placeholder="请选择时间"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="非会员价" labelWidth="150" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<u-form-item label="会员价" labelWidth="150" prop="form.name" borderBottom>
				<u--input v-model="form.name" border="none" inputAlign="right" placeholder="请输入"></u--input>
				<view class="margin-l" slot="right">元</view>
			</u-form-item>
			<view style="padding: 12px 0;">
				<text style="font-size: 15px;color: #303133;margin: 6px 0;">活动简介</text>
				<view style="border: 1px solid #999;">
					<u--textarea
						v-model="form.content"
						autoHeight
						border="surround"
						placeholder="请输入活动简介"
					></u--textarea>
				</view>
			</view>
			<view style="margin-top: 90px;">
				<u-button type="primary" text="确认发布" @click="toForm()"></u-button>
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
	</view>
</template>

<script>
	let that
	export default{
		data(){
			return{
				fileList: [],
				form: {},
				showTime: false,
				value1: Number(new Date())
			}
		},
		onLoad() {
			that = this;
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