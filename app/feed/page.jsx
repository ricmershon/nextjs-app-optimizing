import Posts from '@/components/posts';
import { getPosts } from '@/lib/data';

// 'generateMetadata' is a Next reserved word
export async function generateMetadata() {
    const numPosts = (await getPosts()).length;

    return {
        title: 'Browse our Posts',
        description: `Browse all of our ${numPosts} posts.`
    }
}

export default async function FeedPage() {
    const posts = await getPosts();
    return (
        <>
            <h1>All posts by all users</h1>
            <Posts posts={posts} />
        </>
    );
}
