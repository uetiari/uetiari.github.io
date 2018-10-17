let form = $('.form-contato');

form.validate({
    errorElement: 'span',
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        text: 'required',
    },
    messages: {
        name: 'Por favor, digite seu nome.',
        email: {
            required: 'Por favor, digite seu e-mail.',
            email: 'Por favor, digite um e-mail válido.'
        },
        text: 'Por favor, digite uma mensagem.'
    },
});
