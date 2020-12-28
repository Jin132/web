$(document).ready(function() {

    $("#enter").click(function( event ){
        event.preventDefault();
        $(".overlay").fadeToggle("fast");
    });

    $(".close").click(function(){
        $(".overlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode === 27 && $(".overlay").css("display") !== "none" ) {
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
    var text_max = 150;
    var text_length = 0
    $('#counter').html('Символов: ' + text_length + '/' + text_max);
    $('#text').keyup(function() {
        text_length = $('#text').val().length;
        $('#counter').html('Символов: ' + text_length + '/' + text_max);
        if (text_length === text_max){
            $('#counter').css({
                "color" : "red"
            });
        }
        else {
            $('#counter').css({
                "color" : "#D0C9D6"
            });
        }
    });

    var input = document.querySelector('.main__add-input');
    var preview = document.querySelector('.preview');

    input.style.opacity = '0';
    input.addEventListener('change', updateImageDisplay);
    function updateImageDisplay() {
        while(preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }

        var curFiles = input.files;
        if(curFiles.length !== 0) {
            var para = document.createElement('p');
            if(validFileType(curFiles[0])) {
                para.textContent = getName(curFiles[0].name);
                para.classList.add('main__preview-text', 'text');
                var image = document.createElement('img');
                image.src = window.URL.createObjectURL(curFiles[0]);
                $("#removeImg").css({
                    "display": "block"
                });
                image.classList.add('main__preview-image');
                preview.appendChild(image);
                preview.appendChild(para);
            } else {
                para.textContent = 'Неверный формат изображения';
                para.classList.add('main__preview-text-error', 'text');
                preview.appendChild(para);
                clearFile('formAdd');
            }
        }
    }
    $("#removeImg").click(function () {
        console.log('hi');
        while (preview.firstChild){
            preview.removeChild(preview.firstChild)
        }
        clearFile('formAdd');
        this.removeAttribute('style');
    });

    var fileTypes = [
        'image/jpeg',
        'image/png'
    ];
    function getName(name) {
        if (name.length < 27){
            return name;
        }
        else{
            return name.substring(0, 23) + '..' + name.substring(name.length-4, name.length);
        }

    }
    function validFileType(file) {
        for(var i = 0; i < fileTypes.length; i++) {
            if(file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }

    function clearFile(idForm) {
        var form = document.getElementById(idForm);
        var values = new Array(form.elements.length);
        for (var i = 0; i < form.elements.length; i++) {
            values[i] = form.elements.item(i).value;
        }
        form.reset();
        for (var i = 0; i < form.elements.length; i++) {
            if(form.elements.item(i).type !== 'file') {
                form.elements.item(i).value = values[i];
            }
        }
    }
});