// Only runs in the browser, safe for SSR
export const generateCursor = (emoji: string): string => {
  if (typeof window === "undefined") {
    return "";
  }

  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;

  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  // Draw emoji centered in canvas
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 16, 16);

  return canvas.toDataURL();
};

export const getSunsetCursorUrl = (): string => {
  return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><text x="16" y="20" font-size="24" text-anchor="middle" dominant-baseline="middle">🌅</text></svg>') 16 16, auto`;
};
