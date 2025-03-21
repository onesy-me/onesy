import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHearing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hearing'

      short_name='Hearing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-600q0 63 20.5 119.5T278-377q11 14 11 30.5T277-318q-13 12-30 10.5T219-323q-46-57-72.5-128T120-600q0-80 26.5-151T219-879q11-14 28-15.5t30 10.5q12 12 12 28.5T278-825q-37 47-57.5 104T200-600Zm360 100q-42 0-71-29.5T460-600q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T560-500Zm200 260q0-17 11.5-28.5T800-280q17 0 28.5 11.5T840-240q0 66-47 113T680-80q-62 0-101.5-31T518-202q-17-50-32.5-70T414-336q-62-50-98-113t-36-151q0-119 80.5-199.5T560-880q119 0 199.5 80.5T840-600q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600q0-85-57.5-142.5T560-800q-85 0-142.5 57.5T360-600q0 68 27 116t77 86q52 38 81 74t43 78q14 44 33.5 65t58.5 21q33 0 56.5-23.5T760-240Z"/>
    </Icon>
  );
});

IconMaterialHearing.displayName = 'OnesyIconMaterialHearing';

export default IconMaterialHearing;
