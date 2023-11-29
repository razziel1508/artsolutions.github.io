document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Aquí agregarías el código para enviar el correo electrónico
    alert('Correo enviado');
});
