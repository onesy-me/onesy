import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPestControlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PestControlW100Filled'

      short_name='PestControl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-171q-57 0-99.5-33T315-288l-79 45-14-25 82-47q-5-14-7.5-29.5T292-376H191v-28h100q0-21 3.5-41.5T304-485l-83-48 14-24 79 46q7-15 15.5-28.5T348-565q-1-5-1.5-10t-.5-10q0-26 9-49t25-41l-43-43 19-20 46 44q17-12 36.5-18.5T480-719q22 0 42 7t37 19l45-45 19 20-44 44q16 18 25 40.5t9 48.5v9.5q0 4.5-1 9.5 10 12 18 25.5t15 28.5l78-45 14 24-82 47q6 17 9.5 35t4.5 37h100v28H669q-1 19-4.5 36.5T656-315l83 48-14 24-79-46q-23 51-66 84.5T480-171ZM374-591q22-18 48.5-28t57.5-10q30 0 56.5 10t48.5 27q-2-42-32.5-70.5T480-691q-43 0-73.5 29T374-591Zm106 392q73 0 117-61.5T641-400q0-70-41-135.5T480-601q-79 0-120 65t-41 136q0 78 44 139.5T480-199Zm-14-107v-163h28v163h-28Z"/>
    </Icon>
  );
});

IconMaterialPestControlW100Filled.displayName = 'OnesyIconMaterialPestControlW100Filled';

export default IconMaterialPestControlW100Filled;
