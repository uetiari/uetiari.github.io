let form = $('.form-contato');

form.validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        text: 'required',
    }
});
