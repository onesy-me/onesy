import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatListBulletedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulletedW100'

      short_name='FormatListBulleted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-226v-28h396v28H392Zm0-240v-28h396v28H392Zm0-240v-28h396v28H392ZM217-195q-18.56 0-31.78-13.22Q172-221.44 172-240q0-18.56 13.22-31.78Q198.44-285 217-285q18.56 0 31.78 13.22Q262-258.56 262-240q0 18.56-13.22 31.78Q235.56-195 217-195Zm0-240q-18.56 0-31.78-13.22Q172-461.44 172-480q0-18.56 13.22-31.78Q198.44-525 217-525q18.56 0 31.78 13.22Q262-498.56 262-480q0 18.56-13.22 31.78Q235.56-435 217-435Zm0-240q-18.56 0-31.78-13.22Q172-701.44 172-720q0-18.56 13.22-31.78Q198.44-765 217-765q18.56 0 31.78 13.22Q262-738.56 262-720q0 18.56-13.22 31.78Q235.56-675 217-675Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulletedW100.displayName = 'OnesyIconMaterialFormatListBulletedW100';

export default IconMaterialFormatListBulletedW100;
