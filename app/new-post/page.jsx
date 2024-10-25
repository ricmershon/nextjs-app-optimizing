import { createPost } from '@/lib/actions';
import PostForm from '@/components/post-form';

export default function NewPostPage() {
    return <PostForm action={createPost} />;
}
