# Valentine

Propuesta interactiva de San Valentín optimizada para GitHub Pages.  
El proyecto se organiza en una estructura de archivos separados para facilitar el mantenimiento y la escalabilidad del diseño y la lógica.

---

## Estructura del Proyecto

Basado en el estado actual del repositorio:

```text
valentine/
├── index.html      # Estructura y contenedores
├── style.css       # Estilos y animaciones
├── script.js       # Lógica y eventos
├── cancion.mp3     # Recurso de audio
├── LICENSE         # Licencia del proyecto
└── README.md       # Documentación
```

---

## Ejecución y Despliegue

### GitHub Pages

1. Confirmar que todos los archivos estén en la raíz del repositorio.
2. Activar GitHub Pages desde la configuración del repositorio.
3. Seleccionar la rama principal para servir el contenido estático.

---

### Ejecución Local

#### PowerShell
```powershell
# Abrir el punto de entrada principal
start index.html
```

---

## Notas Técnicas

**Modularidad:**  
La separación de archivos permite una edición limpia de los estilos CSS y la lógica de JavaScript.

**Evasión:**  
El botón "No" utiliza un cálculo dinámico de coordenadas para evitar la interacción del usuario.

**Compatibilidad:**  
El audio requiere una interacción previa del usuario en el DOM para iniciar la reproducción (restricción estándar de navegadores).

---

## Autor

Melani Olivares
