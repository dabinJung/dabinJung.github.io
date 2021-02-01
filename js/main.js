$(document).ready(function(){

    //로그인여부
    if(sessionStorage.getItem('loginYN') == 'Y'){
        $('#nav').css('display','');
    }else{
        $('#indexLoginDiv').css('display','');
    }
    
    //로그인
    $('#loginBtn').on('click', function(){
        var id = $('#id').val();
        var password = $('#password').val();

        if(id == null || id == ''){
            alert('아이디를 입력해주세요.');
        }else if(password == null || password == ''){
            alert('패스워드를 입력해주세요.');
        }else{
            if(id == localStorage.getItem('id_'+id)){
                if(password == localStorage.getItem('pw_' + id)){
                    alert('로그인 성공');
                    sessionStorage.setItem('loginId', id);
                    sessionStorage.setItem('loginYN', 'Y');
                    location.href='./index.html';
                }else{
                    alert('로그인 실패');
                }
            }else{
                alert('로그인 실패');
            }
        }
    })

    //회원가입
    $('#signBtn').on('click', function(){
        var id = $('#id').val();
        var password = $('#password').val();
        var password2 = $('#password2').val();

        if(id == null || id == ''){
            alert('아이디를 입력해주세요.');
        }else if(password == null || password == ''){
            alert('패스워드를 입력해주세요.');
        }else if(password != password2){
            alert('패스워드를 확인해주세요.');
        }else{
            localStorage.setItem('id_'+id, id);
            localStorage.setItem('pw_'+id, password);
            alert('회원가입이 완료되었습니다.');
            location.href = './login.html';
        }
    })

    //로그아웃
    $('#logout').on('click',function(){
        if(!confirm('로그아웃 하시겠습니까?')){
            return;
        }else{
            alert('로그아웃 되었습니다.');
            sessionStorage.clear();
            location.href='./index.html';
        }
    })

    //유저조회
    $('#findUserBtn').on('click', function(){
        var tbody = $('#tbody');
        var tbodyHtml = '';
        
        tbody.empty();

        for(var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            console.log(key);
            if(key.indexOf('id_') != -1){
                tbodyHtml += '<tr><td>' + localStorage.getItem(key) + '</td></tr>';
            }
        }
        tbody.append(tbodyHtml);
    })

    //여행 마우스오버
    $('.tour-location').on('click',function(){
        var id = $(this).attr('id') + '_img';
        $('#'+id).css('visibility','visible');
    }).on('mouseleave',function(){
        var id = $(this).attr('id') + '_img';
        $('#'+id).css('visibility','hidden');
    })
})