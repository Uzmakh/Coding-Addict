/* eslint-disable react/prop-types */
// import './index.css'

// <!-- video-12 -->
// starting first project
// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };
// const Book = () => {
//     return <article className="book">
//         <Image />
//         <Title />
//         <Author />
//     </article>
// }

// const Image = () => <img src="./book-images/book-1.jpg" alt="Book-1" />;
// const Title = () => <h2>Hot Mess (Diary of a Wimpy Kid Book 19) (Diary of a Wimpy Kid, 19) (Volume 19)</h2>;
// JSX - CSS (inline styles)
// const Author = () => { return <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}> by Jeff Kinney (Author)</h4>
// };       //styles in object with key-value pairs of css properties

// alternative option
// const Author = () => {
//     const inlineHeadingStyles =  {
//         color: '#617d98',
//             fontSize: '0.75rem',
//                 marginTop: '0.5rem',
//     }
// instead of passing the values directly, we are going to use reference here in curly-braces-Moreover, we can do this in explicit return case,we can't do this in implicit return case
// return <h4 style={inlineHeadingStyles}>by Jeff Kinney (Author)</h4>;
// };

// FOR THE MOST PART, MULTIPLE APPROACHES AVAILABLE !!!
// AS LONG AS THE RESULT IS THE SAME, REALLY COMES DOWN TO PREFERENCE !!!!

// It was all about till video-15
// Now we will.......do like this
// video-16
// In Video-17, its more clear picture there in form of clear code
// const author = "by Jeff Kinney (Author)";
// const Book = () => {
//     const title= "Hot Mess (Diary of a Wimpy Kid Book 19)" + "(Diary of a Wimpy Kid, 19)" +
//     "(Volume 19)";
//   return (
//     <article className="book">
//       <img src="../book-images/book-1.jpg" alt="" />
//       <h2>
//               {title}
//               {/*Though not getting data from any external API, we are in the right direction-rendering data on browser;it will be dynamic , with no hard-coding , as we go ahead */}
//       </h2>

//           <h4>
//               {author.toUpperCase()}
//           </h4>
//           {/* <p>{let x=6 }</p>  */}
//           {/* <p>{6+6 }</p> */}
//           {/* So in curlies, we can apply our logic in Js format */}
//           {/* For reference, see README.md file */}
//     </article>
//   );
// };

// Now we have a BookList-component with 5 Book-components and a <Book/> component
// Now put JSX - {} in JSX means we can apply vanilla-js logic inside the curlies
// value inside must be an expression (return value), can't be a statement
{
  /* <p>{let x=6 }</p> */
}
{
  /* <p>{6+6 }</p> */
}

// So In video-17, we have our code as:
// And we comment the line/lines of code which cause error in our new code of video-17
// Hard-Coded values
// const img = "../book-images/book-1.jpg";
// const title =
//   "Hot Mess (Diary of a Wimpy Kid Book 19)" +
//   "(Diary of a Wimpy Kid, 19)" +
//   "(Volume 19)";
// const author = "by Jeff Kinney (Author)";

// parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };
// arguments
// someFunc("job", "developer");

// const BookList = () => {
//   return (
//       <section className="booklist">
//           {/* the props will only be displayed if actually, it is provided here */}
//       <Book job="developer"/>
//           <Book desc="random description" number={23} />
//           {/* so, our actual concern is with this */}
//           <Book img={img} title={title} author={author}/>
//       <Book img={img} title={title} author={author}/>
//       <Book img={img} title={title} author={author} />
//     </section>
//   );
// };

// const Book = (props) => {
//   console.log(props);        //getting [object object]
//   return (
//     <article className="book">
//       <img src={props.img} alt={title} />
//       <h2>{props.desc}</h2>
//       <h2>{props.title}</h2>
//           <h4>{props.author}</h4>
//           <p>{props.job}</p>
//           <p>{props.title}</p>
//           <p>{props.number}</p>
//       {/* {console.log(props)} */}
//     </article>
//   );
// };

// video-18
// More precise & dynamic direction - project setup

const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./book-images/book-1.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {/* the props will only be displayed if actually, it is provided here */}
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//       {/* so, our actual concern is with this */}
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   );
// };

// const Book = (props) => {
// console.log(props);
// return (
// <article className='book'>
// <img src={props.img} alt={props.title} />
// <h2>{props.title}</h2>
// <h4>{props.author} </h4>
// </article>
// );
// };

// Video-19
// Access Props in a component - Multiple Approaches
// there is no right or wrong - again preference !!!

// - introducing destructuring in Vanilla JS (to access props) 
// const Book = (props) => {
//     console.log(props);
//     const {img,title,author } = props;
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
// <h4>{author} </h4>
// </article>
// );
// };

// alternative way
// destructure inside component
// const Book = ({img,title,author }) => {
  
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
// <h4>{author} </h4>
// </article>
// );
// };

// Video-20
// Children Prop
// everything we render between component tags

function BookList() {
return (

<section className='booklist'>
<Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
        >
            {/* if we wnt to render some additional tags , we use special prop-children */}
<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
</p>
<button>click me</button>
</Book>
<Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
</section>
);
}

// destructure props as parameters, using children
// const Book = ({img,title,author,children }) => {
  
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
//         <h4>{author} </h4>
//         {children}
// </article>
// );
// };

// setting children with props inside component(destructuring)
const Book = (props) => {
    const { img, title, author, children } = props;
    console.log(props)
return (
<article className='book'>
<img src={img} alt={title} />
<h2>{title}</h2>
        <h4>{author} </h4>
        {children}
</article>
);
};



export default BookList;
