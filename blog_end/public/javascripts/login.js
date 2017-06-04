$(function() {
    $('.submit-btn').click(function() {
        $layuiInput = $('.layui-input');
        let name = $layuiInput.eq(0).val();
        let pwd = $layuiInput.eq(1).val();

        let body = {
            name,
            pwd
        };
        $.ajax({
            url: '/api/login',
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
                            location.href = '/article/list';
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