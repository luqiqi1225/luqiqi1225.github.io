var mySwiper = new Swiper('.swiper-container', {
	direction : 'vertical',
	pagination : '.swiper-pagination',
	paginationClickable :true,
	mousewheelControl : true,
	 parallax : true,
	 spaceBetween : 20,
	 slidesPerView : 1,
	 resistanceRatio:0,
})
//专业技能
var arrIcon = ['熟练手写符合w3c标准的HTML页面，熟悉标签语义;了解HTML5中对网页标签的语义强化。','熟练使用css对网页进行自适应布局，了解不同浏览器的兼容性。','熟练掌握JavaScript基本的知识结构，可以使用原生JS实现一些交互效果。','熟悉PHP编程语言，了解前后端的交互流程;能够进行简单的使用。','对node.js有一定的了解，能够进行简单的一些使用。','熟悉jQuery开发框架、ajax工作原理及前后端数据交互，可以熟练进行使用。','熟悉使用bootstrap前端框架，有移动端开发经验，了解JSSDK的使用','熟练使用PhotoShop等美工软件，能够高效的进行切图。','熟练使用Illustrator等美工软件，能使用AI进行图标的设计。','熟悉使用SASS,能够使用它进行css预处理，灵活、便捷。'];
var btnName = ['htmlBtn','cssBtn','jsBtn','phpBtn','nodeBtn','jqueryBtn','bootBtn','psBtn','aiBtn','sassBtn'];
var content = document.getElementById("content");
var btns = document.getElementsByClassName("skills");

for (var i=0;i<btns.length;i++) {
	btns[i].index = i;
	btns[i].onclick=function(){		
		for (var j = 0;j<btns.length;j++) {
			btns[j].id = '';
			content.innerHTML = '';
		}	
		this.id = btnName[this.index];
		content.innerHTML = arrIcon[this.index];
		
	}
}
