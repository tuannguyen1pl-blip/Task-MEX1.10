import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to='/'>Dashboard</Link>
            {' | '}
            <Link to='/dashboard/course'>Course</Link>
            {' | '}
            <Link to='/dashboard/assigments'>Assignments</Link>
            {' | '}
            <Link to='/dashboard/profile'>Profile</Link>
            {' | '}

        </nav>

    )
}

export default Navigation;