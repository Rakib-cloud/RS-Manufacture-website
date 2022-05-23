import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-amber-800 font-bold'>Welcome to my blogs </h1>
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-200 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
            <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How will you improve the performance of a React Application?</Accordion.Header>
          <Accordion.Body>
          When this is appropriate, keep component state local.
To prevent unnecessary re-renders, memorise React components.
React code splitting using dynamic import ()

In React, windowing or list virtualization is used.

Images are loaded slowly in React.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What are the different ways to manage a state in a React application?</Accordion.Header>
          <Accordion.Body>
          React employs an observable object as the state, which tracks changes to the state and assists the component in responding appropriately. If we alter the state of any component, such as the following, the webpage will not re-render because React State will not be able to detect the changes. In your React projects, there are four different forms of state to consider:
Local government.
The global situation.
The current condition of the server.
The current status of the URL.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>How does prototypical inheritance work?</Accordion.Header>
          <Accordion.Body>
          Prototype-based programming is an object-oriented programming paradigm in which behaviour reuse (also known as inheritance) is performed through the reuse of existing prototype objects. Prototypal, prototype-oriented, classless, or instance-based programming are all terms that describe this programming approach.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>What is a unit test? Why should write unit tests?</Accordion.Header>
          <Accordion.Body>
          Unit testing allows the programmer to rewrite code later and ensure that the module continues to function properly (i.e. Regression testing). The practice is to create test cases for all functions and methods so that any changes that cause a problem can be swiftly identified and corrected.
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="4">
          <Accordion.Header>Why you do not set the state directly in React?</Accordion.Header>
          <Accordion.Body>
          React will then investigate the virtual DOM; it also has a copy of the preceding virtual DOM, and that is why we shouldn't edit the state directly. This allows us to have two separate object references in memory: the old virtual DOM and the new virtual DOM.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
    );
};

export default Blogs;