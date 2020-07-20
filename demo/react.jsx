import React from 'react';

const Character = ({ name }) => {
  const [kills, setKills] = React.useState(0);

  return (
    <div>
      <h1>
        {name} has killed {kills} other characters
      </h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Character name="Walter White" />
    </div>
  );
};

export default App;
