import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react'

const PostLink = props => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <Button size='small' color='green'>
        <Icon name='download' />
        Download
    </Button>
      {getPosts().map(post => (
          <PostLink key={post.id} id={post.id} title={post.title} />
      ))}
      <style jsx>{`
        h1 {
          font-family: 'Arial';
        }
      `}</style>
    </Layout>
  );
}