import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowSensor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensor'

      short_name='WindowSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-600q-17 0-28.5-11.5T840-640v-160q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v160q0 17-11.5 28.5T880-600ZM120-120v-720h640v720H120Zm80-400h200v-40h80v40h200v-240H200v240Zm0 320h480v-240H200v240Zm0 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialWindowSensor.displayName = 'OnesyIconMaterialWindowSensor';

export default IconMaterialWindowSensor;
