
import store from "@/store";

export async function forceLogout () {
  await store.dispatch('login/logout')
  location.reload()
}