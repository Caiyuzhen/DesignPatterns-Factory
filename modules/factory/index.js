// 🔥🔥工厂模式(传入需要的状态、文案、info 等原材料，返回 modal)
import ModalFactory from './factory.js'

(() => {
	const ModalDOM = document.getElementsByClassName('modal')[0]
	const BtnGroup = document.getElementsByClassName('btn-group')[0]
	const modalFactory = new ModalFactory(ModalDOM) //🔥操作哪个节点，就传入哪个 DOM 节点

	// 👀初始化执行的函数
	const init = () => {
		bindEvent()
	}

	// 绑定点击事件, 执行某个函数
	function bindEvent() {
		BtnGroup.addEventListener('click', handleBtnClick, false)

	}


	// ⚡️判断点击的是不是按钮
	function handleBtnClick(e) {
		const ele = e.target
		const tagName = ele.tagName.toLowerCase() //转为小写

		if(tagName === 'button') {
			const status = ele.dataset.status
			const info = ele.dataset.info
			
			// changeStatus(status)
			modalFactory.create('这是一个标题', status, info) //本质上调用的是 Factory.js 中的 create 方法
		}
	}
	init()
})()


// 🔥🔥写死的方式，缺点是没法抽离代码, 比如 success、warning、等字符串没法抽离
// (() => {
// 	const Modal = document.getElementsByClassName('modal')[0]
// 	const BtnGroup = document.getElementsByClassName('btn-group')[0]

// 	// 👀初始化执行的函数
// 	const init = () => {
// 		bindEvent()
// 	}

// 	// 绑定点击事件, 执行某个函数
// 	function bindEvent() {
// 		BtnGroup.addEventListener('click', handleBtnClick, false)
// 	}


// 	// ⚡️判断点击的是不是按钮
// 	function handleBtnClick(e) {
// 		const ele = e.target
// 		const tagName = ele.tagName.toLowerCase() //转为小写

// 		if(tagName === 'button') {
// 			const status = ele.dataset.status
// 			changeStatus(status)
// 		}
// 	}

// 	// 🔥改变 modal 的状态
// 	function changeStatus(status) {
// 		switch(status) {
// 			case 'success':
// 				Modal.className += 'modal success'
// 				break
// 			case 'warning':
// 				Modal.className += 'modal warning'
// 				break
// 			case 'error':
// 				Modal.className += 'modal error'
// 				break;
// 			default:
// 				break
// 		}
// 	}
// 	init()
// })()