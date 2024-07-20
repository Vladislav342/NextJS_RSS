import { NextResponse } from 'next/server';
import RSS from 'rss';
import { getSortedPostsData } from '../../../lib/posts';

export const GET = async () => {
    const posts = getSortedPostsData();

    const feed = new RSS({
        title: "Blog posts | RSS Feed",
        description: 'Your Site Description',
        feed_url: 'https://example.com/rss.xml',
        site_url: 'https://example.com/',
        image_url: 'https://example.com/image.png',
        language: 'en',
        pubDate: new Date().toISOString(),
        ttl: 60,
    });

    posts.forEach(post => {
        feed.item({
            title: post.title,
            guid: post.id,
            url: `https://example.com/posts/${post.id}`,
            description: post.excerpt,
            date: post.date,
        });
    });

    return new NextResponse(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/rss+xml',
        },
    });
};