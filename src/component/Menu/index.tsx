import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Tasks</Link>
          </li>
          <li>
            <Link to={'addTasks'}>Add Tasks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
});
   