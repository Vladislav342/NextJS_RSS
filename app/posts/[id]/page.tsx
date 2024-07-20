import { getSortedPostsData, PostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';

interface PostProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map(post => ({
        id: post.id,
    }));
}

export default function Post({ params }: PostProps) {
    const posts = getSortedPostsData();
    const post = posts.find(p => p.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <h1>{post.title}</h1>
            <div>{post.date}</div>
            <div>{post.content}</div>
        </article>
    );
}