$(function() {
    $('.submit-btn').click(function() {
        $layuiInput = $('.layui-input');
        let name = $layuiInput.eq(0).val();
        let pwd = $layuiInput.eq(1).val();
        let confirmPwd = $layuiInput.eq(2).val();

        let body = {
            name,
            pwd,
            confirmPwd
        };
        $.ajax({
            url: '/register',
            method: 'POST',
            dataType: 'json',
            data: body,

            success: function (data) {

                console.log(data);
            },
            error: function(e) {
                console.log(e);
            }
        });
        return false;
    })
});