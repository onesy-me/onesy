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
      <path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm280-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM84-200h552q-42-75-116-117.5T360-360q-86 0-160 42.5T84-200Zm616-280q0-21 4-40.5t10-39.5h46q10 0 18-4t14-12l27-36q9-12 8-27t-12-26l-28-28q-11-11-27-11.5T732-694q-43 40-67.5 97.5T640-480q0 59 24.5 116.5T732-266q12 11 28 10.5t27-11.5l28-28q11-11 12-26t-8-27l-27-36q-6-8-14-12t-18-4h-46q-6-18-10-38.5t-4-41.5Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneFilled.displayName = 'OnesyIconMaterialContactPhoneFilled';

export default IconMaterialContactPhoneFilled;
