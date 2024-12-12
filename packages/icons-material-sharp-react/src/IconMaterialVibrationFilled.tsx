import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVibrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationFilled'

      short_name='Vibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-360v-240h80v240H0Zm120 80v-400h80v400h-80Zm760-80v-240h80v240h-80Zm-120 80v-400h80v400h-80ZM240-120v-720h480v720H240Z"/>
    </Icon>
  );
});

IconMaterialVibrationFilled.displayName = 'OnesyIconMaterialVibrationFilled';

export default IconMaterialVibrationFilled;
