import Link from 'next/link';

export default function LayoutPage() {
  return (
    <div className="grid place-content-center pt-3">
      <Link href="/layout/login">1. 로그인 글래스모피즘</Link>
      <Link href="/layout/login">2. 로그인 글래스모피즘</Link>
      <Link href="/layout/login">3. 로그인 글래스모피즘</Link>
    </div>
  );
}
