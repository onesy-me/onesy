import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsGolfFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGolfFilled'

      short_name='SportsGolf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q-117 0-198.5-81.5T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 117-81.5 198.5T480-320Zm-80-280q17 0 28.5-11.5T440-640q0-17-11.5-28.5T400-680q-17 0-28.5 11.5T360-640q0 17 11.5 28.5T400-600Zm160 0q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680q-17 0-28.5 11.5T520-640q0 17 11.5 28.5T560-600Zm-80-80q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680ZM440-80v-40q0-33-23.5-56.5T360-200h-80v-80h400v80h-80q-33 0-56.5 23.5T520-120v40h-80Z"/>
    </Icon>
  );
});

IconMaterialSportsGolfFilled.displayName = 'OnesyIconMaterialSportsGolfFilled';

export default IconMaterialSportsGolfFilled;
