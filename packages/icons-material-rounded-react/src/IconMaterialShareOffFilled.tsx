import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareOffFilled'

      short_name='ShareOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40q-83 0-141.5-58.5T40-240q0-83 58.5-141.5T240-440q83 0 141.5 58.5T440-240q0 83-58.5 141.5T240-40Zm0-172 56 57q6 6 14 6t14-6q6-6 6-14.5t-6-14.5l-56-56 57-57q6-6 6-14t-6-14q-6-6-14-6t-14 6l-57 57-57-57q-6-6-14-6t-14 6q-6 6-6 14t6 14l57 57-57 57q-6 6-6 14t6 14q6 6 14 6t14-6l57-57Zm82-356 282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L368-515q-12 8-26 9t-28-4q-18-5-36.5-7.5T240-520q-22 0-42.5 3.5T157-507q-12 4-21-4t-5-19q14-31 43.5-50.5T240-600q23 0 44 8.5t38 23.5ZM720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5l-87-50q-13-8-17-21t4-26q8-13 21.5-17t26.5 4l86 50q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialShareOffFilled.displayName = 'OnesyIconMaterialShareOffFilled';

export default IconMaterialShareOffFilled;
