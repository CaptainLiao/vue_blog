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
        let url = '/api/register';
        let id = $(this).attr('id');
        if(id === 'editPwd') {
            url = '/api/edit'
        }
        $.ajax({
            url,
            method: 'POST',
            dataType: 'json',
            data: body,

            success: function (data) {

                console.log(data);
                if(data.code === 0) {
                    layui.use('layer', function(){
                      var layer = layui.layer;

                        layer.open({
                            title: '提示',
                            content: data.msg
                        }); 
                        $('.layui-layer-btn0').click(function() {
                            location.href = '/user/login'
                        })
                    }); 


                }else {
                    layui.use('layer', function(){
                        var layer = layui.layer;
                      
                        layer.open({
                            title: '提示',
                            content: data.msg
                        }); 
                    });
                }
            },
            error: function(e) {
                console.log(e);
            }
        });
        return false;
    })
});