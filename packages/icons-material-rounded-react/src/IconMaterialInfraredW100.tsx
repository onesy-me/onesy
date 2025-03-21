import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInfraredW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfraredW100'

      short_name='Infrared'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M678-480q0 87-31.5 163T561-182q-5 5-10.5 6t-10.5-4q-5-5-3.5-12t6.5-12q51-55 79-125.5T650-480q0-80-28-150.5T543-756q-5-5-6.5-12t3.5-12q5-5 10.5-4t10.5 6q54 59 85.5 135T678-480Zm-128 0q0 60-21 112.5T471-273q-5 5-11 6t-11-4q-5-5-4-10.5t5-10.5q34-38 53-86t19-102q0-54-19-102t-53-86q-4-5-5-10.5t4-10.5q5-5 11-4t11 6q37 42 58 94.5T550-480Zm-128 0q0 34-11.5 63.5T379-363q-4 5-9.5 6t-10.5-4q-4-4-4.5-10t3.5-11q17-20 26.5-45t9.5-53q0-28-9.5-53T358-578q-4-5-3.5-11t4.5-10q5-5 10.5-4t9.5 6q20 24 31.5 53.5T422-480Zm-128 0q0 22-15.5 37.5T241-426v226q0 6-4 10t-10 4q-6 0-10-4t-4-10v-560q0-6 4-10t10-4q6 0 10 4t4 10v226q22 1 37.5 16.5T294-480Z"/>
    </Icon>
  );
});

IconMaterialInfraredW100.displayName = 'OnesyIconMaterialInfraredW100';

export default IconMaterialInfraredW100;
