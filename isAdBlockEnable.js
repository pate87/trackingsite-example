if (window.showAds) {
    console.log('No AdBlocker');
} else {
    console.log('AdBlocker');
    alert('Please disable your AdBlocker');
}
// if (window.showAds != null) {
//     console.log('No AdBlocker');
// } else {
//     console.log('AdBlocker');
//     alert('Please disable your AdBlocker');
// }

// if (window.document.querySelector('script[src="adsbygoogle.js"]').onload {
//     console.log('No AdBlocker');
// } else {
//     console.log('AdBlocker');
// }

document.querySelector('script[src="adsbygoogle.js"]').addEventListener('input', () => {
    if(!document.querySelector('script[src="adsbygoogle.js"]')) {
        console.log(1);
    } else {
        console.log('AdBlocker is off');
    }
   });

// document.querySelector('script[src="adsbygoogle.js"]').onload = function() {
//     if(!document.getElementById("ObaTiWkGxZSM")){
//         console.log(1);
//     } else {
//         console.log('AdBlocker is off');
//     }
//    }
