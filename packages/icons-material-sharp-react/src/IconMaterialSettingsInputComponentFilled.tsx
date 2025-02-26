import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputComponentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentFilled'

      short_name='SettingsInputComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40v-166l-80-80v-114h240v114l-80 80v166h-80Zm320 0v-166l-80-80v-114h240v114l-80 80v166h-80Zm320 0v-166l-80-80v-114h240v114l-80 80v166h-80ZM40-480v-240h80v-200h80v200h80v240H40Zm320 0v-240h80v-200h80v200h80v240H360Zm320 0v-240h80v-200h80v200h80v240H680Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentFilled.displayName = 'OnesyIconMaterialSettingsInputComponentFilled';

export default IconMaterialSettingsInputComponentFilled;
