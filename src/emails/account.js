const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noreply@scootloaf.com',
        subject: 'Welcome to Gnarly Task!',
        text: `Welcome, to the app, ${name}. Let me know how you get along with the application.`

    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noreply@scootloaf.com',
        subject: 'Sorry to See You Go!',
        text: `We're sorry to see you close your account on Gnarly Task, ${name}. If you wouldn't mind, please let us know if there was something we could have done to keep your business.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}