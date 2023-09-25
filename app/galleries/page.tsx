import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function galleries() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="flex font-custom leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-lg sm:leading-10 md:text-xl md:leading-13">
          Greetings to my art sanctuary! Should any piece stir your soul, a
          simple email will bridge our worlds. Let our artistic dialogue begin.
          <Link href="mailto:ydlvns@gmail.com" target="_email">
            <EnvelopeIcon className="w-12 h-12 text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}
