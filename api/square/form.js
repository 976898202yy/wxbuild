import request from '@/common/request.js'

export function uploadImg(){
	return request({
		url: '/common/uploads',
		method: 'GET'
	})
}

export function getSquareList(data){
	return request({
		url: '/club/activity/list',
		method: 'GET',
		data
	})
}

export function getSquareDetails(id){
	return request({
		url: '/club/activity/' + id,
		method: 'GET'
	})
}

export function infoAdd(data){
	return request({
		url: '/personal/info/add',
		method: 'POST',
		data
	})
}

export function getInfoExamine(){
	return request({
		url: '/personal/info/getInfoExamine',
		method: 'GET'
	})
}