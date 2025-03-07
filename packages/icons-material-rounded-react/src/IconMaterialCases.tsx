import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCases = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cases'

      short_name='Cases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-33 0-56.5-23.5T40-160v-400q0-17 11.5-28.5T80-600q17 0 28.5 11.5T120-560v400h640q17 0 28.5 11.5T800-120q0 17-11.5 28.5T760-80H120Zm160-160q-33 0-56.5-23.5T200-320v-400q0-17 11.5-28.5T240-760h160v-80q0-33 23.5-56.5T480-920h160q33 0 56.5 23.5T720-840v80h160q17 0 28.5 11.5T920-720v400q0 33-23.5 56.5T840-240H280Zm0-80h560v-360H280v360Zm200-440h160v-80H480v80ZM280-320v-360 360Z"/>
    </Icon>
  );
});

IconMaterialCases.displayName = 'OnesyIconMaterialCases';

export default IconMaterialCases;
