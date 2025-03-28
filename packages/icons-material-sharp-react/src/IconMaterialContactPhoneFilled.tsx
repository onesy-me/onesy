import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPhoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneFilled'

      short_name='ContactPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M0-120v-720h960v720H0Zm360-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM84-200h552q-42-75-116-117.5T360-360q-86 0-160 42.5T84-200Zm676-40 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneFilled.displayName = 'OnesyIconMaterialContactPhoneFilled';

export default IconMaterialContactPhoneFilled;
