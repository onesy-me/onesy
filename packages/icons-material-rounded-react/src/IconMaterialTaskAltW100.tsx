import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskAltW100'

      short_name='TaskAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828q53 0 102 15.5t93 44.5q6 4 8 10t-2 11q-4 5-10.5 5.5T659-745q-40-27-85.5-41T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17.39-1.5-33.7Q797-530 793-547q-2-6.02 1-11.51t9.18-6.49q5.82-1 10.32 3t6.5 10q4 17 6 34.91 2 17.9 2 37.09 0 72.21-27.39 135.72-27.39 63.51-74.35 110.49-46.96 46.98-110.43 74.39Q552.35-132 480.17-132ZM422-372l376-376q4-4 9.5-4.5t10.72 4.72Q823-743 823-738q0 5-5 10L443-353q-9 9-21 9t-21-9L298-456q-4-4-4.5-9.5T298-476q5-5 10-5t10 5l104 104Z"/>
    </Icon>
  );
});

IconMaterialTaskAltW100.displayName = 'OnesyIconMaterialTaskAltW100';

export default IconMaterialTaskAltW100;
