(function() {
    var btn = document.getElementById('btn');
    $('.fa-picture-o').off().on('click', function () {
        let title = $(this).attr('title');

        document.getElementById('chooseFile').files = null;
        $('#chooseFile')
                .trigger('click')
                .off().on('change', function () {
            let form = null;
            form = new FormData($('#uploadForm')[0]);
            console.log(form);
            $.ajax({
                url: '/api/uploadImg',
                method: 'POST',
                dataType: 'json',
                data: form,
                processData: false,
                contentType: false,
                success: function (data) {

                    var url = data.data.src;
                    var inputText = document.getElementById('inputText');

                    inputText.value = url;
                    // btn.click();

                    console.log($('.CodeMirror-code'))
                },
                error: function(e) {
                    console.log(e);
                }
            })
        })
        return false;
    });



    btn.addEventListener('click', function(){
        var inputText = document.getElementById('inputText');
        var currentFocus = document.activeElement;
        inputText.focus();
        inputText.setSelectionRange(0, inputText.value.length);
        document.execCommand('copy', true);
        btn.value = '复制成功';
        currentFocus.focus();
        setTimeout(function() {
            inputText.value = '';
            btn.value = '复制'
        }, 1500)

    });

    $('.save-btn').click(function () {
        let content = $('#editContent').val();
        let title = $('.article-title').val();
        var type = $('.operate-btn').find('.layui-btn-warm').text();
        var id = $(this).data('id');
        $.ajax({
            url: '/api/article/new',
            method: 'POST',
            dataType: 'json',
            data: {
                title: title,
                type: type,
                content: content,
                id: id
            },
            success: function(res) {
                if(res.code === 0) {
                    setTimeout(function () {
                        location.href = '/article/list';
                    }, 1500)

                }
            },
            error: function(err) {
                console.log(err);
            },
            complete: function (res) {
                console.log(res.responseJSON)
                layui.use('layer', function(){
                    var layer = layui.layer;

                    layer.msg(res.responseJSON.msg || res.responseJSON.err.message);

                });
            }
        })
    });

    $('.operate-btn').on('click', 'button', function() {
       var $this = $(this);
       $this.addClass('layui-btn-warm')
               .siblings().removeClass('layui-btn-warm');

       console.log($this);
    });
})();