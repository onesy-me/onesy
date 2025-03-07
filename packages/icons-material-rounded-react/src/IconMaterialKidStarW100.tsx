import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKidStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStarW100'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m331-668 102-137q8.8-11.87 20.9-17.44Q466-828 480-828q14 0 26.1 5.56 12.1 5.57 20.9 17.44l102 137 158 54q20 7 30.5 22.66t10.5 34.6q0 8.74-2.57 17.31-2.56 8.57-8.43 16.43L713-384l4 150q1 26.14-17.35 44.07T657-172q1 0-17-2l-160-48-160 48q-5 2-9.24 2H303q-25 0-43-17.93T243-234l4-151-104-138q-5.87-7.96-8.43-16.64Q132-548.32 132-557q0-18.83 11.07-35.03Q154.15-608.22 174-615l157-53Zm18 24-165 56q-15 5-20.5 20.5T168-539l108 146-5 159q-1 17 12 27t29 5l168-49 168 50q16 5 29-5t12-27l-5-160 108-144q10-13 4.5-28.5T776-586l-165-58-106-142q-9-13-25-13t-25 13L349-644Zm131 145Z"/>
    </Icon>
  );
});

IconMaterialKidStarW100.displayName = 'OnesyIconMaterialKidStarW100';

export default IconMaterialKidStarW100;
