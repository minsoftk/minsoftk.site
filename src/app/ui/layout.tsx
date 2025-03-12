import Link from 'next/link';

export default function UILayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ul className="[&>*]:box-shadow flex [&>*]:m-3 [&>*]:rounded-xl [&>*]:border-1 [&>*]:border-gray-600 [&>*]:p-2">
        <li>
          <Link
            className="p-3"
            href="/ui/accordion/react"
          >
            React
          </Link>
        </li>
        <li>
          <Link
            className="p-3"
            href="/ui/accordion/js"
          >
            Javascript
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
