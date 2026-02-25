document.addEventListener('DOMContentLoaded', function() {
    console.log("Script cargado correctamente.");

    // A. LÓGICA DEL BOTÓN "NO"
    const noButton = document.getElementById('noButton');

    if (noButton) {
        // Esta función calcula la posición y mueve el botón
        const moveButton = function(e) {
            e.preventDefault(); 
            e.stopPropagation();
            
            // 1. OBTENER TAMAÑOS REALES DE LA PANTALLA VISIBLE
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            
            // 2. TAMAÑO FIJO DEL BOTÓN
            const btnW = 200;
            const btnH = 80;

            // 3. MARGEN DE SEGURIDAD
            const padding = 30;

            // 4. CALCULAR LÍMITES SEGUROS
            const minX = padding;
            const minY = padding;
            const maxX = screenW - btnW - padding;
            const maxY = screenH - btnH - padding;

            // 5. VALIDAR que hay espacio suficiente
            if (maxX < minX || maxY < minY) {
                console.log("Pantalla muy pequeña, botón se queda en el centro");
                noButton.style.position = 'fixed';
                noButton.style.left = '50%';
                noButton.style.top = '50%';
                noButton.style.transform = 'translate(-50%, -50%)';
                noButton.style.zIndex = '9999';
                return;
            }

            // 6. GENERAR POSICIÓN ALEATORIA SEGURA
            const randomX = minX + Math.random() * (maxX - minX);
            const randomY = minY + Math.random() * (maxY - minY);

            console.log(`Moviendo botón a: X=${randomX.toFixed(0)}px, Y=${randomY.toFixed(0)}px (Pantalla: ${screenW}x${screenH})`);

            // 7. APLICAR EL MOVIMIENTO
            noButton.style.position = 'fixed';
            noButton.style.left = randomX + 'px';
            noButton.style.top = randomY + 'px';
            noButton.style.transform = 'none';
            noButton.style.zIndex = '9999';
            noButton.style.transition = 'all 0.3s ease';
        };

        // Activamos el movimiento al hacer CLICK o TOCAR
        noButton.addEventListener('click', moveButton);
        noButton.addEventListener('touchstart', moveButton);
    }

    // B. NAVEGACIÓN (CAMBIO DE PANTALLAS)    
    // 1. De Pantalla 1 (Inicio) a Pantalla 2 (Pregunta)
    const screen1 = document.getElementById('screen1');
    if (screen1) {
        screen1.addEventListener('click', () => {
            screen1.classList.remove('active');
            const s2 = document.getElementById('screen2');
            if (s2) s2.classList.add('active');
        });
    }

    // 2. De Pantalla 2 (Pregunta) a Pantalla 3 (Gracias)
    // Buscamos el botón "Sí" por su clase .yes
    const yesButton = document.querySelector('.yes'); 
    if (yesButton) {
        yesButton.addEventListener('click', (e) => {
            console.log("¡Dijo que SÍ!");
            
            // Ocultamos la pantalla 2
            const s2 = document.getElementById('screen2');
            if (s2) s2.classList.remove('active');

            // Mostramos la pantalla 3 (Gracias)
            const s3 = document.getElementById('screen3');
            if (s3) s3.classList.add('active');
        });
    }

    // C. MÚSICA DE FONDO (AUTO-PLAY CON INTERACCIÓN)
    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.5;
        const startAudio = () => {
            if (!music.dataset.started) {
                music.play().catch(err => console.log("Esperando interacción para audio..."));
                music.dataset.started = "true";
            }
        };
        // El audio arranca con el primer click en cualquier lado
        document.body.addEventListener("click", startAudio, { once: true });
        document.body.addEventListener("touchstart", startAudio, { once: true });
    }

    // D. LLUVIA DE CORAZONES (FONDO)
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerText = ['♥', '💖', '💕', '💗'][Math.floor(Math.random()*4)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = 'rgba(255, 192, 203, 0.5)'; 
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '-1';
        heart.style.transition = 'top 5s linear, opacity 5s';
        
        document.body.appendChild(heart);
        
        // Eliminar el corazón después de que caiga
        setTimeout(() => { 
            heart.style.top = '110vh'; 
            heart.style.opacity = 0; 
        }, 50);
        setTimeout(() => heart.remove(), 5100);
    }, 400);
});
