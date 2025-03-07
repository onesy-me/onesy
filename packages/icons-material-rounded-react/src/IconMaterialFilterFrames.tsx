import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterFrames = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFrames'

      short_name='FilterFrames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-560q0-33 23.5-56.5T160-800h160l132-132q12-12 28-12t28 12l132 132h160q33 0 56.5 23.5T880-720v560q0 33-23.5 56.5T800-80H160Zm0-80h640v-560H160v560Zm80-120v-320q0-17 11.5-28.5T280-640h400q17 0 28.5 11.5T720-600v320q0 17-11.5 28.5T680-240H280q-17 0-28.5-11.5T240-280Zm80-40h320v-240H320v240Zm160-120Z"/>
    </Icon>
  );
});

IconMaterialFilterFrames.displayName = 'OnesyIconMaterialFilterFrames';

export default IconMaterialFilterFrames;
