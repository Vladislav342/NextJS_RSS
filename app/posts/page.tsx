import Link from 'next/link';
import { getSortedPostsData, PostData } from '../../lib/posts';

export default function Posts() {
    const allPostsData: PostData[] = getSortedPostsData();

    return (
        <ul>
            {allPostsData.map(({ id, title }) => (
                <li key={id}>
                    <Link href={`/posts/${id}`}>
                        {title}
                    </Link>
                    <hr />
                </li>
            ))}
        </ul>
    );
}