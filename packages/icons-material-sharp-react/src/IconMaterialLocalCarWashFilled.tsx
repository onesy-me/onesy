import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalCarWashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCarWashFilled'

      short_name='LocalCarWash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-760q-25 0-42.5-17.5T420-820q0-21 14.5-45t45.5-55q31 31 45.5 55t14.5 45q0 25-17.5 42.5T480-760Zm-200 0q-25 0-42.5-17.5T220-820q0-21 14.5-45t45.5-55q31 31 45.5 55t14.5 45q0 25-17.5 42.5T280-760Zm400 0q-25 0-42.5-17.5T620-820q0-21 14.5-45t45.5-55q31 31 45.5 55t14.5 45q0 25-17.5 42.5T680-760ZM240-120v80H120v-360l98-280h524l98 280v360H720v-80H240Zm-8-360h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm360 0q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Z"/>
    </Icon>
  );
});

IconMaterialLocalCarWashFilled.displayName = 'OnesyIconMaterialLocalCarWashFilled';

export default IconMaterialLocalCarWashFilled;
