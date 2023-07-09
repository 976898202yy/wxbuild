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

export function getPhotoList(){
	return request({
		url: '/system/photo/list',
		method: 'GET'
	})
}

export function getGroupInfo(){
	return request({
		url: '/friend/group/getInfo',
		method: 'GET',
	})
}