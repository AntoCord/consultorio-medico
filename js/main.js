// Inicializar Google Maps
function initMap() {
    var location = { lat: -25.363, lng: 131.044 }; // Coordenadas de tu consultorio
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Rellenar opciones de horas de citas
document.addEventListener('DOMContentLoaded', function() {
    var horaSelect = document.getElementById('hora');
    var turnos = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
    ];

    turnos.forEach(function(turno) {
        var option = document.createElement('option');
        option.value = turno;
        option.textContent = turno;
        horaSelect.appendChild(option);
    });

    document.getElementById('form-citas').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cita agendada con éxito!');
        // Aquí puedes añadir código para enviar datos al backend.
    });
});