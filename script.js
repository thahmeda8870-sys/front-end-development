const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Booking Successful!');
        window.location.href = 'thankyou.html';
    });
}