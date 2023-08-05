const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
function generateRandomPin() {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const pin = generateRandomPin()
const sendEmail = async (UserName, recipientMail) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});
		const emailTemplate = `
        Hello ${UserName} your pin is ${pin},

		<!-- Your email template content here -->
		`;
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: recipientMail,
			subject: "Hello",
			html: emailTemplate,
		};

		const data = await transporter.sendMail(mailOptions);
		console.log(`Email Sent: ${data.response}`);
		return data.response;
	} catch (err) {
		console.log(err);
		return -1;
	}
};

module.exports = sendEmail;
