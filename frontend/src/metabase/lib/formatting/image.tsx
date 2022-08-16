import React from "react";

import { getUrlProtocol } from "./url";
import { OptionsType } from "./types";

export const ROW_HEIGHT_WITH_IMAGE = 102;

export function formatImage(
  value: string,
  { jsx, rich, view_as = "auto", link_text, full_size }: OptionsType = {},
) {
  const url = String(value);
  const protocol = getUrlProtocol(url);
  const acceptedProtocol = protocol === "http:" || protocol === "https:";
  if (jsx && rich && view_as === "image" && acceptedProtocol) {
    const style = {
      maxHeight: full_size
        ? "calc(80vh - 4rem - 15px)"
        : ROW_HEIGHT_WITH_IMAGE - 2,
      maxWidth: "100%",
    };
    return <img src={url} style={style} />;
  } else {
    return url;
  }
}
