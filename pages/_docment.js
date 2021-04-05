// another special file which can be added to the root pages directory
// allows you to modify the root component inside the body html Element
// completely optional (likely wont be used often)

// you import from next/document
// but it needs to be a class based component

// example for nextjs

// import Document, { Html, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

//   render() {
//     return (
//       <Html>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

// export default MyDocument