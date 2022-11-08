import sanity from "./sanity";
import ImageUrlbuilder from "@sanity/image-url";

const builder = ImageUrlbuilder(sanity);

export const urlFor = (source: any) => builder.image(source);
