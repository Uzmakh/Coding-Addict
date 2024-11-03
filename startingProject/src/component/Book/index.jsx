/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


// Video-21
const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./book-images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
// Previously , we were rendering Book-components in this way
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

// Now, we have this simple line of code, when we removed the rendered components.
// function BookList() {
// return <section className='booklist'></section>;
// }

// we can't render Books array or objects directly by pasing books in curly braces in JSX, look at the error, we are facing in console....whenever we work with some data, we can face this error
// function BookList() {
//   return <section className='booklist'>{books}</section>;
// }

// for instance,
// const names = ['susan', 'peter', 'john'];
// function BookList() {
//   return <section className='booklist'>{names}</section>;
// }
// We are able here to render the names (they are in strings-form ), but they should be wrapped in some html elements, for this we have to use .map() method of arrays. This method will create a new array from calling a function for every array element.
// Instead of displaying strings, essentially we display elements;This is map method that comes here to play.
// demonstration
// const names = ['john', 'peter', 'susan'];
// const newNames = names.map((name) => {
// console.log(name);
// return <h1 style={{color:'red'}}>{name}</h1>;
// });
// console.log(newNames);
// Alternatively, if we don't want to have a new array ,created by map method, we can use this code,
// const BookList = () => {
//   return (
//     <section className='booklist'>
//     {names.map((name) => {
//       return (
//         <div><h2>{ name}</h2></div>
//       )

//     })}
//     </section>
//   );
// }

//? Video-22

// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//          const { img, title, author,id } = book;
//         console.log(book);
//         // eslint-disable-next-line react/jsx-key
//         return <Book img={img} title={title} author={author} key={id} />

//     })}
//     </section>
//   );
// }

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

// Video-23
// solving key-prop error with the unique id
// Everytime a list is renderd in React,React keeps track of those items, so we need to provide unique value and set it equal to key-prop and typically it is some id, so we add an id in the objects, unique for each item
// Its a confusion where we should set the key, so always set it where data is iterating and the item is returning

//! Use of Index instead of id
//! some developers also use index,
//! you will see index,but it's not advised if the list is going to be changed; the code may be as,
// function BookList() {
// return (
// <section className='booklist'>
// {books.map((book, index) => {
// console.log(book);
// const { img, title, author, id } = book;
// return <Book book={book} key={index} />;
// })}
// </section>
// );
// }

//? Video-24
// ! Before we go to advanced React , we see there are two options of passing the Entire Object as props;
//? We look for the way we can simplify the code when iterating the items,
//? -> We can pass entire object as a prop
// ? -> Or use of spread operators

// ! First Method - Passing the Entire Object
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
// this line of code can then be removed, as we are passing book as an entire object
//  const { img, title, author,id } = book;

//         return <Book book={book} key={book.id} />

//     })}
//     </section>
//   );
// }

// const Book = (props) => {
//     console.log(props);       //as we are passing book as an object
//     const {img,title,author } = props.book;
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
// <h4>{author} </h4>
// </article>
// );
// };
// ? alternative
// const Book = ({ book: { img, title, author,id } }) => {
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
//     <h4>{author} </h4>
//     <p>{id }</p>
// </article>
// );
// };

// ! Second Method - concept of spread operators
// ! Here we are copying the rest of the object and adding a new item to it
// const friends = ['john', 'peter', 'anna'];
// const newFriends = [...friends, 'susan'];
// console.log(friends);
// console.log(newFriends);
// const someObject = {
// name: 'john',
// job: 'developer',
// };
// // COPY NOT A REFERENCE !!!!
// const newObject = { ...someObject, location: 'florida' };
// console.log(someObject);
// console.log(newObject);

// our project case
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
// this line of code can then be removed, as we are passing book as an entire object
//  const { img, title, author,id } = book;
//  return <Book book={book} key={book.id} />
//         return <Book {...book} key={book.id} />

//     })}
//     </section>
//   );
// }

// const Book = (props) => {
//     console.log(props);       //as we are passing book as an object
//     const {img,title,author } = props;
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
// <h4>{author} </h4>
// </article>
// );
// };

// Video-25

// Events - Fundamentals
// Vanilla JS
// const btn = document.getElementById('btn');

// when we pass the call-back function, we have an access to event-object
// btn.addEventListener('click', function (e) {
// access event object
// do something when event fires
// });
// similar approach
// element, event, function
// again camelCase

// We are taking this as example
// our project case

//  const BookList = () => {
//   return (
//     <section className='booklist'>
//       <EventExamples/>
//       {books.map((book) => {
//       return <Book {...book} key={book.id} />

//     })}
//     </section>
//   );
// }
// const EventExamples = () => {
//   const handleFormInput = () => {
//     console.log("handle form input");
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input type="text" name="example" onChange={handleFormInput} style={{margin: '1rem 0'}} />
//       </form>
//       <button onClick={handleButtonClick}>Click Me</button>
//       {/* pass the reference of the function */}
//     </section>
//   )
// };

// const Book = (props) => {
//     console.log(props);       //as we are passing book as an object
//     const {img,title,author } = props;
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
// <h4>{author} </h4>
// </article>
// );
// };

