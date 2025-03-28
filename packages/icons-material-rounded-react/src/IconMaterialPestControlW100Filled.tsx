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
      <path d="M480-171q-57 0-99.5-33T315-288l-67 38q-5 3-10.5 1t-8.5-7q-3-5-1.5-10.5t6.5-8.5l70-40q-5-14-7.5-29.5T292-376h-87q-6 0-10-4t-4-10q0-6 4-10t10-4h86q0-21 3.5-41.5T304-485l-71-41q-5-3-6.5-8.5T228-545q3-5 8.5-6.5T247-550l67 39q7-15 15.5-28.5T348-565q-1-5-1.5-10t-.5-10q0-26 9-49t25-41l-34-34q-4-4-4-9t4-10q4-5 9.5-4.5T366-728l36 34q17-12 36.5-18.5T480-719q22 0 42 7t37 19l35-35q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-34 34q16 18 25 40.5t9 48.5v9.5q0 4.5-1 9.5 10 12 18 25.5t15 28.5l66-38q5-3 10.5-1.5t8.5 6.5q3 5 1.5 10.5T725-526l-70 40q6 17 9.5 35t4.5 37h86q6 0 10 4t4 10q0 6-4 10t-10 4h-86q-1 19-4.5 36.5T656-315l71 41q5 3 6.5 8.5T732-255q-3 5-8.5 6.5T713-250l-67-39q-23 51-66 84.5T480-171ZM374-591q22-18 48.5-28t57.5-10q30 0 56.5 10t48.5 27q-2-42-32.5-70.5T480-691q-43 0-73.5 29T374-591Zm106 392q73 0 117-61.5T641-400q0-70-41-135.5T480-601q-79 0-120 65t-41 136q0 78 44 139.5T480-199Zm0-107q-6 0-10-4t-4-10v-135q0-6 4-10t10-4q6 0 10 4t4 10v135q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialPestControlW100Filled.displayName = 'OnesyIconMaterialPestControlW100Filled';

export default IconMaterialPestControlW100Filled;
