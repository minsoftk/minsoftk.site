'use client';

import { cn } from '@/assets/utils/css';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Modal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleModal = () => setOpenModal((prev) => !prev);
  return (
    <div
      className={cn(
        'overlay',
        'relative grid h-[700px] w-full flex-col place-items-center bg-gradient-to-r from-cyan-700 to-cyan-200',
      )}
    >
      <button
        className="w-[200px] self-center rounded-xl bg-cyan-400 !p-3 text-white hover:cursor-pointer"
        onClick={handleModal}
      >
        Open Modal
      </button>
      <div
        className={cn(
          'modal invisible absolute top-1/2 left-1/2 w-[400px] -translate-x-1/2 rounded-lg bg-white p-7 shadow-xl transition-all duration-300',
          openModal
            ? 'visible -translate-y-1/2 opacity-100'
            : 'invisible -translate-y-3/4 opacity-0',
        )}
      >
        <div className="flex justify-between border-b border-gray-400 pb-6">
          <h3 className="text-2xl font-semibold capitalize">Share Link</h3>
          <button
            onClick={handleModal}
            className="size-[30px] rounded-full bg-gray-100 p-2 py-[2px] text-gray-500 hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div>
          <h3 className="py-3 text-xl">Share this link</h3>
          <div className="flex justify-between [&>button]:size-[50px] [&>button]:cursor-pointer [&>button]:rounded-full [&>button]:border [&>button]:border-gray-300">
            <button>
              <FontAwesomeIcon
                className="text-Facebook"
                icon={faFacebookF}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="text-Twitter"
                icon={faTwitter}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="text-Instagram"
                icon={faInstagram}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="text-LinkdIn"
                icon={faLinkedinIn}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="text-Te"
                icon={faTelegram}
              />
            </button>
          </div>
        </div>
        <div>
          <h3 className="py-3 text-xl">Copy link</h3>
          <div className="flex items-center gap-2 border border-gray-300 p-2">
            <span>
              <FontAwesomeIcon icon={faLink} />
            </span>
            <span>https://localhost:3000/ui</span>
            <button className="ml-auto rounded-md bg-cyan-500 p-1 px-2 text-white capitalize">
              copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
