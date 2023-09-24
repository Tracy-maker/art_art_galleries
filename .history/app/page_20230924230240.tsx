import Image from "next/image";
import {
  EnvelopeOpenIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-4 md:space-x-5">
        <div className="text-base font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-10 md:text-xl md:leading-13">
          Greetings, art enthusiast! Join me at the canvas of curiosity, where
          vibrant imagination meets a delightful collection of unique oil
          paintings. My blog, filled with art-related humor and insights, awaits
          your exploration. Let&apos;s indulge in artistic banter and revel in
          the world of creativity together! 🎨 😄
        </div>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-6">
          <Image
            src="https://i.ibb.co/pLtDPwp/image.png"
            alt="image"
            width={500}
            height={700}
            className="rounded-lg object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            HANG GAO
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            &quot;Hello, I&apos;m Gao Hang, an artist and educator.&quot;
          </p>
          <div className="flex space-x-5 pt-6">
            <a href="mailto:ydlvns@gmail.com" target="_email">
              <EnvelopeOpenIcon className="w-8 h-8 text-blue-500" />
            </a>
            <a
              href="https://instagram.com/ha.ng2512?igshid=MzRlODBiNWFlZA=="
              target="_instagram"
            >
              <BuildingStorefrontIcon className="w-8 h-8 text-blue-500" />
            </a>
          </div>
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-7 leading-loose dark:prose-invert xl:col-span-2">
          <p>
            Allow me to introduce myself properly 🎨: I&lsquo;ve walked the
            hallowed halls of academia, graduating from the prestigious Lu Xun
            Academy of Fine Arts in 2015 and proudly earning my Master's in Fine
            Art from RMIT in 2021 🎓. Since 2016, I've been a torchbearer of
            creativity, guiding aspiring artists on their own unique paths 🌟. I
            firmly believe in the transformative magic of art, the way it can
            reshape our perceptions, stir our emotions, and breathe life into
            the mundane ✨.
          </p>
          <p>
            So, dear friend, whether you seek a masterpiece to grace your walls
            or guidance on your artistic odyssey, I am here to be your companion
            and guide 🖌️. Let's embark on this creative journey together, where
            every brushstroke tells a story 📖, and every canvas holds the
            promise of boundless artistic expression 🎨.
          </p>
        </div>
      </div>
    </div>
  );
}
