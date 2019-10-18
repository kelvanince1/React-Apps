/** @jsx TinyReact.createElement */

/*** Step 1,2,3,4 - createElement */

const root = document.getElementById('root');

const Step1 = (
    <div>
      <h1 className="header">Hello Tiny React!</h1>
      <h2>(coding nirvana)</h2>
      <div>nested 1<div>nested 1.1</div></div>
      <h3>(OBSERVE: This will change)</h3>
      {2 == 1 && <div>Render this if 2==1</div>}
      {2 == 2 && <div>{2}</div>}
      <span>This is a text</span>
      <button onClick={() => alert("Hi!")}>Click me!</button>
      <h3>This will be deleted</h3>
      2,3
    </div>
  );
  
console.log(Step1);

// TinyReact.render(Step1, root);


  const Step2 = (
    <div>
      <h1 className="header">Hello Tiny React!</h1>
      <h2>(coding nirvana)</h2>
      <div>nested 1<div>nested 1.1</div></div>
      <h3>(OBSERVE: I said it)</h3>
      {2 == 1 && <div>Render this if 2==1</div>}
      {2 == 2 && <div>{2}</div>}
      <span>Something else</span>
      <button onClick={() => alert("Hi!")}>Click me!</button>
      2,3
    </div>
  );
  
// setTimeout(() => {
//   alert('Re-rendering...');
//   TinyReact.render(Step2, root);
// }, 4000);

const Test = (props) => <span style={props.style}>&hearts;</span>;

// console.log(Test);
// TinyReact.render(<Test style="color:red" />, root);

const Button = (props) => <button onClick={props.onClick}>{props.children}</button>;

const Greeting = function(props) {
  return (
    <div className="greeting">
      <h2>Welcome {props.greeting}</h2>

      <Button onClick={() => alert('I love React')}>I <Test /> React</Button>
    </div>
  );
}

TinyReact.render(<Greeting meeting="Good Day" />, root);