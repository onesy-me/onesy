import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskW100Filled'

      short_name='AddTask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.52-132q-71.95 0-135.24-27.5Q281-187 233.95-233.93q-47.06-46.93-74.5-110.37Q132-407.74 132-479.87t27.4-135.69q27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828q60.33 0 114.17 19Q648-790 692-756l-20 21q-40-31-88.78-48-48.77-17-103.22-17-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q36 0 70-8t65-22l21 21q-35 18-74.5 27.5t-81.98 9.5ZM786-186v-120H666v-28h120v-120h28v120h120v28H814v120h-28ZM422-332 288-466l20-20 114 114 386-386 20 20-406 406Z"/>
    </Icon>
  );
});

IconMaterialAddTaskW100Filled.displayName = 'OnesyIconMaterialAddTaskW100Filled';

export default IconMaterialAddTaskW100Filled;
