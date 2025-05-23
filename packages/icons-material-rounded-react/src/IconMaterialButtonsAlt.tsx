import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialButtonsAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ButtonsAlt'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm130-130v60q0 13 8.5 21.5T320-360q13 0 21.5-8.5T350-390v-60h60q13 0 21.5-8.5T440-480q0-13-8.5-21.5T410-510h-60v-60q0-13-8.5-21.5T320-600q-13 0-21.5 8.5T290-570v60h-60q-13 0-21.5 8.5T200-480q0 13 8.5 21.5T230-450h60ZM160-320v-320 320Z"/>
    </Icon>
  );
});

IconMaterialButtonsAlt.displayName = 'OnesyIconMaterialButtonsAlt';

export default IconMaterialButtonsAlt;
