import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLuggageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageFilled'

      short_name='Luggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120h-80v-600h160v-160h240v160h160v600h-80q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120Zm80-120h80v-360h-80v360Zm160 0h80v-360h-80v360Zm-80-480h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialLuggageFilled.displayName = 'OnesyIconMaterialLuggageFilled';

export default IconMaterialLuggageFilled;
