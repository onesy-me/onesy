import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalSeeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeW100Filled'

      short_name='LocalSee'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-288q-48 0-80-32t-32-80q0-48 32-79.5t79-32.5q24 35 52 67.5t59 63.5q-7 41-37 67t-73 26ZM132-132v-536h176l74-80h28q-1 7-1.5 13.5T408-720q0 50 14.5 94.5T462-539q-52 7-87 46t-35 93q0 59 40.5 99.5T480-260q48 0 84.5-27.5T614-358q27 26 54 50t52 47q27-25 54.5-49t53.5-49v227H132Zm588-265q128-118 170-183t42-134q0-100-64-159t-148-59q-84 0-148 59t-64 159q0 69 42 134t170 183Zm-55-233 21-68-56-45h68l22-67 22 67h68l-55 45 21 68-56-42-55 42Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeW100Filled.displayName = 'OnesyIconMaterialLocalSeeW100Filled';

export default IconMaterialLocalSeeW100Filled;
