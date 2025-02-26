import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSliding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSliding'

      short_name='DoorSliding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520q17 0 28.5 11.5T400-480q0 17-11.5 28.5T360-440Zm240 0q-17 0-28.5-11.5T560-480q0-17 11.5-28.5T600-520q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440ZM120-120v-80h40v-640h640v640h40v80H120Zm120-80h200v-560H240v560Zm280 0h200v-560H520v560Zm-40-320Z"/>
    </Icon>
  );
});

IconMaterialDoorSliding.displayName = 'OnesyIconMaterialDoorSliding';

export default IconMaterialDoorSliding;
