import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckroomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomW100'

      short_name='Checkroom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-212q-5.95 0-9.98-3.91-4.02-3.91-4.02-9.69 0-3.4 1.5-6.49 1.5-3.09 4.5-4.91l328-241v-72q0-5.95 4.1-9.97 4.1-4.03 9.9-4.03 32 0 55.5-23.02 23.5-23.03 23.5-55Q559-674 536.25-697 513.5-720 481-720q-32 0-55.5 22.46T402-643h-28q0-44 31-74.5t76-30.5q45 0 75.5 30.5T587-642q0 41-26.5 70.5T494-537v59l329 241q3 1.73 4.5 4.68 1.5 2.95 1.5 6.42 0 5.9-4.03 9.9-4.02 4-9.97 4H146Zm44-28h581L480-453 190-240Z"/>
    </Icon>
  );
});

IconMaterialCheckroomW100.displayName = 'OnesyIconMaterialCheckroomW100';

export default IconMaterialCheckroomW100;
