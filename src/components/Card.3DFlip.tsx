import Image from 'next/image';
import ArcDeTriomphe from '@/assets/images/card/arc-de-triomphe.jpg';
import Money from '@/assets/images/card/money.jpg';
export default function Card2() {
  return (
    <div className="frame group relative h-[550px] w-[350px] perspective-[1200px]">
      <div className="card absolute h-full w-full transition-all duration-400 transform-3d group-hover:rotate-y-180 [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:rounded-3xl [&>div]:border [&>div]:border-gray-300 [&>div]:shadow-lg">
        <div className="front overflow-hidden bg-white">
          <Image
            src={ArcDeTriomphe}
            fill
            className="object-cover"
            alt="shoes"
          ></Image>
          <div className="absolute top-[30px] flex w-full flex-col pl-5 text-white">
            <h2 className="text-2xl font-semibold">
              MinsoftK's Site
              <span className="block text-base font-normal">
                Frontend Developer
              </span>
            </h2>
            <button
              type="button"
              className="mr-4 self-end rounded-full border border-white p-2 px-4 text-xs"
            >
              View more
            </button>
          </div>
        </div>
        <div className="back rotate-y-180 overflow-hidden bg-white p-10 text-center backface-hidden">
          <Image
            src={Money}
            alt="money-pic"
          ></Image>
          <h1 className="text-4xl tracking-tight">
            <b className="block">MinsoftK Site</b> Portfolio
          </h1>
          <div className="my-5 text-left [&>p]:block [&>p]:text-[0.9rem]">
            <p>1. 수입보다 지출을 적게 하라</p>
            <p>2. 돈을 시간으로 바꿔라.</p>
            <p>4. 돈의 흐름을 읽고, 기회를 잡아라</p>
          </div>
          <div className="mb-10 flex [&>div]:flex-1 [&>div]:border-r-2 [&>div]:border-gray-400 [&>div]:text-2xl [&>div:last-child]:border-r-0 [&>div>b]:block [&>div>span]:text-xs">
            <div>
              <b>31K</b>
              <span>followers</span>
            </div>
            <div>
              <b>400</b>
              <span>following</span>
            </div>
            <div>
              <b>200</b>
              <span>videos</span>
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-purple-800 p-2 text-white hover:cursor-pointer hover:bg-purple-900"
          >
            follow us
          </button>
        </div>
      </div>
    </div>
  );
}
