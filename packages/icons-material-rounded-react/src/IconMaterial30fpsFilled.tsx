import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial30fpsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsFilled'

      short_name='30fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200H140q-25 0-42.5-17.5T80-260q0-25 17.5-42.5T140-320h180v-100H140q-25 0-42.5-17.5T80-480q0-25 17.5-42.5T140-540h180v-100H140q-25 0-42.5-17.5T80-700q0-25 17.5-42.5T140-760h180q50 0 85 35t35 85v76q0 35-24.5 59.5T356-480q35 0 59.5 24.5T440-396v76q0 50-35 85t-85 35Zm280-120h160v-320H600v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h160q50 0 85 35t35 85v320q0 50-35 85t-85 35H600Z"/>
    </Icon>
  );
});

IconMaterial30fpsFilled.displayName = 'OnesyIconMaterial30fpsFilled';

export default IconMaterial30fpsFilled;
