document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const submitBtn = document.getElementById('submit-btn');
    const successContainer = document.getElementById('booking-success');
    const bookingTokenSpan = document.getElementById('booking-token');

    const fields = {
        name: {
            el: document.getElementById('name'),
            error: document.getElementById('name-error'),
            validate: (val) => val.trim().length >= 3
        },
        phone: {
            el: document.getElementById('phone'),
            error: document.getElementById('phone-error'),
            validate: (val) => /^[\+]?[0-9\s]{7,15}$/.test(val.replace(/[-\s()]/g, ''))
        },
        date: {
            el: document.getElementById('date'),
            error: document.getElementById('date-error'),
            validate: (val) => {
                if (!val) return false;
                const selected = new Date(val);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return selected >= today;
            }
        },
        guests: {
            el: document.getElementById('guests'),
            error: document.getElementById('guests-error'),
            validate: (val) => val >= 1 && val <= 20
        }
    };

    const todayStr = new Date().toISOString().split('T')[0];
    fields.date.el.setAttribute('min', todayStr);

    function validateField(name) {
        const field = fields[name];
        const isValid = field.validate(field.el.value);

        if (field.el.value.length > 0 || field.el.tagName === 'SELECT') {
            const group = field.el.closest('.form-group');
            group.classList.toggle('invalid', !isValid);
        }

        checkFormValidity();
        return isValid;
    }

    function checkFormValidity() {
        const allValid = Object.keys(fields).every(name => {
            return fields[name].validate(fields[name].el.value);
        });
        submitBtn.disabled = !allValid;
    }

    Object.keys(fields).forEach(name => {
        const input = fields[name].el;
        input.addEventListener('input', () => validateField(name));
        input.addEventListener('blur', () => validateField(name));
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isFormValid = Object.keys(fields).every(name => validateField(name));

        if (isFormValid) {
            const timestamp = Date.now();
            const bookingId = `LUM-${timestamp.toString().slice(-6)}`;

            const bookingData = {
                id: bookingId,
                name: fields.name.el.value,
                phone: fields.phone.el.value,
                date: fields.date.el.value,
                guests: fields.guests.el.value,
                time: document.getElementById('time').value,
                created_at: new Date().toISOString()
            };

            const currentBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
            currentBookings.push(bookingData);
            localStorage.setItem('bookings', JSON.stringify(currentBookings));

            bookingForm.reset();
            submitBtn.disabled = true;

            bookingTokenSpan.textContent = bookingId;
            successContainer.style.display = 'block';

            document.querySelectorAll('.form-group').forEach(group => group.classList.remove('invalid'));
        }
    });
});
