document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formInscripcion');
    const formAlert = document.getElementById('formAlert');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const carrera = document.getElementById('carrera').value;

        if (!nombre || !email || !telefono || !carrera) {
            mostrarAlerta('⚠️ Por favor completa todos los campos.', 'warning');
            return;
        }

        mostrarAlerta(`✅ ¡Excelente <strong>${nombre}</strong>! Registramos tu solicitud. Te contactaremos al WhatsApp ${telefono}.`, 'success');
        form.reset();
    });

    function mostrarAlerta(mensaje, tipo) {
        formAlert.innerHTML = `
            <div class="alert alert-${tipo} alert-dismissible fade show rounded-3 p-2 small mt-2" role="alert">
                ${mensaje}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }
});