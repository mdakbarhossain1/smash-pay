import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET(req: NextRequest) {
  try {
    const feed = await parser.parseURL('https://cointelegraph.com/rss');
    return NextResponse.json(feed.items);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 });
  }
}
