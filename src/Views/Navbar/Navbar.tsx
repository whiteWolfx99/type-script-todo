import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <h1>Todo with type script</h1>
      </div>
      <div className='navbar-container-links'>
        <ul className='navbar-links'>
          <li>
            <Link to='./'>Home</Link>
          </li>
          <li>
            <Link to='./Todos'>Todos</Link>
          </li>
         </ul>
      </div>

    </div>
  )
}

export default Navbar