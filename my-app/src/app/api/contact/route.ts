import { NextRequest,NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email";
import { Resend } from "resend";
import nodemailer from 'nodemailer'

export async function POST(req:NextRequest){
    try{
        const data = await req.json();
        const {fullname,email,message}=data;
        console.log(fullname,email,message)
        
      const myemail = process.env.NEXT_PUBLIC_SMTP_USER;
      const pass = process.env.NEXT_PUBLIC_SMTP_PASS;
      console.log("These are my apikeys " , process.env.SMTP_USER,process.env.SMTP_PASS)
       const transporter = nodemailer.createTransport({
       service:'gmail',
       auth:{
        user:myemail,
        pass,
    }
})
 const mailOptions = {
    from:myemail,
    to:email
}
      await transporter.sendMail({
        ...mailOptions,
        subject:`Hi ${fullname}`,
        text:`Hi ${fullname}`,
        html:'<h1>Thanks for Contacting us !</h1></br> <p>We appreciate your effort.Please tell me how can we help you?</p></br> Regards Muhammad Abdullah'

      })

      return NextResponse.json({ success: true, message: 'Email sent successfully!' });

        } catch (error:any) {
          console.error(error);
          return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }
}