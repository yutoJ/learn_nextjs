import Head from 'next/head'
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   );
// };

// const Layout = props => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.content}
//   </div>
// );

const Layout = props => (
  <div>
    <Head>
      <title>Initial</title>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Head>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;