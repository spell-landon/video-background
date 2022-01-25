import React from 'react';
import styles from './MoreInfo.module.css';

function MoreInfo(props) {
  return (
    <div className={styles.moreInfoContainer}>
      <div className={styles.textContainer}>
        <h4>So this is the More Info Section, huh?</h4>
        <p>
          Alright, okay Jennifer. What if I send in the tape and they don't like
          it. I mean, what if they say I'm no good. What if they say, 'Get out
          of here, kid, you got no future.' I mean, I just don't think I can
          take that kind of rejection. Jesus, I'm beginning to sound like my old
          man. Say, why do you let those boys push you around like that? No, no,
          George, look, it's just an act, right? Okay, so 9:00 you're strolling
          through the parking lot, you see us struggling in the car, you walk
          up, you open the door and you say, your line, George. Oh Mom, there's
          nothing wrong with calling a boy.
        </p>
      </div>
    </div>
  );
}

export default MoreInfo;
