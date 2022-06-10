const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");

router.post('/api/order', async (req, res)=>{
    sendEmail(req.body);
    res.send('OK');

})

async function sendEmail(reqBody){
       
   let transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
          user: 'yumpizza@mail.ru',
          pass: 'ZFa8THFiY7Bu26Lj8z9f',
        }
    })



    let orders = reqBody.order.map(function(item) {
        return item['name'] + '. Количество: ' + item['count'];
    });
    

    let result = await transporter.sendMail({
    from: '"YumPizza" yumpizza@mail.ru',
    to: reqBody.email,
    subject: 'Ваш заказ',
    html: orders.join('<br>') + `<br>Итоговая цена: <b>${reqBody.all_price}</b>`
    })
}



module.exports = router;
