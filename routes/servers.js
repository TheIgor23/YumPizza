const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");

router.post('/api/order', async (req, res)=>{
    sendEmail(req.body);
    res.send('OK');

})

async function sendEmail(reqBody){
       
   let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 993,
        secure: true,
        auth: {
          user: 'yumpizzamailer@gmail.com',
          pass: 'P-44258ar',
        }
    })



    let orders = reqBody.order.map(function(item) {
        return item['name'] + '. Количество: ' + item['count'];
    });
    

    let result = await transporter.sendMail({
    from: '"YumPizza" yumpizzamailer@gmail.com',
    to: reqBody.email,
    subject: 'Ваш заказ',
    html: orders.join('<br>') + `<br>Итоговая цена: <b>${reqBody.all_price}</b>`
    })
}



module.exports = router;
