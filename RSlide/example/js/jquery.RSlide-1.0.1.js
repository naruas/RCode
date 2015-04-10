
/**
*	Jquery RSlide Plugin-1.0.1 (2015.04.09)
*	Author : hiroinaru
*	Description : This plugin can set a elements to change value of defaults after new Constructor is created.
*
*	How to :
*		1. to create New Constructor
*		2. to send parameters into Constructor as A Class name of wrapping element , speed and interval only 3 parameters.
*		3. to override as adding Functions in Instance , if you are expected to extend for another functionality.
*/


function FluidSlide(wrapper,spd,seconds){
	
	this.wrapper = wrapper; // class name for all wrapping element
	this.scroll = $(this.wrapper).find(".scroll"); // moving list
	this.list = $(this.wrapper).find(".list"); // list wrapper
	this.item = $(this.wrapper).find(".item"); // items
	this.btnNext = $(this.wrapper).find(".btn-next"); // right button
	this.btnPrev = $(this.wrapper).find(".btn-prev"); // left button
	this.paging = $(this.wrapper).find(".paging a"); // page 
	this.currentNum = 0; // current count
	this.selectedNum = 0; // selected count
	this.spd = spd; // speed
	this.seconds = seconds; // interval milliseconds (1000 = 1 seconds)
	this.dir = "next"; // sliding direction
	this.chk = false; // whether slide is finished or not
	this.firstChk = true; // just one execute
	this.timer = undefined; // setInterval 
	var $this = this;
	
	this.btnPrev.on({
		"click" : function(){
			$this.rotatePrev($this);
		},
		"mouseover" : function(){
			$this.endTimer();
		},
		"mouseout" : function(){
			$this.startTimer();
		}
	});

	this.btnNext.on({
		"click" : function(){
			$this.rotateNext($this);
		},
		"mouseover" : function(){
			$this.endTimer();
		},
		"mouseout" : function(){
			$this.startTimer();
		}
	});

	this.startTimer();
};

FluidSlide.prototype = 
{
		rotateNext : function(obj)
		{
			
			if(!obj.chk){
				obj.dir = "next";
				obj.chk = true;
				obj.currentNum++;
				obj.selectedNum = obj.currentNum%obj.item.length;
				obj.list.animate({
					left:-obj.item.width()
				},obj.spd,function(){
					obj.chk = false;
					$(this).css({"left":"0"});
					obj.list.append(obj.wrapper.find("li").eq(0));
				});
				obj.setChange(obj.paging,obj.selectedNum);
			}
		},
		
		rotatePrev : function(obj)
		{
			if(!obj.chk){
				obj.dir = "prev";
				obj.chk = true;
				obj.currentNum--;
				if(obj.currentNum <= 0) obj.currentNum = obj.item.length;
				if(obj.firstChk) {
					obj.selectedNum = obj.item.length-1;
					obj.firstChk = false;
					obj.currentNum = obj.item.length-1;
				}else{
					obj.selectedNum = obj.currentNum%obj.item.length;
				}
				obj.list.prepend(obj.wrapper.find("li").eq(obj.item.length-1));
				obj.list.css("left",-obj.item.width());
				obj.list.animate({
					left:0
				}, obj.spd, function(){
					obj.chk = false;
					$(this).css({"left":"0"});
				});
				obj.setChange(obj.paging,obj.selectedNum);
			}
		},
		
		setRotate : function(obj)
		{
			if(obj.dir == "next") obj.rotateNext(obj);
			else obj.rotatePrev(obj);
			obj.setChange(obj.paging,obj.selectedNum);
		},
		
		startTimer : function()
		{
			this.timer = setInterval(this.setRotate,this.seconds,this);
		},
		
		endTimer : function()
		{
			clearInterval(this.timer);
		},
		
		updateScreenSize : function(){
			var screenWidth;
			if($(window).width() >= 980){ // max width of window
				screenWidth = 980 - this.btnNext.width()*2; // max width of sliding images
			}else{
				screenWidth = $(window).width();
			}
			
			var totalWidth = screenWidth * this.item.length;
			this.item.css({"width":screenWidth});
			this.list.css({"width":totalWidth});
			this.scroll.css({"width":screenWidth});
			console.log(screenWidth);
		},
		
		pagingChange : function(pMc,pNum)
		{
			pMc.each(function(){
				$(this).removeClass("on");
			});
			pMc.eq(pNum).removeClass("on").addClass("on");
		},

		/*
		 *  Below is additional functionality as override so that continuously to make new functions as below. 
		 *  to override as adding Functions where Class Instance is created , if you are expected to extend for another functionality.
		 */
		bgColorChange : function(pNum){
			// base
		},
		
		txtChange : function(pNum){
			// base
		},
		
		setChange : function(pMc,pNum){
			this.pagingChange(pMc,pNum);
			
			// add overriding functions
			this.bgColorChange(pNum);
			this.txtChange(pNum);
		}
}

