function sendToWhatsApp() {
    
    let name = document.querySelector('.email-form input[name="name"]').value;
    let email = document.querySelector('.email-form input[name="email"]').value;
    let subject = document.querySelector('.email-form input[name="subject"]').value;
    let message = document.querySelector('.email-form textarea[name="message"]').value;

   
    let whatsappMessage = `*Nome:* ${name}%0A*Email:* ${email}%0A*Assunto:* ${subject}%0A*Mensagem:* ${message}`;

    
    window.open(`https://wa.me/5547992890127?text=${whatsappMessage}`, '_blank');
  }