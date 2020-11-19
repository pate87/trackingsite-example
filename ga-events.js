document.querySelector('#name').addEventListener('input', () => {
    console.log('you clicked in username');
    gtag('event', 'click', {
        'event_category' : 'Click in Username',
        'event_label' : 'clicked in username'
    });

    userid = document.querySelector('#name').value;

    if (userid !== "") {
        console.log('user name is not empty');
        gtag('event', 'submit', {
            'event_category' : 'submit username',
            'event_label' : 'user name is not empty'
        });
        return true;
    } else {
        console.log('is empty');
        return false;
    } 
});

document.querySelector('#password').addEventListener('click', () => {
    console.log('you clicked in password');
    gtag('event', 'click', {
        'event_category' : 'Click in Password',
        'event_label' : 'clicked in password'
    });

    pwd = document.querySelector('#password').value;

    if (pwd !== "") {
        console.log('password is not empty');
        gtag('event', 'submit', {
            'event_category' : 'submit password',
            'event_label' : 'password is not empty'
        });
        return true;
    } else {
        console.log('is empty');
        return false;
    }
});

document.querySelector('.btn_submit').addEventListener('click', () => {
    userid = document.querySelector('#name').value;
    pwd = document.querySelector('#password').value;

    if(userid === "TRACKINGSITE" && pwd === "TRACKINGSITE") {
    gtag('event', 'pageshow', {
    'event_category' : 'successfully login',
    'event_label' : 'successfully login'
    });
    window.open('trackingsite.html');
    return true;
    }
    else {
    gtag('event', 'pageshow', {
    'event_category' : 'unsuccessfully login',
    'event_label' : 'unsuccessfully login'
    });
    alert("Error Password or Username");
    return false;
    }
});

  /*  let userid = document.querySelector('#name').value;

    if (userid === "") {
        console.log('is empty');
        gtag('event', 'value', {
        'event_category' : 'username',
        'event_label' : 'putted something username'
        });
    } else {
        console.log('is not empty');
        gtag('event', 'click', {
        'event_category' : 'username',
        'event_label' : 'putted something username'
        });
    } 
;*/

// function AdBlockEnabled() {
//     let ad = document.createElement('ins');

//     ad.ClassName = 'AdSense';
//     ad.style.display = 'block';
//     ad.style.position = 'absolute';
//     ad.style.top = '-1px';
//     ad.style.height = '1px';

//     document.body.appendChild(ad);

//     let isAdBlockEnabled = !ad.clientHeight;
   
//     document.body.removeChild(ad);
   
//     return isAdBlockEnabled;
// }

// var e=document.createElement('div');
// e.id='Ad';
// e.style.display='none';
// document.body.appendChild(e);

// if (!document.querySelector('#Ad')) {
//     console.log(1);
// }