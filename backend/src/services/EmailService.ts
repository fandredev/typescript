interface I_MailTo {
    name: string
    email: string
}
interface I_MailMessage {
    subject: string
    body: string
    attachment?: Array<string>
}
interface I_MessageDTO {
    to: I_MailTo,
    message: I_MailMessage
}
interface I_EmailService {
    sendMail(request: I_MessageDTO): void
}
class EmailService implements I_EmailService {
    sendMail({ to, message }: I_MessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}
export default EmailService