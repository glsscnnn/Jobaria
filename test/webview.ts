import { WebView } from "https://deno.land/x/webview/mod.ts";

const contentType = 'text/html'
const sharedOptions = {
  width: 400,
  height: 200,
  resizable: true,
  debug: true,
  frameless: false,
};

const webview1 = new WebView({
  title: "This is a WebView",
  url: `data:${contentType},
    <html>
    <body>
	<h1>What does that mean?</h1>
	<p>
	Hello nerd I am a prodigy!
	</p>
    </body>
    </html>
    `,
  ...sharedOptions,
});

/*
const webview2 = new WebView({
  title: "Multiple deno_webview example",
  url: `data:${contentType},
    <html>
    <body>
      <h1>2</h1>
    </body>
    </html>
    `,
  ...sharedOptions,
});
*/

await Promise.all([webview1.run()]);
