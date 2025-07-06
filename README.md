# Biblioteca de Narraciones

Una aplicación web moderna para reproducir audiolibros narrados, construida con Astro JS y optimizada para streaming de audio.

## Características

- 🎵 **Reproductor de audio personalizado** con controles avanzados
- 📚 **Catálogo de libros** con metadatos completos
- 🏷️ **Sistema de etiquetas** para organizar capítulos
- 📱 **Diseño responsive** optimizado para todos los dispositivos
- ⚡ **Streaming de audio** para ahorrar datos
- 🎨 **Interfaz moderna** con Tailwind CSS
- 🚀 **Despliegue optimizado** para Vercel

## Tecnologías

- **Astro JS** - Framework web estático
- **Tailwind CSS** - Framework de estilos
- **TypeScript** - Tipado estático
- **Vercel** - Plataforma de despliegue

## Estructura del Proyecto

```
src/
├── data/
│   └── books.json          # Datos de libros y capítulos
├── layouts/
│   └── Layout.astro        # Layout principal
├── pages/
│   ├── index.astro         # Página principal
│   ├── book/
│   │   ├── [id].astro      # Lista de capítulos
│   │   └── [bookId]/
│   │       └── chapter/
│   │           └── [chapterId].astro  # Reproductor
└── types/
    └── index.ts            # Tipos TypeScript
```

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd biblioteca-de-narraciones
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## Configuración de Audio

### Estructura de Archivos

Coloca tus archivos de audio en la carpeta `public/audio/` con la siguiente estructura:

```
public/
├── audio/
│   ├── don-quijote/
│   │   ├── capitulo-1.m4a
│   │   └── capitulo-2.m4a
│   └── cien-anos-soledad/
│       ├── capitulo-1.m4a
│       └── capitulo-2.m4a
└── images/
    ├── don-quijote-cover.jpg
    └── cien-anos-soledad-cover.jpg
```

### Formato de Audio

- **Formato recomendado**: M4A (AAC)
- **Calidad**: 128-192 kbps para streaming
- **Duración**: Sin límite, optimizado para streaming

## Configuración de Datos

### Estructura JSON

Los libros se definen en `src/data/books.json`:

```json
{
  "books": [
    {
      "id": "identificador-unico",
      "title": "Título del Libro",
      "author": "Autor",
      "description": "Descripción del libro",
      "theme": "Tema/Categoría",
      "publisher": "Editorial",
      "edition": "Edición",
      "isbn": "ISBN",
      "coverImage": "/images/portada.jpg",
      "chapters": [
        {
          "id": "capitulo-1",
          "title": "Título del Capítulo",
          "duration": "00:15:30",
          "description": "Descripción del capítulo",
          "audioFile": "/audio/libro/capitulo-1.m4a",
          "tags": [
            {
              "name": "Etiqueta",
              "visible": true
            }
          ]
        }
      ]
    }
  ]
}
```

## Características del Reproductor

### Controles
- **Play/Pause**: Botón principal o barra espaciadora
- **Adelantar/Retroceder**: Botones o flechas del teclado
- **Barra de progreso**: Click para saltar a posición específica
- **Control de volumen**: Slider personalizado

### Atajos de Teclado
- `Espacio`: Play/Pause
- `Flecha izquierda`: Retroceder 10 segundos
- `Flecha derecha`: Adelantar 10 segundos

### Streaming
- **Optimizado para streaming**: No descarga archivos completos
- **Soporte para rangos HTTP**: Permite saltar en el audio
- **Buffer inteligente**: Carga solo lo necesario

## Despliegue en Vercel

1. **Conectar repositorio**
   - Conecta tu repositorio de GitHub a Vercel
   - Vercel detectará automáticamente que es un proyecto Astro

2. **Configuración automática**
   - El archivo `vercel.json` ya está configurado
   - Los headers para streaming de audio están incluidos

3. **Variables de entorno** (si es necesario)
   - No se requieren variables de entorno para el despliegue básico

4. **Despliegue**
   - Cada push a `main` desplegará automáticamente
   - Las builds son optimizadas para producción

## Optimizaciones

### Rendimiento
- **Generación estática**: Todas las páginas se generan en build time
- **Lazy loading**: Imágenes y audio se cargan bajo demanda
- **Compresión**: Archivos optimizados para web

### SEO
- **Meta tags**: Configurados automáticamente
- **URLs amigables**: Estructura semántica
- **Sitemap**: Generado automáticamente

### Accesibilidad
- **Navegación por teclado**: Todos los controles accesibles
- **ARIA labels**: Etiquetas para lectores de pantalla
- **Contraste**: Colores optimizados para legibilidad

## Personalización

### Estilos
- **Tailwind CSS**: Fácil personalización de colores y estilos
- **Componentes reutilizables**: Estructura modular
- **Responsive design**: Adaptable a todos los dispositivos

### Funcionalidad
- **JavaScript modular**: Fácil agregar nuevas características
- **TypeScript**: Tipado seguro para desarrollo
- **API extensible**: Preparado para futuras integraciones

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Soporte

Para soporte técnico o preguntas sobre el proyecto, por favor abre un issue en el repositorio.
