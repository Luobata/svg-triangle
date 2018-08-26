!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.triangle=e():t.triangle=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1);e.default=s.a},function(t,e,i){"use strict";var s=i(2),o=i(3);let r=0;e.a=class{constructor(t){this.config=new o.a(t),this.filterId=`data-filter-id${(new Date).getTime()}-${r}`,r+=1,this.update()}update(){this.getPoint(),this.getSVG()}getPoint(){const t={x:this.config.width,y:0};let e,i,s;const o=this.config.radius/Math.sqrt(2);e={x:this.config.width/2,y:this.config.height},i={x:this.config.width/2-o,y:this.config.height-o},s={x:this.config.width/2+o,y:this.config.height-o},this.start={x:0,y:0},this.b1=i,this.b2=s,this.between=e,this.end=t}getSVG(){const t=`M ${this.start.x} ${this.start.y} L ${this.b1.x} ${this.b1.y} A ${this.config.radius} ${this.config.radius} 0 0 0 ${this.b2.x} ${this.b2.y} L ${this.end.x} ${this.end.y}`,e=document.createElementNS("http://www.w3.org/2000/svg","path"),i=document.createElementNS("http://www.w3.org/2000/svg","svg");let s;e.setAttribute("d",t),e.setAttribute("fill",this.config.color),i.setAttribute("height",`${this.between.y>0?this.between.y:-this.between.y}px`),i.setAttribute("width",`${this.end.x}px`),i.setAttribute("fill","transparent"),i.setAttribute("version","1.1"),this.config.border&&(e.setAttribute("stroke-width","1"),e.setAttribute("stroke",this.config.border)),this.config.shadow&&(s=this.getFilter(),i.appendChild(s),i.setAttribute("filter",`url(#${this.filterId})`)),"up"===this.config.direction?i.setAttribute("transform","rotate(180)"):"right"===this.config.direction?i.setAttribute("transform","rotate(90)"):"left"===this.config.direction&&i.setAttribute("transform","rotate(270)"),this.config.className&&i.setAttribute("class",this.config.className),i.appendChild(e),this.triangle=i}getFilter(){const t=Object(s.a)("defs"),e=Object(s.a)("filter",{id:this.filterId,x:"0",y:"0",width:"200%",height:"200%"}),i=Object(s.a)("feOffset",{result:"offOut",in:"SourceAlpha",dx:`${this.config.shadow.offsetX}`,dy:`${this.config.shadow.offsetY}`}),o=Object(s.a)("feColorMatrix",{in:"offOut",result:"matrixOut",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "+`0 0 0 ${this.config.shadow.opacity} 0`}),r=Object(s.a)("feGaussianBlur",{result:"blurOUt",in:"matrixOut",stdDeviation:`${this.config.shadow.blur}`}),n=Object(s.a)("feBlend",{in:"SourceGraphic",in2:"blurOut",mode:"normal"});return e.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(n),t.appendChild(e),t}}},function(t,e,i){"use strict";e.a=((t,e={})=>{const i=document.createElementNS("http://www.w3.org/2000/svg",t),s=Object.keys(e);for(const t of s)i.setAttribute(t,e[t]);return i})},function(t,e,i){"use strict";var s;e.a=class{constructor(t){this.width=10,this.height=10,this.direction=s.down,this.radius=5,this.color="black",this.shadow={},Object.assign(this,t),this.shadow={offsetX:this.shadow.offsetX||0,offsetY:this.shadow.offsetY||2,blur:this.shadow.blur||4,opacity:this.shadow.opacity||.2}}},function(t){t.down="down",t.up="up",t.left="left",t.right="right"}(s||(s={}))}])});
//# sourceMappingURL=triangle.js.map