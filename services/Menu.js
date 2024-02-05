import API from "./API.js"; //put .js if this import doesnt work

export async function loadData() {
  myapp.store.menu = await API.fetchMenu();
}