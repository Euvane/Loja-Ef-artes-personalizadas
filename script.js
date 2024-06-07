document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Aqui você pode adicionar lógica para enviar os dados do formulário para o servidor.
    // Por exemplo, usando AJAX para enviar uma solicitação POST para o servidor.
    // Depois de receber uma resposta do servidor, você pode redirecionar o usuário para uma página de login, por exemplo.
});