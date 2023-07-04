import { resolve } from 'url';
import url from '../config.js'

function service(options = {}){
	let token
	options.url = `${url}${options.url}`;
	if(uni.getStorageSync('token')){
		token = uni.getStorageSync('token');
	}
	options.header = {
		'Authorization': `${token}`,
		'content-type': 'application/json'
	};
	return new Promise((resolved, rejected) => {
		// 成功
		options.success = (res) => {
			if(Number(res.statusCode) === 200){
				resolved(res.data);
			}else{
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: `${res.data.msg}`
				})
				rejected(res.data.msg);   //报错
			}
		}
		options.fail = (err) => {
			if(err.response.code !== 200){
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: '接口错误'
				})
				rejected(err);
			}
		}
		uni.request(options);
	})
}

export default service;