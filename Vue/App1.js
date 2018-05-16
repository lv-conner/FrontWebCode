// var app = new Vue({
//     el: "#app",
//     data: {
//         message: "Hello word"
//     }
// });

var headerComponent = {
    template: "<h1>Header</h1>"
}
var contentComponent = {
    template: "<h2>Content</h2>"
}

var compent = {
    template: '<div><headerComponent></headerComponent><contentComponent></contentComponent></div>',
    components: {
        "headerComponent": headerComponent,
        "contentComponent": contentComponent,
    }
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    components: {
        "compent": compent
    }
});






// 注册
// var headerTitle = {
//     template: '<p>我是标题</p>',
// };
// var headerContent = {
//     template: '<p>我是内容</p>',
// };
// var header = {
//     template: `
//       <div class="hd">
//             <header-content></header-content>
//             <header-title></header-title>
//       </div>
//   `,
//     components: {
//         'header-content': headerContent,
//         'header-title': headerTitle
//     }
// };
// // 创建实例
// new Vue({
//     el: '#example',
//     components: {
//         'my-component': header
//     }
// })