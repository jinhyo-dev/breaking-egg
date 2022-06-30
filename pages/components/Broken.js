import React from 'react';

const Broken = () => {
  return (
    <div className={'chickContainer'}>
      <img src={'https://cdn.discordapp.com/attachments/935776183688245341/992164762211332296/unknown.png'} className={'chick'}/> <br/>
      <button onClick={() => location.reload()} className={'btn'}>Replay?</button>
    </div>
  );
}

export default Broken;