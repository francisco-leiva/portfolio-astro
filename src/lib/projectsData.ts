import cineflixImg from '@assets/img/cineflix.webp'
import weatherImg from '@assets/img/weather.webp'
import claroImg from '@assets/img/claro.webp'
import blancoYNegroImg from '@assets/img/blanco-y-negro.webp'

interface ProjectsData {
  title: string
  image: ImageMetadata
  description: string
  website: string
  github: string
}

export const PROJECTS: ProjectsData[] = [
  {
    title: 'Cineflix',
    image: cineflixImg,
    description:
      'Buscador de películas y series de televisión. Prodrás encontrar tus títulos favoritos y ver una breve descripción de ellos.',
    website: 'https://cineflix-fleiva.vercel.app/',
    github: 'https://github.com/francisco-leiva/movies-app',
  },
  {
    title: 'Weather',
    image: weatherImg,
    description:
      'Aplicación del clima en tiempo real. Brinda un pronóstico del tiempo por horas y por días. Según del tipo de clima, la web cambia de color.',
    website: 'https://weather-fleiva.netlify.app/',
    github: 'https://github.com/francisco-leiva/weather-app',
  },
  {
    title: 'Claro',
    image: claroImg,
    description:
      'Tienda de celulares y accesorios. En ella encontrarás productos de marcas conocidas. Copia de Claro Argentina hecha con React.',
    website: 'https://claroarg.netlify.app/',
    github: 'https://github.com/francisco-leiva/react-js',
  },
  {
    title: 'Blanco y Negro',
    image: blancoYNegroImg,
    description:
      'Venta de zapatos y zapatillas para hombres, mujeres y niños. E-commerce hecho con Javascript.',
    website: 'https://blanco-y-negro.netlify.app/',
    github: 'https://github.com/francisco-leiva/javascript',
  },
]
