import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTour = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tour'

      short_name='Tour'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400v280q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-720q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v40h501q21 0 33 17.5t4 37.5l-58 145 58 145q8 20-4 37.5T781-400H280Zm0-320v240-240Zm220 200q33 0 56.5-23.5T580-600q0-33-23.5-56.5T500-680q-33 0-56.5 23.5T420-600q0 33 23.5 56.5T500-520Zm-220 40h442l-48-120 48-120H280v240Z"/>
    </Icon>
  );
});

IconMaterialTour.displayName = 'OnesyIconMaterialTour';

export default IconMaterialTour;
