import Image from 'next/image';
import woman from '@/assets/images/card/woman-1.jpg';
export default function Card1() {
  return (
    <figure className="group relative m-0 aspect-[9/16] w-[400px] overflow-hidden rounded-2xl border p-0 shadow-[10px_10px_10px_rgba(0,0,0,0.15)]">
      <h1 className="group-hover:before:animate-heart-bounce absolute z-1 mt-5 w-full text-center text-4xl font-semibold text-white before:inline-block before:content-['🔥']">
        Mongole Empire
      </h1>
      <Image
        src={woman}
        className="object-cover transition-all duration-500 group-hover:scale-115"
        fill
        alt="card1-image"
      ></Image>
      {/* -bottom-[220px] */}
      <figcaption className="absolute -bottom-[330px] bg-black/70 p-6 text-white transition-all duration-500 group-hover:bottom-0">
        <h3 className="font-semibold capitalize">📕 view detail</h3>
        <p className="my-4 text-lg">
          이 여성은 깊고 신비로운 눈빛을 가진 강렬한 분위기의 인물입니다. 어두운
          색상의 전통적인 패턴이 들어간 스카프를 두르고 있으며, 빛이 얼굴을
          부드럽게 감싸며 신비로운 분위기를 연출합니다. 자연스럽게 흩어진 곱슬
          머리카락이 그녀의 이목구비를 더욱 돋보이게 하고, 강한 의지를 지닌 듯한
          눈빛이 인상적입니다. 그녀의 손끝이 스카프를 살며시 쥔 모습은
          우아하면서도 내면의 깊은 이야기를 담고 있는 듯한 느낌을 줍니다.
        </p>
        <a
          href="#"
          className="block rounded-lg bg-blue-400 p-2 text-center hover:bg-blue-500"
        >
          Learn More
        </a>
      </figcaption>
    </figure>
  );
}
