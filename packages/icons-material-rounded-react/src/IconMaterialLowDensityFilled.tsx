import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLowDensityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowDensityFilled'

      short_name='LowDensity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-600q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640q0 17-11.5 28.5T480-600ZM320-440q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm160 0q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440ZM160-760q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800q0 17-11.5 28.5T160-760Zm160 0q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm40 480q-33 0-56.5-23.5T120-200v-280q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480v280h560v-560H480q-17 0-28.5-11.5T440-800q0-17 11.5-28.5T480-840h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialLowDensityFilled.displayName = 'OnesyIconMaterialLowDensityFilled';

export default IconMaterialLowDensityFilled;
