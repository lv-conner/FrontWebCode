$(function() {
    HomePage.init();
})

var HomePage = {
    init: function() {
        this.initEvent();
    },
    initIframeHeigt: function() {
        let heigth = window.screen.height - 50;

    },
    initEvent: function() {
        $(".menuItem").on("click", function(e) {
            $("#bingFrame").prop("src", e.target.href);
            return false;
        })
    }
}