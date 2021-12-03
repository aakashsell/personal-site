var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      this.window.location.href = "#more-info"
   } else {
      this.window.location.href = "#start"
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);