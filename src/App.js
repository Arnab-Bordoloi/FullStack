import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p> hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/Arnab-Bordoloi'>arnab</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const friends = [
    { name: 'Peter', age: 4},
    { name: 'Maya', age: 10},
  ]
  const friend2 = ['John', 'Bob']

  return (
    <div>
      <h1> Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello />
      <Hello />
      <Footer />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friend2}</p>
    </div>
  )
}

export default App;
