import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTibiaAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaAltFilled'

      short_name='TibiaAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-80q-16-47-24-92t-10-86q-2-41-.5-75t4.5-58q0-1 0 0-22-5-50.5-12.5t-61-20.5Q220-437 186-455.5T119-500l243-339 257 117q64 29 102.5 88T760-503v423H394Zm146-121q9 0 17-4t13-10q6 6 14 10t16 4q17 0 28.5-11.5T640-241q0-17-11.5-28.5T600-281v-159q17 0 28.5-11.5T640-480q0-17-11.5-28.5T600-520q-8 0-16 3.5t-14 9.5q-5-6-13-9.5t-17-3.5q-17 0-28.5 11.5T500-480q0 17 11.5 28.5T540-440v159q-17 0-28.5 11.5T500-241q0 17 11.5 28.5T540-201Z"/>
    </Icon>
  );
});

IconMaterialTibiaAltFilled.displayName = 'OnesyIconMaterialTibiaAltFilled';

export default IconMaterialTibiaAltFilled;
