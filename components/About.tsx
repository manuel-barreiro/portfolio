import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"

const About = () => {
  return (
    <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 lg:pl-16'>
        <SectionTitle title='Sobre mí' />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>Hello! My name is Noor Mohammad and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
            <p>Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up, <span className="text-textGreen">a huge corporation, and a student-led design studio.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat veritatis, quidem repellat<span className="text-textGreen">ab natus possimus? Sint, accusamus!</span></p>
            <p>Algunas de las tecnologías que manejo:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Express.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Python
              </li>
            </ul>
          </div>
          <div className="lgl:w-1/3 mx-auto">
              <Image
                width={200}
                height={200}
                src='/assets/profile.JPG'
                className='rounded-full'
                alt="photo"
              />
          </div>
        </div>
    </section>      
  )
}

export default About