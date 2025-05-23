import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddTask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTask'

      short_name='AddTask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q48 0 93.5 11t87.5 32q15 8 19.5 24t-5.5 30q-10 14-26.5 18t-32.5-4q-32-15-66.5-23t-69.5-8q-134 0-227 93t-93 227q0 134 93 227t227 93q26 0 51-4t50-12q17-5 33-.5t25 19.5q8 14 3.5 30T622-105q-34 13-70 19t-72 6Zm280-200h-80q-17 0-28.5-11.5T640-320q0-17 11.5-28.5T680-360h80v-80q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v80h80q17 0 28.5 11.5T960-320q0 17-11.5 28.5T920-280h-80v80q0 17-11.5 28.5T800-160q-17 0-28.5-11.5T760-200v-80ZM424-408l372-373q11-11 28-11t28 11q11 11 11 28t-11 28L452-324q-12 12-28 12t-28-12L282-438q-11-11-11-28t11-28q11-11 28-11t28 11l86 86Z"/>
    </Icon>
  );
});

IconMaterialAddTask.displayName = 'OnesyIconMaterialAddTask';

export default IconMaterialAddTask;
