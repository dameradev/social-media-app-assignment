import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import Link from 'next/link';
import Image from 'next/image';
import Tabs from '@/components/tabs';

const Index = () => {
  const router = useRouter();

  return (
    <div className=' mx-auto'>


      <header className='mx-auto container px-10 lg:px-0 flex justify-between lg:grid lg:grid-cols-3 items-center h-24'>
        <h1 className='text-3xl'>Breakout</h1>
        <nav className='hidden lg:flex justify-center  '>
          <ul className='flex gap-5 '>
            <li>

              <Link className='text-black' href="/">Home</Link>
            </li>
            <li>

              <Link className='text-black' href="/products">Products</Link>
            </li>
            <li>

              <Link className='text-black' href="/discussions">Discussions</Link>
            </li>
            <li>

              <Link className='text-black' href="/skin-diary">Skin Diary</Link>
            </li>
            <li>

              <Link className='text-black' href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className='hidden self-center lg:flex items-center  w-fit justify-self-end rounded-full gap-2'>

          <div className='border-[1px] border-black rounded-full p-2 w-16 h-16 flex items-center justify-center'>

            🔔
          </div>
          <div className='bg-purple-300 flex items-center rounded-full pr-2'>

            <Image
              className='p-[2px]'
              src="/images/jocelyn-culhane.png"
              alt="Jocelyn Culhane"
              width={50}
              height={50}
            />
            <p>Jocelyn Culhane</p>
          </div>

          {/* hamburger menu */}

          


        </div>
        <div className='lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-purple-300'>
            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path d="M4 6H20M4 12H20M4 18H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

      </header>

      <main className='mx-auto container flex flex-col px-10 md:px-0'>
        <div className='w-full mb-10'>

          <h1 className=' text-5xl mb-10'>My Routine</h1>
          <hr />
        </div>
        <div className='flex flex-col items-center lg:items-start lg:flex-row gap-10'>



          <div className='w-[25rem] flex flex-col gap-4 border-gray-500 rounded-xl border-2 p-4 '>
            <Image
              src="/images/bunny.png"
              alt="bunny"
              width={400}
              height={150}
            />
            <h2 className='text-4xl'>Joycelyn Culhane <span>🖊️</span></h2>
            <h3 className='text-3xl'>@ryry</h3>

            <p><span className='font-bold'>Age:</span> 30-40</p>
            <p><span className='font-bold'>Location:</span> New York, USA</p>
            <div className='flex flex-col'><span className='font-bold'>About me</span>
              <p className='mt-2'>
                I'm a passionate individual with a love for exploring the wonders of life. Curiosity is my driving force, and I'm constantly seeking new experiences and knowledge that broaden my horizons. Whether it's diving into the depths of a gripping novel or embarking on an adventure in the great outdoors, I embrace every opportunity to learn and grow.
              </p></div>
            <div className='flex flex-col '><span className='font-bold'>My Skin</span>
              <ul className=' mt-2 flex  flex-wrap gap-2'>
                <li className='p-2 border-black border-2 rounded-full'>Combination</li>
                <li className='p-2 border-black border-2 rounded-full'>Snesitive</li>
                <li className='p-2 border-black border-2 rounded-full'>Lines</li>
                <li className='p-2 border-black border-2 rounded-full'>Acne</li>
                <li className='p-2 border-black border-2 rounded-full'>Redness</li>
              </ul>
            </div>

          </div>

          <div className='flex-grow'>
            <Tabs />
            <div>
              <div className='mt-10'>

                <p className='text-6xl font-bold'>☀️ Morning</p>

                <div className='flex items-center py-10 px-24 rounded-xl border-dashed border-2 border-gray-500 w-fit gap-2 text-gray-500 font-bold mt-4'>
                  <span className='flex items-center justify-center text-white bg-black p-4 rounded-full h-10 w-10'>+</span>

                  Add product
                </div>
              </div>
              <div className='mt-10'>

                <p className='text-6xl font-bold'> 🌙 Night</p>

                <div className='flex items-center py-10 px-24 rounded-xl border-dashed border-2 border-gray-500 w-fit gap-2 text-gray-500 font-bold mt-4'>
                  <span className='flex items-center justify-center text-white bg-black p-4 rounded-full h-10 w-10'>+</span>

                  Add product
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
      <footer className='mt-32 bg-purple-400 flex justify-between'>
  <div className='mx-auto container py-10 lg:py-0 flex flex-col gap-10 lg:gap-0 lg:grid grid-cols-3 items-center h-40'>

    <h3 className='text-3xl'>Breakout</h3>

    <ul className='flex justify-between'>
      <li className='flex gap-2'>
        🎮
        <Link href="/">Discord</Link>
      </li>
      <li className='flex gap-2'>
        👍
        <Link href="/">Facebook</Link>
      </li>
      <li className='flex gap-2'>
        ✉️
        <Link href="/">Email</Link>
      </li>
    </ul>

    <ul className='flex gap-4 w-fit justify-end '>
      <li>
        Privacy Policy
      </li>
      <li>
        2023 Breakout
      </li>
    </ul>

  </div>
</footer>


    </div>
  );
};

export default Index;
