import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlidersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlidersW100'

      short_name='Sliders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-412q-29 0-48.5-19.5T132-480q0-29 19.5-48.5T200-548h560q29 0 48.5 19.5T828-480q0 29-19.5 48.5T760-412H200Zm360-28h200q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H560v80Z"/>
    </Icon>
  );
});

IconMaterialSlidersW100.displayName = 'OnesyIconMaterialSlidersW100';

export default IconMaterialSlidersW100;
