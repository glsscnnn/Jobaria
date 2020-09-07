import { Application, send } from "https://deno.land/x/oak/mod.ts";

// instatiate application
const app = new Application();

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    // deno current working directory
    root: `${Deno.cwd()}/static`,
	// file from that directory to serve
    index: "index.html",
  });
});

await app.listen({ port: 8000 });
