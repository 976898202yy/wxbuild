import request from '@/common/request.js'

export function clubAdd(data){
	return request({
		url: '/club/activity/add',
		method: 'POST',
		data
	})
}

export function infoEdit(data){
	return request({
		url: '/personal/info/edit',
		method: 'PUT',
		data
	})
}

export function photoAdd(data){
	return request({
		url: '/system/photo/add',
		method: 'POST',
		data
	})
}

export function groupAdd(data){
	return request({
		url: '/friend/group/add',
		method: 'POST',
		data
	})
}