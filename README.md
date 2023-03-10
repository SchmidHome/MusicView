# How to use

To start the app run `yarn start` (after installing dependencies). The server will run on port 8080 by default but this can be changed with the `PORT` environment variable. <br>
If you want to host the files yourself you can run `yarn build` and then serve the files in the `dist` folder.

## Environment Variables

Following environment variables can be used (only `PUBLIC_SERVER_URL` is mandatory)

```ts
{
  // base url for the server serving the api ("/playing", "/queue"...)
  PUBLIC_SERVER_URL: string = "http://localhost:3000",
  // this is set to "true" while in dev mode (e.g. when running "yarn dev")
  PUBLIC_MOCK_SERVER: "true" | "false" = "false",
  // all fetch times are in miliseconds
  PUBLIC_VOLUME_FETCH_INTERVAL: number = 3000,
  PUBLIC_QUEUE_FETCH_INTERVAL: number = 3000,
  PUBLIC_CURRENT_SONG_FETCH_INTERVAL: number = 3000,
  PUBLIC_LYRICS_FETCH_INTERVAL: number = 20000,
  // fallback link if no qr code link is given as url query param
  PUBLIC_DEFAULT_QR_LINK: string = "https://t.me/MusicHomeBot"
  // link the vote button redirects to
  PUBLIC_VOTE_LINK: string = "https://t.me/MusicHomeBot"
}
```

You can change the environment variables in the `.env.production` in the root folder or pass them when running the `yarn build` or `yarn start` command.

## Query Parameters

Following query parameters are possible to change the behavior of the site. All query parameters are optional.

1. `qr`: link the QR code goes to (e.g. `?qr=https%3A%2F%2Ft.me%2FMusicHomeBot`)
2. `vote`: link the vote button goes to (e.g. `?vote=https%3A%2F%2Ft.me%2FMusicHomeBot`)
3. `lyrics`: `"true" | "false"` whether to show the lyrics or not (e.g. `?lyrics=true`)
4. `only-lyrics`: `"true" | "false"` whether to show only the lyrics or default view (e.g. `?only-lyrics=true`)
