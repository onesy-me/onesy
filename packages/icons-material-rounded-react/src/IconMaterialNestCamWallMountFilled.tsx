import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamWallMountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWallMountFilled'

      short_name='NestCamWallMount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-262q-33 0-56.5-23.5T80-342v-320q0-33 23.5-56.5T160-742q33 0 56.5 24t23.5 57q35-55 92.5-88T460-782q52 0 99.5 19.5T644-706l172 172q12 12 18 26.5t6 30.5q0 16-6 30.5T816-420L562-166q-11 11-25.5 17t-30.5 6q-16 0-31-6t-26-17L276-338q-11-11-19.5-22T240-383v41q0 33-23.5 56.5T160-262Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMountFilled.displayName = 'OnesyIconMaterialNestCamWallMountFilled';

export default IconMaterialNestCamWallMountFilled;
