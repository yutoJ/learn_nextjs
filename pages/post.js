import { withRouter } from 'next/router';
import Layout from '../components/MyLayout.js';
import Markdown from 'react-markdown';

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
        This is our blog post.
        ## cd
     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </div>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;