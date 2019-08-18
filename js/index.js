$(function() {
	carousel(
		$('.demo2'), //必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
		{
			type: 'fade', //可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
			arrowtype: 'move', //可选，默认一直显示 - 'move' / 'none'	(鼠标移上显示 / 不显示 )
			autoplay: true, //可选，默认true - true / false (开启轮播/关闭轮播)
			time: 4000 //可选，默认3000
		}
	);
})