// Video-26
//? Event Object and Form Submission
// ! In the last video, we stated that when we pass the call-back function, we have an access to event-object, now we will see how exactly it works! In this event-object, we get a bunch of useful info.

// const BookList = () => {
//   return (
//     <section className='booklist'>
//       <EventExamples/>
//       {books.map((book) => {
//       return <Book {...book} key={book.id} />

//     })}
//     </section>
//   );
// }
// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.type);
//     console.log(e.target.name);
//     console.log(e.target.value);
//     console.log("handle form input");
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//   };
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input type="text" name="example" onChange={handleFormInput} style={{ margin: '1rem 0' }} />

{
  /* Video-27 */
}
//         <button type="submit" onClick={handleFormSubmission}>Submit</button>
//          <div>
//       <button onClick={handleButtonClick}>Click Me</button>
//         {/* pass the reference of the function */}
//         </div>
//       </form>

//     </section>
//   )
// }

// const Book = (props) => {
//     console.log(props);       //as we are passing book as an object
//     const {img,title,author } = props;
// return (
// <article className='book'>
// <img src={img} alt={title} />
// <h2>{title}</h2>
// <h4>{author} </h4>
// </article>
// );
// };

//? Video-28
//! Use of arrow functions
// const EventExamples = () => {
// return (

// <section>
// <button onClick={() => console.log('hello there')}>click me</button>
// </section>
// );
// };
// OR with more extensively ,
// const EventExamples = () => {
// return (
// <section>
// <form>
// <h2>Typical Form</h2>
// <input
// type='text'
// name='example'
// onChange={(e) => console.log(e.target.value)}
// style={{ margin: '1rem 0' }}
// />
// </form>
// <button onClick={() => console.log('you clicked me')}>click me</button>
// </section>
// );
// };

//? Video-29

// const BookList = () => {
//   return (
//     <section className='booklist'>

//       {books.map((book) => {
//       return <Book {...book} key={book.id} />

//     })}
//     </section>
//   );
// }

// const Book = (props) => {
//     console.log(props);       //as we are passing book as an object
//   const { img, title, author } = props;
//   const displayTitle = () => {
//     console.log(title);
//   }
//   // Whatever functionality we use inside a component, it narrows down that component to less and less code,
//   // we have an access of title through this function
//   // In Js we have to do this by tactics , but in React, it comes by default
// return (
// <article className='book'>
// <img src={img} alt={title} />
//     <h2>{title}</h2>
//     <button onClick={displayTitle}>Display Title</button>
// <h4>{author} </h4>
// </article>
// );
// };

//? Video-30
//! Prop Drilling (general Info)
//! react data flow - can only pass props down
//! alternatives Context API, redux, other state libraries
// const BookList = () => {
  // ! passing variable as prop
//   const someValue = "shakeAndBake";
  // !how do we pass a function to child component
//   const displayValue = () => {
//     console.log(someValue);
//   };
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} displayValue={displayValue} />;
//       })}
//     </section>
//   );
// };

// const Book = (props) => {
//   console.log(props); //as we are passing book as an object
//   const { img, title, author, displayValue } = props;

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={displayValue}>Click me</button>
//       <h4>{author} </h4>
//     </article>
//   );
// };


//? video-31 + 32 + 33
// ### More Complex Example ###//
// ! When we have function in a component and we need to invoke it in a child
const BookList = () => {

  // !how do we pass a function to child component
  const getBook = (id) => {
    const book = books.find((book) =>  book.id === id );
    console.log(book);
  };
  // We cannot invoke the function here, rther we pass the reference in Book-component
  // getBook(2);
  return (
    <section className="booklist">
      {books.map((book) => {
        // return <Book {...book} key={book.id} getBook={getBook} />;
         {/* still another approach-3 */}
        return <Book {...book} key={book.id} getBook={()=>getBook(book.id)} />;
      })}
    </section>
  );
};


const Book = (props) => {
  // console.log(props); //as we are passing book as an object
  const { img, title, author, getBook, id } = props;
   // We cannot invoke the function,rather we need to pass the reference in Book-component (first-approach)
  const getSingleBook = () => {
    getBook(id);
}
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* <button onClick={getSingleBook}>Click me</button> */}
      {/* I can pass the ananymous function as a second approach */}
      {/* <button onClick={()=>{getBook(id)}}>Click me</button> */}
      {/* still another approach-3 */}
      <button onClick={getBook}>Click me</button>
      <h4>{author} </h4>
    </article>
  );
};
// Why we haven't passed "id" in parameters of getSingleBook??
// ChatGPT: In this code snippet, the getSingleBook function is defined within the Book component, and it uses the id value from the props that were passed to the component.

// When the getSingleBook function is called (when the button is clicked), it will have access to the id value from the closure that was created when the function was defined, even though the id value is not explicitly passed as a parameter to the function.

// This is possible because JavaScript has a feature called closures, which allow inner functions to access variables from the outer function, even after the outer function has returned. In this case, getSingleBook is defined within the scope of the Book component, and it has access to the id value from the component's props.

// So when the button is clicked, the getSingleBook function will call the getBook function with the id value from the props, which was captured in the closure.


export default BookList;
