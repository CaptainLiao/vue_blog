
$('.fa-picture-o').click(function () {
    let title = $(this).attr('title');
    if(title.indexOf('Insert') >= 0) {
        $('#chooseFile')
                .trigger('click')
                .on('change', function () {
                    console.log(1);
                    let form = new FormData($('#uploadForm')[0]);
                    $.ajax({
                        url: '/uploadImg',
                        method: 'POST',
                        dataType: 'json',
                        data: form,
                        processData: false,
                        contentType: false,
                        success: function (data) {

                            var url = data.data.src.split('//')[1];
                            // $('#imgUrl').val(url).select()
                            // js = $('#imgUrl').createTextRange();
                            // js.execCommand("Copy");



                            var inputText = document.getElementById('imgUrl');
                            var currentFocus = document.activeElement;
                            inputText.focus();
                            inputText.value = url;
                            inputText.setSelectionRange(0, inputText.value.length);
                            document.execCommand('copy', true);
                            currentFocus.focus();

                            console.log($('.CodeMirror-code'))
                        },
                        error: function(e) {
                            console.log(e);
                        }
                    })
                 })
    }
    return false;
});



$('.save-btn').click(function () {
    console.log($('.CodeMirror').text())
})