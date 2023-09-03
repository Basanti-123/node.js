// send an email using nodemailer package

/* Steps 
1. create a nodemailer transporter (SMTP)
2. Create a message option
3. send email using sendmail method of that transporter additional
4. html page use for email send 
5. Email file attach
6. personalized email by adding custom data
   1. handlers packages
   2. fs package (nodejs inbuilt module)
   3. email template (welcome.html)
   4. using fs, read the email tamplate by method readfileSync("./welcome .html")
   5. convert that buffer to string using to.String()
   6. add the {{name}} in html file
   7. compile and create tamplate  tamplate from the code using handlers.compile(emailstring)
   8. add your custom data in the tamplate (const msg = template(data))
   9. use that msg in the messageOptions
*/
const nodemailer = require("nodemailer");
const fs = require("fs");
const Handlebars = require("handlebars");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "bnagari154@gmail.com",
    pass: "hlgagqlwtyjfpnab",
  },
});
//verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const main = async (messageOptions) => {
  // send mail with defined transport object
  const info = await transporter.sendMail(messageOptions);

  console.log("Message sent: %s", info.messageId);
};

const emailTemplate = fs.readFileSync("./welcome.html"); // Buffer
const emailString = emailTemplate.toString();
const template = Handlebars.compile(emailString);

const data = { name: "Basanti" };

const messageOptions = {
  from: '"Basanti Nagri " <bnagari154@gmail.com>', // sender address
  to: "bnagari154@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: template(data),
  attachments: [
    {
      // utf-8 string as an attachment
      filename: "hello.txt",
      content: "hello world!",
    },
    {
      // binary buffer as an attachment
      filename: "hello2.txt",
      content: Buffer.from("hello world! Basanti ", "utf-8"),
    },
  ],
};

main(messageOptions).catch(console.error);
