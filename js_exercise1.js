"use strict";
    b.addEventListener('click', event => {
        if (msg.value === '') {
            alert('no input');
        }
        else {
            out.innerHTML = msg.value;
        }
    });
