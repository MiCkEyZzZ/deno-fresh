export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <section class="flex justify-center w-full items-center">
        <div class="text-center">
          <h1 class="text-6xl md:text-9xl font-extrabold">
            {props.serverCode}
          </h1>
          <p class="text-2xl md:text-3xl p-4">{props.codeDescription}</p>
          <div class="p-4">
            <a
              href="/"
              class="text-sm p-4 bg-white hover:bg-gray-100 border hover:border-gray-100 rounded-md"
            >
              На главную
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function PageNotFound() {
  return (
    <ServerCodePage
      serverCode={404}
      codeDescription={"Страница не найдена"}
    />
  );
}
