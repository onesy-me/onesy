import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsFilled'

      short_name='Earbuds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120q-83 0-141.5-58.5T120-320v-392q0-54 33-91t87-37h120v240H200v280q0 50 35 85t85 35q50 0 85-35t35-85v-320q0-83 58.5-141.5T640-840q83 0 141.5 58.5T840-640v400q0 51-38.5 85.5T712-120H600v-240h160v-280q0-50-35-85t-85-35q-50 0-85 35t-35 85v320q0 83-58.5 141.5T320-120Z"/>
    </Icon>
  );
});

IconMaterialEarbudsFilled.displayName = 'OnesyIconMaterialEarbudsFilled';

export default IconMaterialEarbudsFilled;
