import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
});

await app.listen({ port: 8000 });
