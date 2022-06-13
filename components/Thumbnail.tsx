import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { baseUrl500 } from '../constants/movie'
import { Movie } from '../typing'

interface Props {
  // When using firebase
  // movie: Movie | DocumentData
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
      className="cursore-pointer tansition relative h-28 min-w-[180px] cursor-default duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`${baseUrl500}${movie.backdrop_path || movie.poster_path}`}
        className="md:rounde cursor-pointer rounded-sm object-cover"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
