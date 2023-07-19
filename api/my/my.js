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
		url: '/system/photo/edit',
		method: 'PUT',
		data
	})
}

export function groupAdd(data){
	return request({
		url: '/friend/group/edit',
		method: 'PUT',
		data
	})
}

export function wxPayment(data){
	return request({
		url: '/v3/wx/pay/doUnifiedOrder',
		method: 'POST',
		data
	})
}

export function getVipMoney(){
	return request({
		url: '/system/config/getVip',
		method: 'GET'
	})
}