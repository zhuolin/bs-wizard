!function(){var t,e,n,s;t=jQuery,s="bs_wizard",n="plugin_"+s,t.fn[s]=function(r){var a,o,i;return"string"==typeof arguments[0]?(o=arguments[0],a=Array.prototype.slice.call(arguments,1),i=[],this.each(function(){var e;if(e=t.data(this,n),e&&"function"==typeof e[o])return a.length>0?i.push(e[o].apply(this,a)):i.push(e[o]);throw new Error("Method "+o+" does not exist on jQuery. "+s)}),(i.length=1)?i[0]:i):"object"!=typeof r&&r?void 0:this.each(function(){return t.data(this,n)?void 0:t.data(this,n,new e(this,r))})},t.fn[s].defaults={currentStep:1,addButtons:!0,sidebar:".bs-wizard-sidebar",activeClass:"bs-wizard-active",completedClass:"bs-wizard-completed",todoClass:"bs-wizard-todo",stepClass:"bs-wizard-step",nextText:"Next Step",backText:"Go Back",nextType:"submit",backType:"reset",nextClasses:"btn btn-primary",backClasses:"btn btn-default",beforeNext:function(){return!0},onNext:function(){return!0},beforeBack:function(){return!0},onBack:function(){return!0},onInit:function(){return!0},onDestroy:function(){return!0}},e=function(e,r){var a,o,i,u,l,p,c,d,b,f,h,v;return b=function(){return r.addButtons&&(i(),t("."+r.stepClass,a).children("button[type='"+r.nextType+"']").click(p),t("."+r.stepClass,a).children("button[type='"+r.backType+"']").click(c)),o(),d("onInit")},i=function(){var e,n,s,o,i,u;for(i=t("<div/>",{"class":r.stepClass}).append(t("<button/>",{"class":r.nextClasses,type:r.nextType,text:r.nextText})),o=t("<div/>",{"class":r.stepClass}).append(t("<button/>",{"class":r.backClasses,type:r.backType,text:r.backText})).append(" ").append(t("<button/>",{"class":r.nextClasses,type:r.nextType,text:r.nextText})),e=t(".bs-step .bs-step-inner form",a),0===e.length&&(e=t(".bs-step .bs-step-inner",a)),s=e.length-1,n=0,u=[];s>n;)0===n?t(e[0]).append(i):t(e[n]).append(t(o).clone()),u.push(n++);return u},o=function(e){var n,s;return null==e&&(e=null),n=t(".bs-step",a),null===e?e=r.currentStep:r.currentStep=e,e>=1&&e<=n.length?(s=e-1,n.hide(),t(n[s]).show(),t(r.sidebar,a).children("li."+r.todoClass).removeClass(r.activeClass),t(t(r.sidebar,a).children("li."+r.todoClass)[s]).addClass(r.activeClass)):void 0},p=function(e){var n;return null!=e&&e.preventDefault(),n=t(this).parents(".bs-step-inner")[0],null!=n&&d("beforeNext",n)?(t(t(r.sidebar,a).children("li."+r.todoClass)[r.currentStep-1]).addClass(r.completedClass),o(r.currentStep+1),d("onNext",n)):void 0},c=function(e){var n;return null!=e&&e.preventDefault(),n=t(this).parents(".bs-step-inner")[0],null!=n&&d("beforeBack",n)?(o(r.currentStep-1),d("onPrev",n)):void 0},v=function(t){return o(t)},f=function(t,e){return e?r[t]=e:r[t]},u=function(){return d("onDestroy")?t.data(this,n,null):void 0},d=function(t){var e;return null!=r[t]?(e=r[t],arguments[0]=l,e.apply(this,arguments)):void 0},l=e,a=t(e),r=t.extend({},t.fn[s].defaults,r),b(),h={option:f,destroy:u,go_next:p,go_prev:c,show_step:v}}}.call(this);