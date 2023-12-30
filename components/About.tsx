import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"

const About = () => {
  return (
    <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 lg:pl-16'>
        <SectionTitle title='Sobre mí' />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify">
            <p>G&apos;day! I&apos;m Manuel, a software engineer and full-stack developer.</p>
            <p>I&apos;ve got a deep passion for technology—I&apos;ve always enjoyed coding and diving into demanding projects that let me expand my skills and push boundaries. I&apos;m constantly on the lookout for fresh challenges and chances to advance as an  <span className="text-textGreen">engineer and developer.</span></p>
            <p>Cheers for checking out my portfolio!</p>
            <p>Here are a few skills I possess:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
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
                Python
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
                MySQL
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt/>
                </span>
                Figma
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
                priority={true}
              />
          </div>
        </div>
    </section>      
  )
}

export default About