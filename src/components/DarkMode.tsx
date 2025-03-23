export default function DarkMode() {
  return (
    <div className="w-[400px] rounded-lg bg-white px-6 py-8 shadow-xl ring ring-gray-900/5 dark:bg-gray-800">
      <div>
        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          <svg className="h-6 w-6 stroke-white"></svg>
        </span>
      </div>
      <h3 className="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white">
        Writes upside-down
      </h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
  );
}
