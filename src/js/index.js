;(function(global, $, undefined){
	'use strict';

	var $menu = null;
	var $contents = null;
	var $select_menu = null;
	var $select_content = null;

	init();
	initEvent();

	function init(){
		$menu = $('a', '.tab-menu');
		$contents = $('p', '.tab-menu');
		$select_menu = $menu.eq(0);
		$select_content = $contents.eq(0);
	};
	
	function initEvent() {
		$select_menu.addClass('select');
		$select_content.addClass('select');
		$menu.on('click', function(event){
			event.preventDefault();
			 menuClickEvent.call(this);
		});
	};

	// 선택 메뉴의 class이름에 'select 추가' 및 기존 select 메뉴 비활성화
	function menuClickEvent(event) {
		var class_name = this.getAttribute('class');
		var $this = $(this);
		$select_menu.removeClass('select');
		// this.setAttribute('class',class_name + ' select');
		$this.addClass('select');
		$select_menu = $this;

		$select_content.removeClass('select');
		$select_content = $this.next();
		$select_content .addClass('select');
		// console.log($this.next());/**/
	};


})(window, window.jQuery);