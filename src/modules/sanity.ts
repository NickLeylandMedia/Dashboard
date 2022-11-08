// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  apiVersion: "2022-04-25",
  projectId: "0j9pbahj", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});
