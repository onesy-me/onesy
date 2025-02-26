import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToggleOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOffFilled'

      short_name='ToggleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-120q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialToggleOffFilled.displayName = 'OnesyIconMaterialToggleOffFilled';

export default IconMaterialToggleOffFilled;
