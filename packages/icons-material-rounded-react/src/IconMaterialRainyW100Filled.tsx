import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRainyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyW100Filled'

      short_name='Rainy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M551-99q-5 3-10.5 1t-8.5-7l-70-140q-3-5-1-10.5t7-8.5q5-3 11-.5t9 7.5l70 139q3 5 .5 10.5T551-99Zm241 0q-5 3-10.5 1t-8.5-7l-70-140q-3-5-1-10.5t7-8.5q5-3 11-.5t9 7.5l70 139q3 5 .5 10.5T792-99Zm-481 0q-5 3-11 1t-9-7l-70-140q-3-5-.5-10.5t7.5-8.5q5-3 10.5-.5t8.5 7.5l70 139q3 5 1 10.5t-7 8.5Zm-11-247q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29-56 79.5-88T480-854q85 0 145.5 57T695-655q75 4 117 49.5T854-500q0 64-45 109t-109 45H300Z"/>
    </Icon>
  );
});

IconMaterialRainyW100Filled.displayName = 'OnesyIconMaterialRainyW100Filled';

export default IconMaterialRainyW100Filled;
