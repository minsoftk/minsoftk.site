export default function HoverTooltip() {
  return (
    <div className="relative w-[600px] cursor-pointer rounded-xl border p-10 hover:border-purple-400">
      <div>
        <h3 className="mb-2 text-xl font-semibold">10%적립 요금제</h3>
        <div>
          <span className="rounded-sm bg-green-500 px-2 text-sm text-white">
            N포인트 적립
          </span>
          <span className="rounded-sm bg-teal-500 px-2 text-sm text-white">
            3Mbps 무제한
          </span>
        </div>
      </div>
      <div className="my-4 text-right text-2xl font-semibold text-purple-800">
        <span>34,900원</span>
      </div>
      <div className="flex justify-center gap-10 bg-gray-100/50 py-4">
        <span>
          <i className="bi bi-arrow-down-up"></i> 10GB+일2GB
        </span>
        <span>
          <i className="bi bi-telephone-fill"></i> 기본제공
        </span>
        <span>
          <i className="bi bi-envelope-fill"></i> 기본제공
        </span>
      </div>
      <ul className="mt-5 list-inside list-disc text-[0.9rem] text-gray-400">
        <li className="group relative [width:max-content]">
          최대 3Mbps 속도로 데이터 무제한 이용{' '}
          <i className="bi bi-question-circle-fill"></i>
          <div className="absolute top-[30px] left-[95px] hidden w-[350px] rounded-md border bg-white p-5 text-[13px] text-[#333] group-hover:block">
            <h3 className="font-semibold">최대 3Mbps는</h3>
            <p className="my-2">
              <span className="inline-block size-[25px] rounded-full bg-yellow-400 pt-[3px] text-center">
                <i className="bi bi-chat-dots-fill"></i>
              </span>{' '}
              웹서핑, e-mail, SNS, 카카오톡 위주로 이용 가능
            </p>
            <p className="my-2">
              <span className="inline-block size-[25px] rounded-full bg-red-600 pt-[3px] text-center text-white">
                <i className="bi bi-youtube"></i>
              </span>{' '}
              유튜브 720P 화질을 무난하게 볼 수 있어요
            </p>
          </div>
        </li>
      </ul>
      <span className="absolute top-0 right-0 rounded-[0_0_0_10px] border-b border-l px-3 py-2 text-sm text-gray-600">
        비교하기 <i className="bi bi-plus"></i>
      </span>
    </div>
  );
}
