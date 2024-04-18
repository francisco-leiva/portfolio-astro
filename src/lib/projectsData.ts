import spotifyCloneImg from '@assets/img/spotifyclone.webp'
import cineflixImg from '@assets/img/cineflix.webp'
import weatherImg from '@assets/img/weather.webp'
import claroImg from '@assets/img/claro.webp'

interface ProjectsData {
  title: string
  image: ImageMetadata
  description: string
  website: string
  github: string
}

export const PROJECTS: ProjectsData[] = [
  {
    title: 'Spotify Clone',
    image: spotifyCloneImg,
    description:
      'Clon del reproductor de música de Spotify con reproducción de canciones, playlists, y mucho más. Hecho con Astro, React, Tailwind y Zustand para manejar estados globales.',
    website: 'https://spotifyclone-fleiva.netlify.app/',
    github: 'https://github.com/francisco-leiva/spotify-clone',
  },
  {
    title: 'Cineflix',
    image: cineflixImg,
    description:
      'Descubre las películas y series más populares del momento. Te mantiene al tanto de las tendencias en el mundo del entretenimiento. Hecho con Next.js, Tailwind y NextUI para la paginación.',
    website: 'https://cineflix-fleiva.vercel.app/',
    github: 'https://github.com/francisco-leiva/movies-app',
  },
  {
    title: 'Weather',
    image: weatherImg,
    description:
      'Aplicación para mantenerte informado sobre las condiciones climáticas actuales y futuras en tu ubicación. Hecho con Vite, React y Context para cambiar de tema según el clima.',
    website: 'https://weather-fleiva.netlify.app/',
    github: 'https://github.com/francisco-leiva/weather-app',
  },
  {
    title: 'Claro',
    image: claroImg,
    description:
      'Clon de Claro Argentina, página que se dedica a la venta de teléfonos móviles y accesorios. Hecho con React, SASS, Context para el carrito de la compra y Firebase para la base de datos.',
    website: 'https://claroarg.netlify.app/',
    github: 'https://github.com/francisco-leiva/react-js',
  },
]
