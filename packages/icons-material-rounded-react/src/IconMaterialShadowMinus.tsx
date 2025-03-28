import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShadowMinus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowMinus'

      short_name='ShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h80v-80q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240h-80v80q0 33-23.5 56.5T640-80H160Zm160-240h480v-480H320v480Zm120-200q-17 0-28.5-11.5T400-560q0-17 11.5-28.5T440-600h240q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520H440Z"/>
    </Icon>
  );
});

IconMaterialShadowMinus.displayName = 'OnesyIconMaterialShadowMinus';

export default IconMaterialShadowMinus;
