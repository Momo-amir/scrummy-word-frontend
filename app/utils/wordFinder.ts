"use server";

import { chromium } from "playwright";

export async function findWordsInWebsiteData(url: string): Promise<string[]> {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  const text = await page.evaluate(() => encodeURIComponent(document.body.innerText));
  await browser.close();
  const decoded = decodeURIComponent(text);
  const words = decoded.split(/\s+/).filter((word) => word.length > 0);
  return words;
}
