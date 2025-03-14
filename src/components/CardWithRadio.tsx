import Link from 'next/link';

export default function Card3() {
  return (
    <div className="min-h-[540px] max-w-[420px] rounded-3xl border border-gray-300 bg-white p-8 shadow-xl">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Apple Tv+의 모든 것</h1>
        <p className="m-3">
          화려한 출연진이 함께하는 Apple Original과 다채로운 콘텐츠를
          만나보세요.
        </p>
      </div>
      <div className="card3-content">
        <div className="[&>label>span]: [&>label]:relative [&>label]:my-3 [&>label]:flex [&>label]:items-center [&>label]:gap-4 [&>label]:rounded-xl [&>label]:border [&>label]:border-gray-300 [&>label]:p-4 [&>label>.check]:basis-[80px] [&>label>.check>em]:block [&>label>.check>em]:size-[44px] [&>label>.info>*]:block [&>label>input]:hidden">
          <label
            htmlFor="check1"
            className="has-checked:text-color has-checked:border-3 has-checked:border-purple-700 has-checked:text-purple-700"
          >
            <input
              name="plan"
              id="check1"
              type="radio"
              className="peer"
            />
            <span className="check peer-checked:[&>em]:bg-right">
              <em></em>
            </span>
            <span className="info">
              <b>무료 체험하기</b>
              <small>
                신규 구독자만 이용 가능하며 7일 무료 체험 후 월 6,500의 요금이
                청구됩니다.
              </small>
            </span>
          </label>

          <label
            htmlFor="check2"
            className="has-checked:text-color has-checked:border-3 has-checked:border-purple-700 has-checked:text-purple-700"
          >
            <input
              name="plan"
              id="check2"
              type="radio"
              className="peer"
            />
            <span className="check peer-checked:[&>em]:bg-right">
              <em></em>
            </span>
            <span className="info">
              <b>연간 회원신청</b>
              <small>
                연간 구독권은 연 60,000원으로 월 5천원 수준의 구독료로 이용
                가능합니다.
              </small>
            </span>
            <span className="best-badge absolute top-1 right-1 rounded-md bg-green-500 px-2 py-1 text-xs text-white">
              Best Plan
            </span>
          </label>
        </div>
        <div className="mx-auto mt-6 w-2/3 text-center [&>button]:my-2 [&>button]:block [&>button]:w-full [&>button]:rounded-full [&>button]:p-3">
          <button className="bg-black text-white">계속하기</button>
          <button className="border border-gray-300 bg-white">
            페이팔로 계속하기
          </button>
          <Link
            className="text-sm text-blue-500 underline"
            href="#none"
          >
            더 많은 구독 플랜 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
