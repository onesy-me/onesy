import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookFilled'

      short_name='Book'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm200-720v245q0 12 9.5 17.5t20.5-.5l49-29q10-6 20.5-6t20.5 6l49 29q11 6 21 .5t10-17.5v-245H440Z"/>
    </Icon>
  );
});

IconMaterialBookFilled.displayName = 'OnesyIconMaterialBookFilled';

export default IconMaterialBookFilled;
