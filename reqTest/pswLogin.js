// 获取页面尺寸，用于判断是移动端还是PC端
let pageWidth = document.body.clientWidth;
let loginBtn = "";
// 根据响应式布局分别获取数据
if (pageWidth >= 768) {
    loginBtn = document.getElementsByClassName("loginBtn")[0];
}else{
    loginBtn = document.getElementsByClassName("loginBtn")[1];
}

loginBtn.addEventListener('click', function () {
    let emails = "";
    let password = "";
    if (pageWidth >= 768) {
        emails = document.getElementsByClassName("email")[0].value;
        password = document.getElementsByClassName("psw")[0].value;
    }else{
        emails = document.getElementsByClassName("email")[1].value;
        password = document.getElementsByClassName("psw")[1].value;
    }
    // 这里的ajax就是我封装后的XMLHttpRequest, 以参数的形式传递请求方式、请求参数和响应处理，URL是fastmock上做的一个接口
    ajax({
        type: 'POST',
        url: "https://www.fastmock.site/mock/e89826b10151d3ddafd81e87b0cf7110/api/api/login",
        async: true,
        contentType: "application/json;charset=utf-8",
        data: {
            name: emails,
            psw: password
        },
        success: function (e) {
            // e就是返回的数据，可以根据需要进行后续处理
            console.log(e);
        },
        error: function () {
            alert("发送失败");
        }
    });
})