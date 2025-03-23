export default function LoginPage() {
  return (
    <section className="grid h-full place-items-center bg-[url('/images/background.avif')] bg-cover">
      <div className="w-[380px] rounded-2xl border border-white/30 border-r-white/10 border-b-white/10 bg-white/10 p-8 text-center text-white shadow-xl backdrop-blur-[16px]">
        <h2 className="mb-[30px] text-4xl">Member login</h2>
        <div className="mb-5 [&>input]:mb-2 [&>input]:block [&>input]:w-full [&>input]:rounded-md [&>input]:border [&>input]:border-gray-300 [&>input]:bg-white/30 [&>input]:p-2 [&>input]:pl-10 [&>input]:text-[#333] [&>input]:outline-none [&>input]:focus:placeholder:invisible [&>input::placeholder]:text-white">
          <input
            type="text"
            placeholder="Username"
            className="bg-image bg-[url('/images/user-solid-white.svg')] bg-[left_10px_center] bg-no-repeat"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-image bg-[url('/images/lock-solid.svg')] bg-[left_10px_center] bg-no-repeat"
          />
        </div>
        <button className="w-full rounded-full bg-white/40 p-2 hover:bg-white/60">
          로그인
        </button>
        <p className="m-4 [&>span]:block [&>span]:underline">
          <span>비밀번호를 잃어버렸나요?</span>
          <span>회원가입</span>
        </p>
      </div>
    </section>
  );
}
