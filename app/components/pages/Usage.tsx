import { usage } from "../../data/usage";

export default function Usage() {
  return (
    <section className="max-w-2xl mt-20">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, languages, and technologies I use to design, build, and ship
          products.
        </p>
      </div>

      <div className="space-y-8">
        {usage.map((category) => (
          <div key={category.title}>
            <h3 className="font-incognito text-2xl font-semibold mb-3 tracking-tight">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => {
                const isMono = item.color === "#ffffff";

                return (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-3 py-1.5 text-sm dark:text-zinc-300 text-zinc-700"
                  >
                    <item.icon
                      className={`text-base ${
                        isMono ? "dark:text-white text-zinc-800" : ""
                      }`}
                      style={isMono ? undefined : { color: item.color }}
                      aria-hidden="true"
                    />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
