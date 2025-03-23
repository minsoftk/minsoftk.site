export default function Table() {
  return (
    <table className="w-full rounded-md bg-white shadow-lg select-none">
      <caption>This table about Test</caption>
      <caption className="caption-bottom text-right">test</caption>
      <thead className="border-b border-gray-300 bg-gray-300 text-white [&>tr>th]:p-3">
        <tr>
          <th className="rounded-tl-lg">no</th>
          <th>club</th>
          <th>games</th>
          <th>win</th>
          <th>lose</th>
          <th className="rounded-tr-lg">draw</th>
        </tr>
      </thead>
      {/* 호버가 있는 경우에는 스트라이프를 없앤다. */}
      {/* [&>tr:hover]:bg-gray-300 */}
      <tbody className="[&>tr]:border-b [&>tr]:border-gray-300 [&>tr:last-child]:border-none [&>tr:nth-child(even)]:bg-gray-100 [&>tr>td]:text-center">
        <tr>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test2</td>
          <td>test2</td>
          <td>test2</td>
          <td>test2</td>
          <td>test2</td>
          <td>test2</td>
        </tr>
        <tr>
          <td>test3</td>
          <td>test3</td>
          <td>test3</td>
          <td>test3</td>
          <td>test3</td>
          <td>test3</td>
        </tr>
        <tr>
          <td>test4</td>
          <td>test4</td>
          <td>test4</td>
          <td>test4</td>
          <td>test4</td>
          <td>test4</td>
        </tr>
      </tbody>
    </table>
  );
}
