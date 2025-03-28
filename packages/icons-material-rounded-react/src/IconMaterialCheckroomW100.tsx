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
      <path d="M190-240h581L480-453 190-240Zm218-433q-2 4-5 6t-7.66 2q-6.09 0-10.22-4.09-4.12-4.09-4.12-10.13 0-1.78.5-2.28.5-.5 1.5-2.5 12.91-28.61 39.5-46.31Q449.09-748 481-748q45 0 75.5 30.5T587-642q0 41-26.5 70.5T494-537v59l329 241q3 1.73 4.5 4.68 1.5 2.95 1.5 6.42 0 5.9-4.03 9.9-4.02 4-9.97 4H146q-5.95 0-9.98-3.91-4.02-3.91-4.02-9.69 0-3.4 1.5-6.49 1.5-3.09 4.5-4.91l328-241v-72q0-5.95 4.1-9.97 4.1-4.03 9.9-4.03 32 0 55.5-23.02 23.5-23.03 23.5-55Q559-674 536.25-697 513.5-720 481-720q-23 0-43 12.5T408-673Z"/>
    </Icon>
  );
});

IconMaterialCheckroomW100.displayName = 'OnesyIconMaterialCheckroomW100';

export default IconMaterialCheckroomW100;
