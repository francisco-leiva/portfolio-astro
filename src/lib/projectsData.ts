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
      'Clon del reproductor de música de Spotify. Reproduce de canciones, explora playlists, y mucho más. Hecho con Astro, React, Tailwind y Zustand para manejar estados globales.',
    website: 'https://spotifyclone-fleiva.netlify.app/',
    github: 'https://github.com/francisco-leiva/spotify-clone',
  },
  {
    title: 'Cineflix',
    image: cineflixImg,
    description:
      'Descubre las películas y series más populares del momento. Te mantiene al tanto de las tendencias en el mundo del entretenimiento. Hecho con Next.js y Tailwind.',
    website: 'https://cineflix-fleiva.vercel.app/',
    github: 'https://github.com/francisco-leiva/movies-app',
  },
  {
    title: 'Weather',
    image: weatherImg,
    description:
      'Mantenente informado sobre las condiciones climáticas en tu ubicación. También cuenta con un buscador para informarte sobre el clima en otras ciudades. Hecho con Vite, React y Tailwind.',
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
