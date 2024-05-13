import React from 'react';

export const MyError: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <h1>OOps!</h1>
      <h2>Error 404</h2>
      <h3>Page is not definded !</h3>
      <p>I'm sorry, maybe you try again ?</p>
      <button>Back ^</button>
    </div>
  );
});
