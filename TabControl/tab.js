$(function() {
    $(".tab-list div a").on("click", function() {
        debugger;
        var id = this.hash;
        $(".tab-item-active").removeClass("tab-item-active");
        $("[tabId=" + id + "]").addClass("tab-item-active");
    })
})