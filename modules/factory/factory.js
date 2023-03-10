/*
	ð­å·¥åæ¨¡å¼,
		ðæ¯ä¸ªç¶æé½æä¸ä¸ªç±», éè¿å·¥åæ¥åå»ºå®ä¾, éè¿å®ä¾æ¥è°ç¨æ¹æ³
		ðå¬å±çæ¹æ³æç¼åºæ¥, æ¯å¦ outPut, éè¿å­ç±»çå®ä¾åå¯ä»¥å¡å¥æ´å¤ä¿¡æ¯, æç»ç»ä¸éè¿å·¥åæ¥å®ä¾ååè¿åï¼ï¼
		ðå¬å±çæ©å±æ¹æ³ä¹é½æç¼åºæ¥æ¯å¦æç¼å° Modal, éå¬å±çè¯å°±æ¾å°å­ç±»éè¾¹å»æ©å±ï¼
*/

import { ModalTypes } from "./typing.js"



//ð¥ð¥å¬å±çæ¹æ³ãå±æ§è·éæå·¥å·, å¯¹æ¯ç§ç¶æçå±æ§è¿è¡å å·¥, ææ©å±, æ successãwarningãerror ä¸ä¸ªç±»
class Modal {
	constructor (status) { 
		this.status = status //ð¥ãç¶æãä¿å­å°å½åçç±»éè¾¹
	}

	// ð¥æ ¹æ®ç¶æè¿åç±»å(æç»æ¹å modal æ ·å¼çç±»å), get æ¹æ³å®ä¹
	get eleClassName() { //ðå­ç±»å¯ä»¥éè¿ this.className è·åå° classStr!!
		let classStr = 'modal' //â¡ï¸æç»è¦ç»å° modal çç±»å
		// â¡ï¸å¨æçæ¹å¼ï¼å®ä¹æä¸¾
		switch(this.status) {
			case ModalTypes.SUCCESS:
				classStr += ' success' //è®°å¾ç»ç©ºæ ¼
				// Modal.className += 'modal success'
				break
			case ModalTypes.WARNING:
				classStr += ' warning' //è®°å¾ç»ç©ºæ ¼
				// Modal.className += 'modal warning'
				break
			case ModalTypes.ERROR:
				classStr += ' error' //è®°å¾ç»ç©ºæ ¼
				// Modal.className += 'modal error'
				break;
			default:
				break
		}
		return classStr //è¿åç±»å
		// â¡ï¸åæ­»çæ¹å¼
		// switch(this.status) {
		// 	case 'success':
		// 		classStr += ' success' //è®°å¾ç»ç©ºæ ¼
		// 		// Modal.className += 'modal success'
		// 		break
		// 	case 'warning':
		// 		classStr += ' warning' //è®°å¾ç»ç©ºæ ¼
		// 		// Modal.className += 'modal warning'
		// 		break
		// 	case 'error':
		// 		classStr += ' error' //è®°å¾ç»ç©ºæ ¼
		// 		Modal.className += 'modal error'
		// 		break;
		// 	default:
		// 		break
		// }
		// return classStr //è¿åç±»å
	}

	//ãððå¯ä»¥æ©å±åºæ´å¤çæ¹æ³, ç»å°ä¸é¢çç±»æèå·¥åå»è°ç¨ððãå·¥å·æ¹æ³ä¸è¬é½ç¨éææ¹æ³ã æ£æ¥ status æ¯ä¸æ¯æä¸¾éè¾¹çå¼,
	static checkStatusExist(types, status) {
		for (let i in types) {
			if (types[i] === status) {
				console.log('status å­å¨')
				return true
			}
		}
		console.log('status ä¸å­å¨')
		return false
	}

	//ãððå¯ä»¥æ©å±åºæ´å¤çæ¹æ³ððãæ¯å¦æå°éè¯¯æ¥å¿
	static outPutInfo(types, info) {
		console.log(types + ':', info)
	}
}







//ð¥ð¥å®ä¹ä¸ä¸ªç±»å° Modal éè¾¹å»å®ä¾å, æ¯è¾çµæ´», è¦æ©å±çè¯å¯ä»¥å¨æ¯ä¸ª successãwarningãerror éè¾¹å»æ©å±è½å
class SuccessModal extends Modal { //ç»§æ¿ Modal, æä»¥å¯ä»¥è°ç¨ eleClassName
	constructor(title) {
		super(ModalTypes.SUCCESS)//â¡ï¸æç¶æä¼ éç»ç¶ç±» 
		this.title = 'æå' + title //âï¸å å·¥ title å±æ§
	}

