
//const products = require("../data/products.json"); 
const product = require("./product");
const user = require("./user");

//const nodemailer = require('nodemailer');

//const db = require('../models/connection.js')


const GETAllProducts = async (req, res)=>{
  
  await product.list(req,res).then((data)=>{console.log(data),
    res.json(data)},
  (err)=> console.log(err))  

}



const aboutGET = (req, res)=>{
   /*  res.render('about',{
      titulo: "Sobre nosotros"
    }) */
}

const contactGET =  (req, res)=>{
    /* res.render('contact',{
      titulo: "Contactanos"
    }) */
}

const contactPOST =  (req, res)=>{
 /*  console.log('si entra')

  let data = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user: 'eemoran1989@gmail.com',
      pass: 'wogsumwjcomtpgna'
    } */
    /* auth:{
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    } */
  /* })

  const mailOptions= {
    from : data.nombre,
    to: 'emilioemoran@gmail.com',
    subject:'Mi pagina ejemplo',
    text:'Contenido'
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      res.status(500, error.message)
      res.status(500).render('contact',{
        mensage: 'Ha ocurrido un error'+ error.message,
        mostrar: true,
        clase:'danger'
      })
    }
    else{
      res.status(200, info)
      res.status(200).render('contact',{
        mensage: 'mail enviado correctamente',
        mostrar: true,
        clase:'success'
      })
    }
  }) */
  
}

const teamGET = (req, res)=>{
  /* res.render('team',{
    titulo: "nuestro equipo"
  }) */
}



module.exports = { GETAllProducts, aboutGET, contactGET, contactPOST,teamGET}