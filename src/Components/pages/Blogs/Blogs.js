import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className='container  border-4 border-accent mt-8 bg-dark max-w-screen-2xl mx-auto rounded-2xl px-12'>
        <div className='text-center text-white  my-3 py-3 '>
              <h2 className='text-green-400 text-2xl font-semibold'>what are the difference between SQL and NoSQL?</h2>
              <p className=''>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
          </div>
          <div className='text-center text-white   my-3 py-3 '>
              <h2 className='text-warning text-2xl font-semibold'>What is JWT, and how does it work?</h2>
              <p className=''>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
          </div>
          <div className='text-center text-white  my-3 py-3 '>
              <h2 className='text-info text-2xl font-semibold'>What is the difference between javascript and NodeJS?</h2>
              <p className=''>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
          </div>
          <div className='text-center text-white   my-3 py-3 '>
              <h2 className='text-indigo-500 text-2xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h2>
              <p className=''> Node.js uses a single-thread and an event loop to process requests only processing one at a time (which is non-blocking). </p>
          </div>
      </div>
    );
};

export default Blogs;