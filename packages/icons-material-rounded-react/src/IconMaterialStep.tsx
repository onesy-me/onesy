import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Step'

      short_name='Step'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-360q-51 0-85.5-34.5T640-480q0-51 34.5-85.5T760-600q51 0 85.5 34.5T880-480q0 51-34.5 85.5T760-360Zm-353-80H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h287l-75-76q-11-11-11.5-27.5T332-652q11-11 28-11t28 11l144 144q12 12 12 28t-12 28L388-308q-12 12-28 11.5T332-309q-11-12-11.5-28t11.5-28l75-75Z"/>
    </Icon>
  );
});

IconMaterialStep.displayName = 'OnesyIconMaterialStep';

export default IconMaterialStep;
