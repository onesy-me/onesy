import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBurstModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeFilled'

      short_name='BurstMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-240v-480q0-17 11.5-28.5T80-760q17 0 28.5 11.5T120-720v480q0 17-11.5 28.5T80-200q-17 0-28.5-11.5T40-240Zm160 0v-480q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720v480q0 17-11.5 28.5T240-200q-17 0-28.5-11.5T200-240Zm240 40q-33 0-56.5-23.5T360-280v-400q0-33 23.5-56.5T440-760h400q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H440Zm180-200-40-53q-6-8-16-7.5t-16 8.5l-45 60q-8 10-1.5 21t18.5 11h240q12 0 18-11t-2-21l-64-87q-6-8-16-8t-16 8l-60 79Z"/>
    </Icon>
  );
});

IconMaterialBurstModeFilled.displayName = 'OnesyIconMaterialBurstModeFilled';

export default IconMaterialBurstModeFilled;
