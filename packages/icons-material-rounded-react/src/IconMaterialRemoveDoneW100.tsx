import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneW100'

      short_name='RemoveDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M863-137 606-394l-89 89q-9 9-21 9t-21-9L316-464q-4-4-4.5-9.5T316-484q5-5 10-5t10 5l160 160 88-90-396-396q-4-4-4.5-9.5T188-830q5-5 10-5t10 5l674 674q4 4 4 9.5t-5 9.5q-4 4-9 4t-9-4ZM249-305 90-464q-4-4-4.5-9.5T90-484q5-5 10-5t10 5l160 160 36-36 20 20-35 35q-9 9-21 9t-21-9Zm433-165-20-20 192-192q4-4 9.5-4.5T874-682q5 5 5 10t-5 10L682-470ZM568-582l-20-20 80-80q4-4 9.5-4.5T648-682q5 5 5 10t-5 10l-80 80Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneW100.displayName = 'OnesyIconMaterialRemoveDoneW100';

export default IconMaterialRemoveDoneW100;
