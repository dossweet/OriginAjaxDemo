let loginBtn = document.getElementsByClassName("loginBtn")[0];

loginBtn.addEventListener('click', function () {
    let emails = document.getElementsByClassName("email")[0].value;
    let password = document.getElementsByClassName("psw")[0].value;
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