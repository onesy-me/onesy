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
      <path d="M200-80v-800h80v80h560l-80 200 80 200H280v320h-80Zm80-640v240-240Zm220 200q33 0 56.5-23.5T580-600q0-33-23.5-56.5T500-680q-33 0-56.5 23.5T420-600q0 33 23.5 56.5T500-520Zm-220 40h442l-48-120 48-120H280v240Z"/>
    </Icon>
  );
});

IconMaterialTour.displayName = 'OnesyIconMaterialTour';

export default IconMaterialTour;
