import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { Movie } from '../typing'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[]
  // When using firebase
  // movie: Movie | DocumentData[]
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)

  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left' ? scrollLeft - 260 : scrollLeft + 260
      // direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  // console.log(rowRef.current!.scrollLeft, rowRef.current!.clientWidth)
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          onClick={() => handleClick('left')}
          className={`absolute left-2 bottom-0 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
        />
        {/* ref goes to the movies  */}
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => handleClick('right')}
          className={`absolute right-2 bottom-0 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
        />
      </div>
    </div>
  )
}

export default Row
