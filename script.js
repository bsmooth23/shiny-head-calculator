function calculateShininess() {
    const shape = parseInt(document.getElementById('shape').value);
    const skin = parseInt(document.getElementById('skin').value);
    const moisturize = parseInt(document.getElementById('moisturize').value);
    const light = parseInt(document.getElementById('light').value);
    const email = document.getElementById('email').value;

    if (shape && skin && moisturize && light && email) {
        // Calculate shininess using the four factors, normalized to a scale of 1 to 10
        let shininess = (shape + skin + moisturize + (light / 24) * 10) / 4;
        shininess = Math.max(1, Math.min(10, shininess.toFixed(1))); // Ensure shininess is between 1 and 10

        let imageLink = '';
        if (shininess >= 1 && shininess <= 3) {
            imageLink = 'image1.jpg'; // Replace with the actual link to image 1
        } else if (shininess >= 4 && shininess <= 7) {
            imageLink = 'image2.jpg'; // Replace with the actual link to image 2
        } else if (shininess >= 8 && shininess <= 10) {
            imageLink = 'image3.jpg'; // Replace with the actual link to image 3
        }

        document.getElementById('result').innerHTML = `Your head's shininess level is: ${shininess} <br> <a href="${imageLink}" target="_blank">View Image</a>`;
    } else {
        document.getElementById('result').innerText = 'Please fill out all fields, including your email address.';
    }
}
