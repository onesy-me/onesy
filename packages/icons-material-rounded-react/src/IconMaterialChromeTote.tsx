import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeTote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeTote'

      short_name='ChromeTote'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m541 482-36-35q-12-11-28-11t-28 12q-11 12-11.5 28t11.5 28l104 104q12 12 28 12t28-12l104-104q11-11 11.5-27.5T713 448q-11-12-28-12t-29 11l-35 35V356q0-17-11.5-28.5T581 316q-17 0-28.5 11.5T541 356v126Zm-28 374h226q0 26-21.5 41T669 916l-440 55q-33 5-59-16t-30-54L86 464q-4-33 16.5-59t53.5-30l45-5v80l-36 4 54 438 294-36Zm-152-80q-33 0-56.5-23.5T281 696V256q0-33 23.5-56.5T361 176h440q33 0 56.5 23.5T881 256v440q0 33-23.5 56.5T801 776H361Zm0-80h440V256H361v440ZM219 892Zm142-196V256v440Z"/>
    </Icon>
  );
});

IconMaterialChromeTote.displayName = 'OnesyIconMaterialChromeTote';

export default IconMaterialChromeTote;
