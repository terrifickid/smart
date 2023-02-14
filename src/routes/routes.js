// Components
import Home from "./Home.svelte";
import Event from "./Event.svelte";
import List from "./List.svelte";
import Dashboard from "./Dashboard.svelte";

// Export the route definition object
export default {
  // Exact path
  "/": Home,
  "/event": Event,
  "/list": List,
  "/Dashboard": Dashboard,
};
