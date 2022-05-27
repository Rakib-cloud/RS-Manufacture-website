import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <div>
        <h4 class="red">How will you improve the performance of a React Application?</h4>
        <p >When this is appropriate, keep component state local.
          To prevent unnecessary re-renders, memorise React components.
          React code splitting using dynamic import ()

          In React, windowing or list virtualization is used.

          Images are loaded slowly in React.
        </p>
      </div>

      <div class="mt-6 ">
        <h4 class="red">What are the different ways to manage a state in a React application?</h4>
        <p>React employs an observable object as the state, which tracks changes to the state and assists the component in responding appropriately. If we alter the state of any component, such as the following, the webpage will not re-render because React State will not be able to detect the changes. In your React projects, there are four different forms of state to consider:
          Local government.
          The global situation.
          The current condition of the server.
          The current status of the URL.

        </p>
      </div>

      <div class="mt-6 ">
        <h4 class="red">How does prototypical inheritance work?</h4>
        <p>Prototype-based programming is an object-oriented programming paradigm in which behaviour reuse (also known as inheritance) is performed through the reuse of existing prototype objects. Prototypal, prototype-oriented, classless, or instance-based programming are all terms that describe this programming approach.

        </p>
      </div>

      <div class="mt-6 ">
        <h4 class="red">What is a unit test? Why should write unit tests?</h4>
        <p>Unit testing allows the programmer to rewrite code later and ensure that the module continues to function properly (i.e. Regression testing). The practice is to create test cases for all functions and methods so that any changes that cause a problem can be swiftly identified and corrected.

        </p>
      </div>
      <div class="mt-6 ">
        <h4 class="red">Why you do not set the state directly in React?</h4>
        <p>React will then investigate the virtual DOM; it also has a copy of the preceding virtual DOM, and that is why we shouldn't edit the state directly. This allows us to have two separate object references in memory: the old virtual DOM and the new virtual DOM.

        </p>
      </div>

    

    </div>

  );
};

export default Blogs;