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
			const modal = modalFactory.create('这是一个标题', status, info) //本质上调用的是 Factory.js 中的 create 方法

			/* 🔥如果有错误信息，就返回错误信息, 本质上是调用的 Modal 类中暴露出来的 outPutInfo 方法!!
			*/
			switch(status) {
				case 'success':
					modal.goToHome('https://www.google.com')
					break
				case 'warning':
					modal.outPutInfo('具体的警告提示信息具体的警告提示信息具体的警告提示信息')
					break
				case 'error':
					modal.outPutInfo('具体的错误提示信息具体的错误提示信息具体的错误提示信息')
					break
				default:
					break			
			}
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



//References: https://www.bilibili.com/video/BV1Py4y1D7TA?p=3&vd_source=b67f9398d85e7e297041f47a430b16cb