import React, { useEffect } from 'react';

function Easter() {
  useEffect(() => {
    const makeKeySequenceListener = (keySequence, callback) => {
      let index = 0;
      return (e) => {
        if (e.key === keySequence[index]) {
          if (index === keySequence.length - 1) {
            callback();
          }
          index = (index + 1) % keySequence.length;
        } else {
          index = 0;
        }
      };
    };

    const listener = makeKeySequenceListener('1337', () => alert('HEJ HOPP!'));
    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('keyup', listener);
    };
  }, []);
}

export default Easter;
