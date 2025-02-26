import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepOutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOutFilled'

      short_name='StepOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-40-647-76 75q-11 11-27.5 11.5T308-652q-11-11-11-28t11-28l144-144q12-12 28-12t28 12l144 144q12 12 11.5 28T651-652q-12 11-28 11.5T595-652l-75-75v287q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440v-287Z"/>
    </Icon>
  );
});

IconMaterialStepOutFilled.displayName = 'OnesyIconMaterialStepOutFilled';

export default IconMaterialStepOutFilled;
