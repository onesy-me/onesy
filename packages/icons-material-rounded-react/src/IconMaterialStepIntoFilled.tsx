import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepIntoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepIntoFilled'

      short_name='StepInto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-40-473v-287q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v287l75-75q11-11 27.5-11t28.5 11q12 12 12 28.5T651-571L508-428q-12 12-28 12t-28-12L308-572q-11-11-11.5-27.5T308-628q11-11 28-11t28 11l76 75Z"/>
    </Icon>
  );
});

IconMaterialStepIntoFilled.displayName = 'OnesyIconMaterialStepIntoFilled';

export default IconMaterialStepIntoFilled;
