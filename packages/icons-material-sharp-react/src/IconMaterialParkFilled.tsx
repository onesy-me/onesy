import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialParkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkFilled'

      short_name='Park'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M558-80H402v-160H120l160-240h-80l280-400 280 400h-80l160 240H558v160Z"/>
    </Icon>
  );
});

IconMaterialParkFilled.displayName = 'OnesyIconMaterialParkFilled';

export default IconMaterialParkFilled;
