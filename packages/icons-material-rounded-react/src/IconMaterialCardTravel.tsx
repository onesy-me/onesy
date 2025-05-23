import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardTravel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravel'

      short_name='CardTravel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v80h640v-80H160Zm120-440v-80q0-33 23.5-56.5T360-880h240q33 0 56.5 23.5T680-800v80h120q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h120ZM160-400h640v-240H680v40q0 17-11.5 28.5T640-560q-17 0-28.5-11.5T600-600v-40H360v40q0 17-11.5 28.5T320-560q-17 0-28.5-11.5T280-600v-40H160v240Zm200-320h240v-80H360v80ZM160-200v-440 80-80 80-80 440Z"/>
    </Icon>
  );
});

IconMaterialCardTravel.displayName = 'OnesyIconMaterialCardTravel';

export default IconMaterialCardTravel;
