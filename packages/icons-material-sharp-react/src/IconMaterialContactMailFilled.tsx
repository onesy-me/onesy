import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactMailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailFilled'

      short_name='ContactMail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-520h280v-200H560v200Zm140-50-100-70v-40l100 70 100-70v40l-100 70ZM0-120v-720h960v720H0Zm360-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM84-200h552q-42-75-116-117.5T360-360q-86 0-160 42.5T84-200Z"/>
    </Icon>
  );
});

IconMaterialContactMailFilled.displayName = 'OnesyIconMaterialContactMailFilled';

export default IconMaterialContactMailFilled;
