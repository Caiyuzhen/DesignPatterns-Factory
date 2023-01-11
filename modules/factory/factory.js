import { ModalTypes } from "./typing.js"



//🔥🔥公共的方法、属性跟静态工具, 对每种状态的属性进行加工, 或扩展, 有 success、warning、error 三个类
class Modal {
	constructor (status) { 
		this.status = status //🔥【状态】保存到当前的类里边
	}

	// 🔥根据状态返回类名(最终改变 modal 样式的类名), get 方法定义
	get eleClassName() { //👈子类可以通过 this.className 获取到 classStr!!
		let classStr = 'modal' //⚡️最终要给到 modal 的类名
		// ⚡️动态的方式，定义枚举
		switch(this.status) {
			case ModalTypes.SUCCESS:
				classStr += ' success' //记得给空格
				// Modal.className += 'modal success'
				break
			case ModalTypes.WARNING:
				classStr += ' warning' //记得给空格
				// Modal.className += 'modal warning'
				break
			case ModalTypes.ERROR:
				classStr += ' error' //记得给空格
				// Modal.className += 'modal error'
				break;
			default:
				break
		}
		return classStr //返回类名
		// ⚡️写死的方式
		// switch(this.status) {
		// 	case 'success':
		// 		classStr += ' success' //记得给空格
		// 		// Modal.className += 'modal success'
		// 		break
		// 	case 'warning':
		// 		classStr += ' warning' //记得给空格
		// 		// Modal.className += 'modal warning'
		// 		break
		// 	case 'error':
		// 		classStr += ' error' //记得给空格
		// 		Modal.className += 'modal error'
		// 		break;
		// 	default:
		// 		break
		// }
		// return classStr //返回类名
	}

	// the best，检查 status 是不是枚举里边的值, 工具方法一般都用静态方法
	static checkStatusExist(types, status) {
		for (let i in types) {
			if (types[i] === status) {
				console.log('status 存在')
				return true
			}
		}
		console.log('status 不存在')
		return false
	}
}




//🔥🔥定义三个类到 Modal 里边去实例化, 比较灵活, 要扩展的话可以在每个 success、warning、error 里边去扩展能力
class SuccessModal extends Modal { //继承 Modal, 所以可以调用 eleClassName
	constructor(title) {
		super(ModalTypes.SUCCESS)//⚡️把状态传递给父类 
		this.title = '成功' + title //⚙️加工 title 属性
	}
}

class WarningModal extends Modal { //继承 Modal, 所以可以调用 eleClassName
	constructor(title) {
		super(ModalTypes.WARNING)//⚡️把状态传递给父类 
		this.title = '警告' + title //⚙️加工 title 属性
	}
	
}

class ErrorModal extends Modal { //继承 Modal, 所以可以调用 eleClassName
	constructor(title) {
		super(ModalTypes.ERROR)//⚡️把状态传递给父类 
		this.title = '失败' + title //⚙️加工 title 属性
	}
}





// 🏭🏭🏭用来实例化的工厂, 用来创建 Modal 的实例
class ModalFactory {
	constructor(DOM) {// 由 index.js 传入的 DOM 元素
		this.DOM = DOM
	}

	// 🔥🔥创建实例
	create (title, status) { //🔥接收一个状态, 由 index.js 传入到这里的 status
		const statusIsExist = Modal.checkStatusExist(ModalTypes,status)//the best, 检验 status 存不存在的静态方法

		if(!statusIsExist) {
			throw new Error('status 不正确, 请检查 status!')
		}

		const dom = this.DOM
		let modal = null //👉用来保存实例化的类

		// 🔥🔥实例化上边的三个类
		switch (status) {
			case ModalTypes.SUCCESS:
				modal = new SuccessModal(title) //⚡️把 title 分别传递给三个类, 让它们去加工
				break
			case ModalTypes.WARNING:
				modal = new WarningModal(title) //⚡️把 title 分别传递给三个类, 让它们去加工
				break
			case ModalTypes.ERROR:
				modal = new ErrorModal(title) //⚡️把 title 分别传递给三个类, 让它们去加工
				break
			default:
				break
		}

		// 设置元素的 titles
		dom.getElementsByTagName('header')[0].innerText = modal.title
		dom.className = modal.eleClassName //👈设置元素的 className, 因为三个子类的实例是继承自 Modal 的, 🔥🔥所以实例化的元素也能都能够取到父类的 eleClassName 属性！！
	}
}


export default ModalFactory