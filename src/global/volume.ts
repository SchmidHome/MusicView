import { writable } from "svelte/store";
import { customFetch } from "./functions";

export const volume = writable<number>(0);

export async function refreshVolume(): Promise<number> {
  if (import.meta.env.PUBLIC_MOCK_SERVER && import.meta.env.DEV) {
    volume.set(50);
    //@ts-ignore
    window.volume = 50;
    return 50;
  }
  const volumeValue = parseInt(await customFetch<string>("/volume"));
  if (isNaN(volumeValue)) return 0;
  volume.set(volumeValue);
  //@ts-ignore
  window.volume = volumeValue;
  return volumeValue;
}

// refetch volume every 3 seconds
setInterval(
  refreshVolume,
  import.meta.env.PUBLIC_VOLUME_FETCH_INTERVAL || 3000
);
refreshVolume();

export default volume;
