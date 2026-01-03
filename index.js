const urlParams = new URLSearchParams(window.location.search);
const typxe = urlParams.get('url');

window.locatiob.href = typxe;

// JavaScript for cookie management
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        function getCookie(name) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function acceptCookies() {
            setCookie('cookieAccepted', 'true', 30); // Set cookie for 30 days
            document.getElementById('cookieConsent').style.display = 'none';
        }

        function rejectCookies() {
            alert("You have rejected cookies. Some functionalities might be limited.");
            document.getElementById('cookieConsent').style.display = 'none';
            // You might implement further actions here, like limiting certain features
        }

        // Check if cookie consent has been given on page load
        window.onload = function() {
            if (!getCookie('cookieAccepted')) {
                document.getElementById('cookieConsent').style.display = 'block';
            }
        };