	// ãðæ©å±ä¸ä¸ªæ¹æ³ãæååè·³è½¬è°·æ­, å ä¸ºä¸æ¯å¬å±æ¹æ³, æä»¥è¿ä¸ªæ©å±çæ¹æ³ä¸åå¨ä¸é¢é£ä¸ª Modal éè¾¹
	goToHome(url) {
		window.location.href = url //æ©å±, å¯ä»¥ä¼ å¥åæ°
		// window.location.href = 'https://www.google.com' //åæ­»
	}
}


class WarningModal extends Modal { //ç»§æ¿ Modal, æä»¥å¯ä»¥è°ç¨ eleClassName
	constructor(title) {
		super(ModalTypes.WARNING)//â¡ï¸æç¶æä¼ éç»ç¶ç±» 
		this.title = 'è­¦å' + title //âï¸å å·¥ title å±æ§
	}

	outPutInfo(info) { //ãðæ©å±ä¸ä¸ªæ¹æ³ã
		Modal.outPutInfo('â ï¸è­¦å:' + info) //â¡ï¸â¡ï¸è°ç¨ç¶ç±» Modal çæç¤º, ð¥å¹¶ä¸å ä¸å­ç±»èªå·±çæç¤ºï¼ï¼ï¼
	}
	
}


class ErrorModal extends Modal { //ç»§æ¿ Modal, æä»¥å¯ä»¥è°ç¨ eleClassName
	constructor(title) {
		super(ModalTypes.ERROR)//â¡ï¸æç¶æä¼ éç»ç¶ç±» 
		this.title = 'éè¯¯' + title //âï¸å å·¥ title å±æ§
	}

	outPutInfo(info) { //ãðæ©å±ä¸ä¸ªæ¹æ³ã
		Modal.outPutInfo('âéè¯¯:' + info) //â¡ï¸â¡ï¸è°ç¨ç¶ç±» Modal çæç¤º, ð¥å¹¶ä¸å ä¸å­ç±»èªå·±çæç¤ºï¼ï¼ï¼
	}
}








// ð­ð­ð­ç¨æ¥å®ä¾åçå·¥å, ç¨æ¥åå»º Modal çå®ä¾
class ModalFactory {
	constructor(DOM) {// ç± index.js ä¼ å¥ç DOM åç´ 
		this.DOM = DOM
	}

	// ð¥ð¥åå»ºå®ä¾
	create (title, status) { //ð¥æ¥æ¶ä¸ä¸ªç¶æ, ç± index.js ä¼ å¥å°è¿éç status
		const statusIsExist = Modal.checkStatusExist(ModalTypes,status)//the best, æ£éª status å­ä¸å­å¨çéææ¹æ³

		if(!statusIsExist) {
			throw new Error('status ä¸æ­£ç¡®, è¯·æ£æ¥ status!')
		}

		const dom = this.DOM
		let modal = null //ðç¨æ¥ä¿å­å®ä¾åçç±»

		// ð¥ð¥å®ä¾åä¸è¾¹çä¸ä¸ªç±»
		switch (status) {
			case ModalTypes.SUCCESS:
				modal = new SuccessModal(title) //â¡ï¸æ title åå«ä¼ éç»ä¸ä¸ªç±», è®©å®ä»¬å»å å·¥
				break
			case ModalTypes.WARNING:
				modal = new WarningModal(title) //â¡ï¸æ title åå«ä¼ éç»ä¸ä¸ªç±», è®©å®ä»¬å»å å·¥
				break
			case ModalTypes.ERROR:
				modal = new ErrorModal(title) //â¡ï¸æ title åå«ä¼ éç»ä¸ä¸ªç±», è®©å®ä»¬å»å å·¥
				break
			default:
				break
		}

		// è®¾ç½®åç´ ç titles
		dom.getElementsByTagName('header')[0].innerText = modal.title
		dom.className = modal.eleClassName //ðè®¾ç½®åç´ ç className, å ä¸ºä¸ä¸ªå­ç±»çå®ä¾æ¯ç»§æ¿èª Modal ç, ð¥ð¥æä»¥å®ä¾åçåç´ ä¹è½é½è½å¤åå°ç¶ç±»ç eleClassName å±æ§ï¼ï¼

		return { //ðè¿å modal ç¶ç±»çéè¯¯ä¿¡æ¯
			outPutInfo: modal.outPutInfo, //ðè¿å modal ç¶ç±»çéè¯¯ä¿¡æ¯, è®©è°ç¨å®çäººå¯ä»¥èªå·±ä¼ å¥ info åæ°ï¼ï¼
			goToHome: modal.goToHome //ðè¿å modal ç¶ç±»çè·³è½¬æ¹æ³, è®©è°ç¨å®çäººå¯ä»¥èªå·±ä¼ å¥ url åæ°ï¼ï¼
		}
	}
}


export default ModalFactory