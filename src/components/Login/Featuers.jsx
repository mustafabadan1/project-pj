import React from 'react'

const Featuers = () => {
  return (
    <> 
    <div className=' h-screen mb-32 max-w-8xl mx-auto mt-20 container  pt-16'id='features'>
      <section >
        <div>
          <div className='flex items-center flex-col px-4'>
            <p className='focus:outline-none uppercase text-sm text-center text-gray-600 leading-4 border-b-2 pb-1 border-blue-200'>
              in few easy steps
            </p>
            <h1 className='focus:outline-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4'>
              Create Beautiful Landing Pages &amp; Web Apps in a Jiffy
            </h1>
          </div>
          <div
            aria-label='group of cards'
            className='focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4'
          >
            <div
              aria-label='card 1'
              className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
            >
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-blue-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img
                    src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg'
                    alt='drawer'
                  />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 className='focus:outline-none text-lg font-bold leading-tight text-gray-800'>
                  Ready to use components
                </h2>
                <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  It provides a very simple start, no need to write a lot of
                  code, you just import it and start the primitive
                  components and create the ones you need.
                </p>
              </div>
            </div>
            <div
              aria-label='card 2'
              className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
            >
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-blue-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img
                    src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg'
                    alt='check'
                  />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                  Hight Quality UI you can reply on
                </h2>
                <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  Modify the visual appearance of your site – including
                  colors, fonts, margins and other style-related properties
                  – with a sophisticated style.
                </p>
              </div>
            </div>
            <div
              aria-label='card 3'
              className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
            >
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img
                    src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg'
                    alt='html tag'
                  />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                  Coded by Developers for Developers
                </h2>
                <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  Instead of just giving you the tools to create your own
                  site, they offer you a list of themes you can choose from.
                  Thus a handy product.
                </p>
              </div>
            </div>
            <div
              aria-label='card 4'
              className='focus:outline-none flex sm:w-full md:w-5/12 pb-20'
            >
              <div className='w-20 h-20 relative mr-5'>
                <div className='absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1' />
                <div className='absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3'>
                  <img
                    src='https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg'
                    alt='monitor'
                  />
                </div>
              </div>
              <div className='w-10/12'>
                <h2 className='focus:outline-none text-lg font-semibold leading-tight text-gray-800'>
                  The Last UI kit you’ll ever need
                </h2>
                <p className='focus:outline-none text-base text-gray-600 leading-normal pt-2'>
                  We have chosen the bright color palettes that arouse the
                  only positive emotions. The kit that simply assures to be
                  loved by everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></>
  )
}

export default Featuers