/*
  Copyright 2010, 2011 Genuitec, LLC
  Licensed under the MobiOne Studio End User License, (the "License");
  This header will appear in all HTML files generated by MobiOne Studio(tm)
  operating in "trial" mode.  While in trial mode, you may only use
  MobiOne for evaluation.  You may not use the trial version of MobiOne
  for any commercial, enterprise or corporate (for profit or nonprofit)
  purpose unless expressly licensed to do otherwise.  You may not modify
  or remove this header for any reason prior to purchasing and activating
  a license for MobiOne.  Upon activation,  MobiOne will not generate
  this header.  You may obtain a copy of the MobiOne License at
  
  http://genuitec.com/mobile/mobione/1.0/LICENSE.html
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var m1Design = function() { m1Design = {}; var d="#m1-inicio";var f="0px";var g="1000";var h="5px";var i="9px";var j="Created by MobiOne Studio - Free Trial";var k="Helvetica";var l="NEVER";var m="_resizing";var n="a";var o="absolute";var p="addEventListener";var q="ajaxPageReloadApproach";var r="appendChild";var s="body";var t="color";var u="createElement";var v="css";var w="document";var x="e0";var y="e1";var z="e2";var A="e3";var B="e4";var C="e5";var D="e6";var E="e7";var F="e8";var G="fontFamily";var H="fontSize";var I="href";var J="http://genuitec.com/mobile/buy.html";
var K="inicio";var L="innerText";var M="load";var N="m1-";var O="m1-inicio-image1";var P="m1-inicio-image2";var Q="m1-inicio-image3";var R="m1-inicio-image4";var S="m1-inicio-image5";var T="m1-inicio-image6";var U="m1-inicio-panel1";var V="m1-inicio-text1";var W="pages";var X="position";var Y="px";var Z="red";var $="right";var aa="root";var ba="shouldHideAddressBar";var ca="softSpinnerEnabled";var da="style";var ea="top";var fa="zIndex";
(function(){var ga=function(c){return N+c};var ha={"inicio":{"id":K,"anchor_id":d,"resize":function(c,b){var a;var e={};var ia;a=e[y]={w:c,h:b,py:0};try{a=e[x]={e:document.getElementById(U),w:0,h:0,py:0,p:e[y]};a.w=Math.max((a.p.w+-0.0)*1,0);a.e.style.height=Math.max((a.p.h+-0.0)*1,0)+Y;a.e.style.top=0+-a.p.py+Y;a.h=Math.max((a.p.h+-0.0)*1,0);a.p.py=a.p.py+Math.max(Math.max((a.p.h+-0.0)*1,0),1+1)}catch(ja){}try{a=e[z]={e:document.getElementById(O),w:0,h:0,py:0,p:e[x]};a.e.style.width=Math.min(222,
2147483647,153*phoneui._calcAR(a.e,1.4603,this,c,b))+Y;a.e.style.left=(a.p.w+-222)*0.5074+(222+-Math.min(222,2147483647,153*phoneui._calcAR(a.e,1.4603,this,c,b)))*1/2+Y;a.w=Math.min(222,2147483647,153*phoneui._calcAR(a.e,1.4603,this,c,b));a.e.style.height=Math.min(153,2147483647,Math.min(222,2147483647,153*phoneui._calcAR(a.e,1.4603,this,c,b))*1/phoneui._calcAR(a.e,1.4603,this,c,b))+Y;a.e.style.top=(a.p.h+-153)*0.1143+(153+-Math.min(153,2147483647,Math.min(222,2147483647,153*phoneui._calcAR(a.e,1.4603,
this,c,b))*1/phoneui._calcAR(a.e,1.4603,this,c,b)))*1/2+-a.p.py+Y;a.h=Math.min(153,2147483647,Math.min(222,2147483647,153*phoneui._calcAR(a.e,1.4603,this,c,b))*1/phoneui._calcAR(a.e,1.4603,this,c,b));a.p.py=a.p.py+Math.max(Math.min(153,2147483647,Math.min(222,2147483647,153*phoneui._calcAR(a.e,1.4603,this,c,b))*1/phoneui._calcAR(a.e,1.4603,this,c,b)),0)}catch(ka){}try{a=e[A]={e:document.getElementById(P),w:0,h:0,py:0,p:e[x]};a.e.style.width=Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))+
Y;a.e.style.left=29+(64+-Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b)))*1/2+Y;a.w=Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b));a.e.style.height=Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.top=915+(64+-Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)))*1/2+-a.p.py+Y;a.h=Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,
1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b));a.p.py=a.p.py+Math.max(Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)),1+1)}catch(la){}try{a=e[B]={e:document.getElementById(Q),w:0,h:0,py:0,p:e[x]};a.e.style.width=Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.left=93+(64+-Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b)))*1/2+Y;a.w=Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b));a.e.style.height=
Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.top=915+(64+-Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)))*1/2+-a.p.py+Y;a.h=Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b));a.p.py=a.p.py+Math.max(Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/
phoneui._calcAR(a.e,1,this,c,b)),1+1)}catch(ma){}try{a=e[C]={e:document.getElementById(R),w:0,h:0,py:0,p:e[x]};a.e.style.width=Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.left=159+(64+-Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b)))*1/2+Y;a.w=Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b));a.e.style.height=Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.top=915+(64+-Math.min(64,
2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)))*1/2+-a.p.py+Y;a.h=Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b));a.p.py=a.p.py+Math.max(Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)),1+1)}catch(na){}try{a=e[D]={e:document.getElementById(S),w:0,h:0,py:0,p:e[x]};a.e.style.width=Math.min(65,2147483647,64*
phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.left=223+(65+-Math.min(65,2147483647,64*phoneui._calcAR(a.e,1,this,c,b)))*1/2+Y;a.w=Math.min(65,2147483647,64*phoneui._calcAR(a.e,1,this,c,b));a.e.style.height=Math.min(64,2147483647,Math.min(65,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.top=915+(64+-Math.min(64,2147483647,Math.min(65,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)))*1/2+-a.p.py+Y;a.h=Math.min(64,2147483647,
Math.min(65,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b));a.p.py=a.p.py+Math.max(Math.min(64,2147483647,Math.min(65,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)),1+1)}catch(oa){}try{a=e[E]={e:document.getElementById(V),w:0,h:0,py:0,p:e[x]};a.w=59;a.e.style.height=19+Y;a.e.style.top=882+-a.p.py+Y;a.h=19;a.p.py=a.p.py+Math.max(19,0)}catch(pa){}try{a=e[F]={e:document.getElementById(T),w:0,h:0,py:0,p:e[x]};a.e.style.width=Math.min(64,
2147483647,64*phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.left=288+(64+-Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b)))*1/2+Y;a.w=Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b));a.e.style.height=Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b))+Y;a.e.style.top=915+(64+-Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)))*1/2+-a.p.py+Y;a.h=Math.min(64,
2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b));a.p.py=a.p.py+Math.max(Math.min(64,2147483647,Math.min(64,2147483647,64*phoneui._calcAR(a.e,1,this,c,b))*1/phoneui._calcAR(a.e,1,this,c,b)),1+1)}catch(qa){}}}};window[p](M,function(){var c=window[w][s];var b=window[w][u](n);b[L]=j;b[I]=J;var a=b[da];a[X]=o;a[G]=k;a[H]=i;a[t]=Z;a[ea]=f;a[$]=h;a[fa]=g;c[r](b)});m1Design[v]=ga;m1Design[W]=ha;m1Design[m]={};m1Design[q]=l;m1Design[ca]=true;m1Design[ba]=
true;m1Design[aa]=function(){return K}})(); return m1Design; }();m1Design.actions={'action0':function() { phoneui.showURL('http://m.facebook.com/pages/Escolaris/283256055071532', '_blank', {});},
'action2':function() { phoneui.showURL('http://twitter.com/escolaris', '_blank', {});},
'action3':function() { phoneui.showURL('http://www.linkedin.com/pub/héctor-serrano-luna/47/824/919', '_blank', {});},
'action1':function() { phoneui.showURL('https://plus.google.com/107305576718927505449/', '_blank', {});},
'action4':function() { phoneui.showURL('https://www.youtube.com/user/a77a77fdfds', '_blank', {});}};
;