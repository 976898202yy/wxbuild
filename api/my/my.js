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