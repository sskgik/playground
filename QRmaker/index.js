const QRCode = require('qrcode');


const  BaseURL= 'https://qr.sample.com?serialnum='
    


function makeQR(amount) {
    for(i=0;i< amount;i++){
        QRCode.toFile('image/qrsample'+i+'.png', BaseURL + i);
    }
}

makeQR(5)

