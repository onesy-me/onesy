import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWineBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBar'

      short_name='WineBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-164q-86-14-143-80t-57-156v-200q0-17 11.5-28.5T280-840h400q17 0 28.5 11.5T720-800v200q0 90-57 156t-143 80v164h80q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h80Zm40-240q56 0 98-34t56-86H326q14 52 56 86t98 34ZM320-640h320v-120H320v120Zm160 200Z"/>
    </Icon>
  );
});

IconMaterialWineBar.displayName = 'OnesyIconMaterialWineBar';

export default IconMaterialWineBar;
