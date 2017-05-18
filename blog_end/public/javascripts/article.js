var btn = document.getElementById('btn');
$('.fa-picture-o').off().on('click', function () {
    let title = $(this).attr('title');

    if(title.indexOf('Insert') >= 0) {
        document.getElementById('chooseFile').files = null;
        $('#chooseFile')
                .trigger('click')
                .off().on('change', function () {
                    let form = null;
                    form = new FormData($('#uploadForm')[0]);
                    console.log(form);
                    $.ajax({
                        url: '/uploadImg',
                        method: 'POST',
                        dataType: 'json',
                        data: form,
                        processData: false,
                        contentType: false,
                        success: function (data) {

                            var url = data.data.src.split('//')[1];
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
    }
    return false;
});


btn.addEventListener('click', function(){
    var inputText = document.getElementById('inputText');
    var currentFocus = document.activeElement;
    inputText.focus();
    inputText.setSelectionRange(0, inputText.value.length);
    document.execCommand('copy', true);
    currentFocus.focus();
    inputText.value = '';
});

$('.save-btn').click(function () {
    console.log($('.CodeMirror').text())
})