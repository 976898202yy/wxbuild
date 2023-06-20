import { resolve } from 'url';
import url from '../config.js'

function service(options = {}){
	let auth
	option.url = `${url}${options.url}`;
	options.header = {
		'Authorization': '',
		'content-type': 'application/json'
	};
	return new Promise((resolved, rejected) => {
		// 成功
		options.success = (res) => {
			
		}
		options.fail = (err) => {
			
		}
		uni.request(options);
	})
}

export default service;