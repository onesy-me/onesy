import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMapW100'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm280-105q70.73-59.86 105.36-111.32Q620-467.78 620-511.57q0-66.43-42-104.93T480-655q-56 0-98 38.56-42 38.57-42 104.78 0 43.66 35 95.16T480-305Zm-.14-167q-16.86 0-28.36-11.64t-11.5-28.5q0-16.86 11.64-28.36t28.5-11.5q16.86 0 28.36 11.64t11.5 28.5q0 16.86-11.64 28.36t-28.5 11.5ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialFileMapW100.displayName = 'OnesyIconMaterialFileMapW100';

export default IconMaterialFileMapW100;
