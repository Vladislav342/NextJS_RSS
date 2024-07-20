import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Blog</h1>
            <p>
                Visit the <Link href="/posts">Posts</Link> page to see all blog posts.
            </p>
        </div>
    );
}