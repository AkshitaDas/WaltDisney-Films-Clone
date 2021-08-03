gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(ScrollToPlugin);const players=Array.from(document.querySelectorAll(".video-player")).map((p=>new Plyr(p)));function toggleNav(event){event.preventDefault(),$("#mainnav").toggleClass("active"),$(".nav-icon-contain").toggleClass("close"),$("#primarynav").attr("aria-expanded",(function(i,attr){return attr&&trapFocus(document.getElementById("mainnav")),"true"==attr?"false":"true"}))}$(document).on("click","button.navbar-toggler",toggleNav),$(document).on("click","nav .overlay",(function(event){event.preventDefault(),$("#mainnav").removeClass("active"),$(".nav-icon-contain").removeClass("close")}));const hero_scroll=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:!0,pin:!0,pinSpacing:!1}});$("#hero img").length>0&&hero_scroll.to("#hero img",{duration:2,opacity:.6,y:-200}),$("#hero video").length>0&&hero_scroll.to("#hero video",{duration:2,opacity:.6,y:-200},"<"),$("#hero-text").length>0&&hero_scroll.to("#hero-text",{duration:2,opacity:.6,y:"-150%"},"<");const pinNav=ScrollTrigger.create({trigger:".hero-contain",start:"top 10px",end:"bottom 50px",toggleClass:{targets:"#mainnav",className:"hero-nav"},id:"pin nav"});if(document.querySelectorAll("#filter").length>0){ScrollTrigger.matchMedia({"(min-width: 825px)":function(){ScrollTrigger.create({trigger:"#filter",start:"top top",end:"+=9999999999",pin:!0,anticipatePin:1})},"(max-width: 824px)":function(){ScrollTrigger.create({trigger:"#filter",start:"top 49px",end:"+=9999999999",pin:!0,anticipatePin:1,toggleClass:{targets:"#mainnav",className:"filter-pinned"}})}}),ScrollTrigger.create({trigger:".contains-filter",start:"bottom 100",end:"+=9999999999",toggleClass:"pinned"})}function lazyLoadBgVideo(element){const stream=element.querySelector("[data-bg-src-stream]"),src_stream=stream?stream.dataset.bgSrcStream:null,hd=element.querySelector("[data-bg-src-hd]"),src_hd=hd?hd.dataset.bgSrcHd:null,sd=element.querySelector("[data-bg-src-sd]"),src_sd=sd?sd.dataset.bgSrcSd:null;stream&&stream.setAttribute("src",src_stream),hd&&hd.setAttribute("src",src_hd),sd&&sd.setAttribute("src",src_sd),element.load()}const lazyLoad=ScrollTrigger.batch("[data-lazy-type]",{start:"top 125%",end:"bottom -9999",once:!0,onEnter:(elements,triggers)=>{for(var i=0;i<elements.length;i++)lazyLoadBatch(elements[i]),elements[i].dataset.eye&&ScrollTrigger.refresh()},onEnterBack:(elements,triggers)=>{for(var i=0;i<elements.length;i++)lazyLoadBatch(elements[i]),elements[i].dataset.eye&&ScrollTrigger.refresh()}});function lazyLoadBatch(item){"image"==item.dataset.lazyType&&(item.src=item.dataset.lazySrc,item.classList.add("lazy-loaded")),"video"==item.dataset.lazyType&&(item.src=item.dataset.lazySrc),"bg-video"==item.dataset.lazyType&&lazyLoadBgVideo(item)}let sketchBGAnimations=gsap.utils.toArray(".sketch-bg-contain");for(let i=0;i<sketchBGAnimations.length;i++){let sketch=sketchBGAnimations[i];sketch.bg=sketch.querySelector(".sketch-bg"),sketch.image=sketch.bg.querySelector("img"),sketch.p=sketch.querySelector("p"),sketch.header=sketch.querySelector("h2"),sketch.btn=sketch.querySelector(".btn:not(#toggleCategories):not(.btn-process-nav)");const tl=gsap.timeline({scrollTrigger:{trigger:sketch,start:"top 80%",toggleActions:"restart none none none",id:"sketch"},defaults:{ease:"power4.out"}}).fromTo(sketch.image,{scale:1.4,opacity:0},{scale:1,opacity:1,duration:4},">").fromTo(sketch.header,{opacity:0,yPercent:25},{opacity:1,yPercent:0,duration:1},"<0.5").fromTo(sketch.p,{opacity:0,yPercent:10},{opacity:1,duration:1,yPercent:0},"<0.4");sketch.btn&&tl.fromTo(sketch.btn,{opacity:0},{opacity:1,duration:1},"<"),ScrollTrigger.create({trigger:sketch,start:"top bottom",onLeaveBack:()=>tl.pause(0)})}function changeImage(){let changeImageItems=document.querySelectorAll("[data-eye]"),current=document.querySelector(".active[data-eye]").dataset.eye;changeImageItems.forEach(((item,i)=>{item.classList.remove("active"),item.dataset.eye!==current&&item.classList.add("active"),document.querySelector("#direction").innerHTML="right"==current?"left":"right"}))}ScrollTrigger.matchMedia({"(max-width: 824px)":function(){gsap.timeline({scrollTrigger:{trigger:".overview",pin:!0,start:"top top",id:"overview",scrub:1,end:"+=700"}}).to("#introvideo",{scale:.9,height:"41.875vw",opacity:.4,duration:1,delay:.2,top:"15%",transformOrigin:"center top"}).fromTo(".overview .intro-text",{opacity:0,yPercent:50},{opacity:1,yPercent:10,duration:1},"<0.5")},"(min-width: 825px)":function(){gsap.timeline({scrollTrigger:{trigger:".overview",pin:!0,start:"top top",id:"overview",scrub:1,end:"+=700"}}).to("#introvideo",{scale:.6,height:"41.875vw",opacity:.4,duration:1,delay:.2}).fromTo(".overview .intro-text",{opacity:0,yPercent:50},{opacity:1,yPercent:0,duration:1},"<0.5")},all:function(){gsap.fromTo(".sequence-images img",{opacity:0,scale:.8},{opacity:1,scale:1,stagger:.3,duration:.3,scrollTrigger:{start:"top 80%",trigger:".sequence-images",end:"center center",scrub:1,id:"img"}},"<"),gsap.timeline({scrollTrigger:{trigger:".sequence-images",pin:!0,start:"center center",endTrigger:".sequences-text-2",end:"center center",id:"seq",scrub:1,pinSpacing:!1}}).to(".sequence-images",{opacity:.2,duration:2},">5").to(".sequences-text-2",{duration:20},">");gsap.utils.toArray(".shot-images-row").forEach(((row,i)=>{gsap.fromTo(row,{yPercent:10,opacity:0},{yPercent:0,opacity:1,duration:1,scrollTrigger:{trigger:row,start:"top 90%",end:"top 85%",scrub:1}})}));gsap.timeline({scrollTrigger:{trigger:".shot-images",start:"center center",endTrigger:".shots-text-2",end:"bottom -10%",scrub:1,pin:!0,pinSpacing:!1}}).to(".shot-images-row-left",{xPercent:-103,duration:20},">").to(".shot-images-row-right",{xPercent:103,duration:20},"<").to(".shot-images",{opacity:.2,duration:2},"<2"),gsap.fromTo(".frame",{scale:.7},{scale:1,scrollTrigger:{trigger:".frame",start:"top 30%",end:"top top",scrub:1}}),gsap.timeline({scrollTrigger:{trigger:".frames-container",pin:!0,start:"top top",end:"+=1500",pinSpacing:!0,scrub:1}}).fromTo(".frames-text-1",{yPercent:150,opacity:0},{yPercent:50,opacity:1,duration:1},">2").fromTo(".frame-count",{opacity:0},{opacity:1,duration:1},">").add((()=>{let tl=gsap.timeline();gsap.utils.toArray(".frame").forEach(((frame,i)=>{let number=(i+1).toString();1===number.length&&(number="0"+number),tl.to(frame,{opacity:1,duration:.1,onStart:()=>{document.querySelector(".frame-count p span").innerHTML=number},onReverseComplete:()=>{document.querySelector(".frame-count p span").innerHTML=number}},">2")}));return tl})(),">").to(".frames-text-1",{yPercent:-50,opacity:0,duration:1},"<22").fromTo(".frames-text-2",{yPercent:100,opacity:0},{yPercent:-50,opacity:1,duration:1},"<7").to(".frames-container",{opacity:1,duration:2},">").to(".frames-text-2",{yPercent:-150,duration:1},"<");const num={var:0},frameNumber=document.querySelector("#frame-number"),stereoNumber=document.querySelector("#stereo-number"),total=frameNumber.dataset.frameNumber;snum={var:total},frameNumber.innerHTML=(0).toFixed().padStart(6,"0");gsap.timeline({scrollTrigger:{trigger:"#frame-number",start:"top top",pin:!0,scrub:.75,endTrigger:".count-text-1",end:"top center",pinSpacing:!1}}).to(num,{var:total,onUpdate:function changeNumber(){frameNumber.innerHTML=num.var.toFixed().padStart(6,"0")},duration:1}),gsap.timeline({scrollTrigger:{trigger:"#stereo-number",start:"top top",pin:!0,scrub:.75,endTrigger:".count-text-2",end:"top center",pinSpacing:!1}}).to(snum,{var:2*total,onUpdate:function changeNumberS(){stereoNumber.innerHTML=snum.var.toFixed().padStart(6,"0")},duration:1},">");gsap.timeline({scrollTrigger:{trigger:".wrap-container",start:"center center",endTrigger:".wrap-text-container",end:"center center",scrub:1,pin:!0,pinSpacing:!1,anticipatePin:1}}).fromTo(".compare-image.after",{xPercent:100,x:0},{xPercent:0,duration:9},"<").fromTo(".compare-image.after img",{xPercent:-100,x:0},{xPercent:0,duration:9},"<").to(".wrap-container",{opacity:.2,duration:1},"<1").to(".wrap-container",{opacity:0,duration:2},">11"),gsap.fromTo(".wrap-text-2",{opacity:0},{duration:1,opacity:1,scrollTrigger:{trigger:".wrap-text-2",start:"center center",end:"+=100",pin:!0,scrub:1}}),gsap.fromTo("#development",{opacity:0},{opacity:1,scrollTrigger:{trigger:"#development",start:"top 30%",end:"top 15%",scrub:!0}})}}),ScrollTrigger.create({trigger:".eye-images",start:"top center",onEnter:()=>{for(var i=0;i<5;i++)setTimeout((function(){changeImage()}),600*i)},toggleActions:"restart play play restart"}),gsap.fromTo(".eye-images",{yPercent:10,opacity:0},{yPercent:0,opacity:1,duration:1,scrollTrigger:{trigger:".eye-images",start:"top 90%",end:"top 85%",scrub:1}});let stackCount=-1*document.querySelector(".stack").dataset.stackCount;gsap.utils.toArray(".stack-container").forEach(((el,j)=>{el.querySelectorAll(".stack-image").forEach(((item,i)=>{let translate=stackCount+2*i;item.classList.contains("start")||gsap.to(item,{rotationX:10,scale:.7,rotationY:-45,skewX:10,skewY:-7,z:40*i,rotation:0,xPercent:translate,yPercent:translate,rotate:0,duration:0},">")}))})),gsap.to([".assets-stack-container .stack-image.development",".shots-stack-container .stack-image.development",".shots-stack-container .stack-image.assets",".shots-stack-container .stack-image.development",".shots-stack-container .stack-image.assets",".end-stack-container .stack-image"],{opacity:1,duration:0},">");const stepFeatures=gsap.utils.toArray(".step-feature").forEach(((item,i)=>{item.text=item.querySelector(".step-feature-text"),item.bg=item.querySelector(".step-feature-bg"),gsap.fromTo(item.text,{yPercent:50},{yPercent:-50,scrollTrigger:{trigger:item,start:"top 90%",end:"bottom top",scrub:1}})}));let linkboxFadeIn=gsap.utils.toArray(".link-box");for(var i=0;i<linkboxFadeIn.length;i++){let box=linkboxFadeIn[i];gsap.timeline({scrollTrigger:{trigger:box,start:"top 90%",toggleActions:"restart none none reverse"}}).fromTo(box,{opacity:0},{opacity:1,duration:.7})}let textFlip=gsap.utils.toArray(".text-flip");for(i=0;i<textFlip.length;i++){let row=textFlip[i];row.overlay=row.querySelector(".animate-overlay"),row.header=row.querySelector("h3"),row.p=row.querySelector("p");const tl=gsap.timeline({scrollTrigger:{trigger:row,start:"top 80%",end:"top 100%",toggleActions:"restart none none none"},defaults:{ease:"power4.out"}}).to(row.overlay,{scaleX:0,duration:2},">");i%2==0?(tl.fromTo(row.header,{opacity:0,xPercent:25},{opacity:1,xPercent:0,duration:1},"<0.5"),tl.fromTo(row.p,{opacity:0,xPercent:10},{opacity:1,duration:1,xPercent:0},"<0.4")):(tl.fromTo(row.header,{opacity:0,xPercent:-25},{opacity:1,xPercent:0,duration:1},"<0.5"),tl.fromTo(row.p,{opacity:0,xPercent:-10},{opacity:1,duration:1,xPercent:0},"<0.4")),ScrollTrigger.create({trigger:row,start:"top bottom",onLeaveBack:()=>tl.pause(0)})}let devStackTl=gsap.timeline({scrollTrigger:{trigger:".development-stack-container",start:"top top",scrub:1,pin:!0,endTrigger:".development-intro-text",end:"center center",pinSpacing:!1,anticipatePin:1,immediateRender:!1}}).fromTo(".development-stack-container",{background:"#272727"},{background:"#A36836",duration:1},"<").to(".development-stack-container .stack-image.first-image",{rotationX:10,scale:.7,rotationY:-45,xPercent:stackCount,yPercent:stackCount,skewX:10,skewY:-7,duration:.5},"<").to(".development-stack-container .stack-image",{opacity:1,duration:.5,stagger:.5},">1").to(".development-stack-container .stack",{opacity:.15,duration:2},">2").to(".development-stack-container .stack-image.development",{duration:3},">");gsap.fromTo(".assets-stack-container",{background:"#A36836"},{background:"#A75246",duration:1,scrollTrigger:{trigger:".assets-stack-container",start:"top center",end:"top top",scrub:!0}},">");let assetStackTl=gsap.timeline({scrollTrigger:{trigger:".assets-stack-container",start:"top top",scrub:1,pin:".assets-stack-container .stack",endTrigger:".assets-intro-text",end:"center center",pinSpacing:!1,anticipatePin:1,immediateRender:!1}}).to(".assets-stack-container .stack-image.assets",{opacity:1,duration:.5,stagger:.5},"<").to(".assets-stack-container .stack",{opacity:.15,duration:2},">2").to(".assets-stack-container .stack-image.assets",{duration:5},">");gsap.fromTo(".shots-stack-container",{background:"#A75246"},{background:"#696B55",duration:1,scrollTrigger:{trigger:".shots-stack-container",start:"top center",end:"top top",scrub:!0}},">");let shotStackTl=gsap.timeline({scrollTrigger:{trigger:".shots-stack-container",start:"top top",scrub:1,pin:!0,endTrigger:".shots-intro-text",end:"center center",pinSpacing:!1,immediateRender:!1}}).to(".shots-stack-container .stack-image.shots",{opacity:1,duration:.5,stagger:.5},"<").to(".shots-stack-container .stack",{opacity:.15,duration:2},">2").to(".shots-stack-container .stack-image.shots",{duration:5},">"),resetCloseStack=gsap.timeline({scrollTrigger:{trigger:".end-stack-container",start:"top 150%"}});gsap.fromTo(".end-stack-container",{background:"#696B55"},{background:"#462B11",duration:1,scrollTrigger:{trigger:".end-stack-container",start:"top center",end:"top top",scrub:!0}},">");let closingTl=gsap.timeline({scrollTrigger:{trigger:".end-stack-container",start:"top top",scrub:1,pin:".end-stack-container .stack-end",endTrigger:".end-intro-text",end:"center center",pinSpacing:!1,immediateRender:!1}}),endStackFromTo=gsap.utils.toArray(".end-stack-container .stack-image").forEach(((el,i)=>{let translate=stackCount+2*i;closingTl.fromTo(el,{rotationX:10,scale:.7,rotationY:-45,skewX:10,skewY:-7,z:40*i,rotation:0,xPercent:translate,yPercent:translate,rotate:0,boxShadow:"0 0 20px rgba(0,0,0,0.5)"},{xPercent:0,yPercent:0,z:0,duration:1},"<")}));closingTl.to(".stack-end .stack-image:not(.last)",{opacity:0,duration:0},">").to(".stack-end .last",{z:0,rotateY:0,rotateX:0,skewX:0,skewY:0,scale:1,opacity:1,boxShadow:"0 0 0 rgba(0,0,0,0)",duration:1},">2").to(".end-stack-container .stack",{opacity:.15,duration:2},">2").to(".end-stack-container",{duration:3},">"),gsap.utils.toArray(".scroll-to[data-jump]").forEach(((item,i)=>{let section=item.dataset.jump;item.addEventListener("click",(function(e){gsap.to(window,{duration:.3,scrollTo:`#${section}`})})),ScrollTrigger.create({trigger:`#${section}`,start:"top top",end:"bottom top",toggleClass:{targets:item,className:"active"}})})),gsap.utils.toArray(".process-scroll-to [data-jump]").forEach(((item,i)=>{let section=item.dataset.jump;item.addEventListener("click",(function(e){event.preventDefault(),gsap.to(window,{duration:.3,scrollTo:{y:`#${section}`,offsetY:50}})}))}));const trapFocus=el=>{const focusableEls=el.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),firstFocusableEl=focusableEls[0],lastFocusableEl=focusableEls[focusableEls.length-1];el.addEventListener("keydown",(e=>{const isTabPressed="Tab"===e.key||9===e.keyCode,isSpacePressed="Space"===e.key||32===e.keyCode||" "===e.key;if("Escape"===e.key||27===e.keyCode)return document.querySelector("#mainnav.active")&&toggleNav(e),void(document.querySelector(".dropdown.show")&&($(".dropdown, .dropdown-menu").toggleClass("show"),$("#toggleCategories").attr("aria-expanded",!1)));isSpacePressed&&(e.preventDefault(),e.target.checked=!e.target.checked,e.target.classList.contains("filter-checkbox-roles")?roleFilterRefresh():e.target.classList.contains("filter-checkbox-publications")&&publicationFilterRefresh(),e.target.focus()),(isTabPressed||isSpacePressed)&&(e.shiftKey?document.activeElement===firstFocusableEl&&(lastFocusableEl.focus(),e.preventDefault()):document.activeElement===lastFocusableEl&&(firstFocusableEl.focus(),e.preventDefault()))}))};