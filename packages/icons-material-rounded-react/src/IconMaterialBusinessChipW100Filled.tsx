import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessChipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessChipW100Filled'

      short_name='BusinessChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-326h240q14.45 0 24.22-9.77Q634-345.55 634-360v-160q0-14.45-9.78-24.22Q614.45-554 600-554h-46v-52q0-11-8.5-19.5T526-634h-92q-11 0-19.5 8.5T406-606v52h-46q-14.45 0-24.23 9.78Q326-534.45 326-520v160q0 14.45 9.77 24.23Q345.55-326 360-326Zm74-228v-52h92v52h-92ZM320-252q-95.27 0-161.64-66.31Q92-384.62 92-479.81t66.36-161.69Q224.73-708 320-708h320q95.27 0 161.64 66.31Q868-575.38 868-480.19T801.64-318.5Q735.27-252 640-252H320Z"/>
    </Icon>
  );
});

IconMaterialBusinessChipW100Filled.displayName = 'OnesyIconMaterialBusinessChipW100Filled';

export default IconMaterialBusinessChipW100Filled;
