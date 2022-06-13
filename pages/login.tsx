import Head from 'next/head'
import Image from 'next/image'

function Login() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="/images/backgroundImage.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="/logoImg.svg"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sing In</h1>
        <div className="flex flex-col space-y-4">
          <label htmlFor="" className="w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label htmlFor="" className="w-full">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="input"
            />
          </label>
        </div>
        <button className="w-full rounded bg-[#e50914] py-3 font-semibold">
          Sing In
        </button>
        <div className="text-[gray]">
          New to Netflix?
          <button
            className="ml-1 cursor-pointer text-white hover:underline"
            type="submit"
          >
            Sing up Now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
