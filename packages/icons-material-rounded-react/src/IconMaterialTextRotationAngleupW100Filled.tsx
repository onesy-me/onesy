import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationAngleupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleupW100Filled'

      short_name='TextRotationAngleup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-554 396-166q-4 4-9.5 4.5T376-166q-5-5-5-10t5-10l388-388h-82q-6 0-10-4t-4-10q0-6 4-10t10-4h100q13 0 21.5 8.5T812-572v100q0 6-4 10t-10 4q-6 0-10-4t-4-10v-82Zm-473 42 47 101q2 4 1 8.5t-4 7.5q-5 5-12.5 3.5T332-400L168-767q-2-4-1.5-7.5t3.5-6.5l7-7q3-3 6.5-4t7.5 1l366 167q7 3 8 10.5t-4 12.5q-3 3-7 4t-9-1l-101-47-133 133Zm-12-26 119-119-212-99-3 3 96 215Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleupW100Filled.displayName = 'OnesyIconMaterialTextRotationAngleupW100Filled';

export default IconMaterialTextRotationAngleupW100Filled;
