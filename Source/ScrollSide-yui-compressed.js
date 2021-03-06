/*
---
description:     ScrollSide

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - ScrollSide
...
*/
var ScrollSide=new Class({Implements:[Options,Events],options:{reset:true,movement:75},initialize:function(a,b){this.setOptions(b);this.container=$(a);if(this.options.reset){this.container.scrollTo(0,0);}this.containerWidth=this.container.getScrollSize().x;this.position=this.container.getScroll().x;this.addListeners();},addListeners:function(){var a=(this.container==$(document.body)?window:this.container);a.addEvent("scroll",function(){this.position=this.container.getScroll().x;}.bind(this));this.container.addEvent("mousewheel",function(b){b.stop();if(b.wheel<0){this.fireEvent("onScrollUp",[b]);var c=this.position+this.options.movement;this.position=(c<=this.containerWidth?c:this.containerWidth);}else{this.fireEvent("onScrollDown",[b]);var c=this.position-this.options.movement;this.position=(c>0?c:0);}this.container.scrollTo(this.position,0);}.bind(this));}});