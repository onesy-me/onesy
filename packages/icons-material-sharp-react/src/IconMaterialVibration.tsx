import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVibration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vibration'

      short_name='Vibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-360v-240h80v240H0Zm120 80v-400h80v400h-80Zm760-80v-240h80v240h-80Zm-120 80v-400h80v400h-80ZM240-120v-720h480v720H240Zm80-80h320v-560H320v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialVibration.displayName = 'OnesyIconMaterialVibration';

export default IconMaterialVibration;
