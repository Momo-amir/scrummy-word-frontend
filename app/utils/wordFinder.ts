"use server";

import { chromium } from "playwright";

export async function findWordsInWebsiteData(url: string): Promise<string[]> {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  const text = await page.evaluate(() => document.body.innerText);
  await browser.close();
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  return words;
}
