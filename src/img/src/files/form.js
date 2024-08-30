document.querySelectorAll('input[type="name"]').forEach(name => {
    name.addEventListener('keyup', function (event) {
        if (checkBorder(name.value, true)) {
            if (name.id === 'FormInputName') {
                name.style.borderColor = "#cdcbcb";
            } else if (name.id === 'FormInputNameMiddle') {
                name.style.borderColor = "#cdcbcb";
            } else if (name.id === 'FormInputNameLast') {
                name.style.borderColor = "#fff";
            }
        } else {
            name.style.borderColor = "red";
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(tel => {
    tel.addEventListener('keyup', function (event) {
        if (checkBorder(tel.value.replace(/[^0-9]/g, ""), false)) {
            if (tel.id === 'FormInputTel') {
                tel.style.borderColor = "#cdcbcb";
            } else if (tel.id === 'FormInputTelMiddle') {
                tel.style.borderColor = "#cdcbcb";
            } else if (tel.id === 'FormInputTelLast') {
                tel.style.borderColor = "#fff";
            }
        } else {
            tel.style.borderColor = "red";
        }
    });
});


var form_name_modal = document.getElementById('FormInputName')
var form_tel_modal = document.getElementById('FormInputTel')



document.querySelector('#reqModal').addEventListener('hidden.bs.modal', () => {
    form_name_modal.value = '';
    form_name_modal.style.borderColor = "#cdcbcb";
    form_tel_modal.value = '';
    form_tel_modal.style.borderColor = "#cdcbcb";
});


document.querySelector('#reqModal').addEventListener('show.bs.modal', event => {
    var button = event.relatedTarget;
    var recipient = button.getAttribute('data-bs-whatever');
    document.getElementById('form').setAttribute('data-bs-whatever', recipient);
})
// document.querySelectorAll('.openDialog').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelector('#reqModal').showModal();
//     });
// });
// document.querySelector('.closeDialog').addEventListener('click', () => {
//     document.querySelector('#reqModal').close();
// });

function form_submit(e, formid) {
    e.preventDefault();
    var form_name, form_tel, form_type, form_soc, form_text;
    if (formid == 'form') {
        form_name = document.getElementById('FormInputName').value;
        form_tel = document.getElementById('FormInputTel').value;
        form_type = document.getElementById('form').getAttribute('data-bs-whatever');
        form_soc = '';
        document.querySelectorAll('input[name=soc]').forEach(radio => {
            if (radio.checked) {
                form_soc = radio.value;
            }
        });
        if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false) && form_soc != '') {
            form = new FormData();
            xhr = new XMLHttpRequest();
            form.append('form_name', form_name);
            form.append('form_type', form_type);
            form.append('form_tel', form_tel);
            form.append('form_soc', form_soc);
            form.append('form_text', form_text);

            xhr.open('POST', 'form-handler.php');
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status === 200) {
                    window.location.href = 'https://deykun-marketing.ru/thanks.html';
                }
            }
        }
    } else if (formid == 'form1') {
        form_name = document.getElementById('FormInputNameMiddle').value;
        form_tel = document.getElementById('FormInputTelMiddle').value;
        form_type = document.getElementById('form1').getAttribute('data-bs-whatever');
        if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
            form = new FormData();
            xhr = new XMLHttpRequest();
            form.append('form_name', form_name);
            form.append('form_type', form_type);
            form.append('form_tel', form_tel);
            form.append('form_soc', form_soc);
            form.append('form_text', form_text);

            xhr.open('POST', 'form-handler.php');
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status === 200) {
                    window.location.href = 'https://deykun-marketing.ru/thanks.html';
                }
            }
        }
    } else if (formid == 'form2') {
        form_name = document.getElementById('FormInputNameLast').value;
        form_tel = document.getElementById('FormInputTelLast').value;
        form_type = document.getElementById('form2').getAttribute('data-bs-whatever')
        form_text = document.getElementById('FormInputTextLast').value;
        if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
            form = new FormData();
            xhr = new XMLHttpRequest();
            form.append('form_name', form_name);
            form.append('form_type', form_type);
            form.append('form_tel', form_tel);
            form.append('form_soc', form_soc);
            form.append('form_text', form_text);

            xhr.open('POST', 'form-handler.php');
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status === 200) {
                    window.location.href = 'https://deykun-marketing.ru/thanks.html';
                }
            }
        }
    }


}

function check(value, condition) {
    var result = false;
    if (condition) {
        var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        if (value.match(name_reg)) {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value.match(tel_reg)) {
            result = true;
        }
    }
    return result;
}

function checkBorder(value, condition) {
    var result = false;
    if (condition) {
        var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        if (value != '') {
            if (value.match(name_reg)) {
                result = true;
            }
        } else {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value != '') {
            if (value.match(tel_reg)) {
                result = true;
            }
        } else {
            result = true;
        }
    }
    return result;
}

// $('body').activity({
//     'achieveTime':60
//     ,'testPeriod':10
//     ,useMultiMode: 1
//     ,callBack: function (e) {
//         ga('send', 'event', 'Activity', '60_sec');
//         yaCounterXXXXXXXXX.reachGoal('60_sec');
//     }
// });