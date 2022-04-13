// issue #4290
// #intro alias not reference to correct definition file.
// please uncomment custom definition in root project -> shim.dts to see result
import { useRuntimeConfig } from "#nitro";

const config = useRuntimeConfig();

export default defineEventHandler(async () => {
  return config;
});
