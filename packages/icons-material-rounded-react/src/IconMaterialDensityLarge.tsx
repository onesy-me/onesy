import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDensityLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityLarge'

      short_name='DensityLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm0-640q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Z"/>
    </Icon>
  );
});

IconMaterialDensityLarge.displayName = 'OnesyIconMaterialDensityLarge';

export default IconMaterialDensityLarge;
