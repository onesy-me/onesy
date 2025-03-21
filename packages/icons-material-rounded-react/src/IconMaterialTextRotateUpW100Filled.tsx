import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotateUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpW100Filled'

      short_name='TextRotateUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m716-762-58 58q-4 4-9.5 4.5T638-704q-5-5-5-10t5-10l71-71q9-9 21-9t21 9l71 71q4 4 4.5 9.5T822-704q-5 5-10 5t-10-5l-58-58v550q0 6-4 10t-10 4q-6 0-10-4t-4-10v-550ZM438-398l105 39q4 2 6.5 5t2.5 8q0 8-6 11.5t-13 1.5L156-477q-4-2-6-5t-2-7v-10q0-4 2.5-7t6.5-5l376-140q7-2 13 1.5t6 11.5q0 5-2 8t-7 5l-105 39v188Zm-26-10v-168l-220 80v4l220 84Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpW100Filled.displayName = 'OnesyIconMaterialTextRotateUpW100Filled';

export default IconMaterialTextRotateUpW100Filled;
