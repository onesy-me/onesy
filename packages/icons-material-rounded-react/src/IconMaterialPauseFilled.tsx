import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseFilled'

      short_name='Pause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200q-33 0-56.5-23.5T560-280v-400q0-33 23.5-56.5T640-760q33 0 56.5 23.5T720-680v400q0 33-23.5 56.5T640-200Zm-320 0q-33 0-56.5-23.5T240-280v-400q0-33 23.5-56.5T320-760q33 0 56.5 23.5T400-680v400q0 33-23.5 56.5T320-200Z"/>
    </Icon>
  );
});

IconMaterialPauseFilled.displayName = 'OnesyIconMaterialPauseFilled';

export default IconMaterialPauseFilled;
