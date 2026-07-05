"use client";

import { useEffect } from "react";

export default function LocatorProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    import("@locator/runtime").then(({ default: setupLocatorUI }) => {
      setupLocatorUI({
        // "jsx" adapter reads data-locatorjs attributes injected by
        // @locator/webpack-loader — avoids the React-19 fiber hook entirely.
        adapter: "jsx",
        targets: {
          cursor: {
            url: "cursor://file/${filePath}:${line}:${column}",
            label: "Cursor",
          },
        },
      });
    });
  }, []);

  return null;
}

