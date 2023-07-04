import request from '@/common/request.js'

export function getList(data){
	return request({
		url: '/personal/info/list',
		method: 'GET',
		data
	})
}

export function getInfo(id){
	return request({
		url: '/personal/info/' + id,
		method: 'GET',
	})
}