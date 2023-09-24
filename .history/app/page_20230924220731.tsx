import Image from "next/image";
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          ABOUT ME
        </h1>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            src="https://i.ibb.co/pLtDPwp/image.png"
            alt="image"
            width={300}
            height={300}
            className="h-48 w-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            HANG GAO
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            &quot;Hello, I&apos;m Gao Hang, an artist and educator.&quot;
          </p>
          <div className="flex space-x-5 pt-6">
        
     

            <a href="mailto:ydlvns@gmail.com" target="_blank">
              < EnvelopeOpenIcon
                className="w-8 h-8 text-blue-500"
             / >
               
            </a>
          </div>
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-7 leading-loose dark:prose-invert xl:col-span-2">
          <p>🌟 Junior Frontend Enthusiast Eager to Learn! 🪄</p>
          <p>
            I&apos;m a budding magician in the world of web development, and
            I&apos;m passionate about crafting web experiences that are not only
            functional but also visually appealing. I&apos;m currently honing my
            skills in JavaScript,React.JS,Tailwind,CSS,Firebase... and I&apos;m
            excited about the journey ahead. 🌐✨
          </p>
          <p>
            What sets me apart is my enthusiasm for collaboration and learning.
            I thrive in team settings, and I&apos;m always eager to absorb
            knowledge from experienced developers. I may be new to the field,
            but I&apos;m a quick learner and a diligent worker, ready to
            contribute to projects with a fresh perspective. 🧙‍♂️🚀
          </p>
          <p>
            If you&apos;re in search of a junior teammate for your web
            development adventures, someone who&apos;s eager to add a touch of
            magic to your projects while learning and growing alongside you,
            I&apos;m here and ready to embark on this exciting journey of web
            development together. Let&apos;s create some enchanting digital
            experiences! 🌌✨
          </p>
        </div>
      </div>
    </div>
  );
}
