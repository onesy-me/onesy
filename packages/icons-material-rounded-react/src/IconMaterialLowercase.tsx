import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLowercase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lowercase'

      short_name='Lowercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-240q-51 0-81-27.5T189-340q0-44 34.5-72.5T312-441q23 0 45 4t38 11v-12q0-29-20.5-47T320-503q-15 0-29.5 4.5T264-485q-13 10-24.5 7T221-489q-7-8-7-19t11-19q20-16 45-23.5t51-7.5q69 0 103 32.5t34 97.5v147q0 13-9.5 22t-22.5 9q-13 0-22-9.5t-9-22.5v-5h-4q-14 23-38 35t-53 12Zm12-54q35 0 59.5-24t24.5-56q-14-8-33.5-12.5T324-391q-32 0-50 14t-18 37q0 20 16 33t40 13Zm348-98v-208q0-17 11.5-28.5T700-640q17 0 28.5 11.5T740-600v208l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L728-268q-12 12-28 12t-28-12L568-372q-11-11-11-28t11-28q11-11 28-11t28 11l36 36Z"/>
    </Icon>
  );
});

IconMaterialLowercase.displayName = 'OnesyIconMaterialLowercase';

export default IconMaterialLowercase;
