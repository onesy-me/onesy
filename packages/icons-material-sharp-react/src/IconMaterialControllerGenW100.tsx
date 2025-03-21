import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControllerGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGenW100'

      short_name='ControllerGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.88-266q89.12 0 151.62-62.38t62.5-151.5q0-89.12-62.38-151.62T480.12-694Q391-694 328.5-631.62T266-480.12q0 89.12 62.38 151.62t151.5 62.5Zm-.07-28Q403-294 348.5-348.69q-54.5-54.7-54.5-131.5 0-76.81 54.69-131.31 54.7-54.5 131.5-54.5 76.81 0 131.31 54.69 54.5 54.7 54.5 131.5 0 76.81-54.69 131.31-54.7 54.5-131.5 54.5Zm.19-166 76-76-20-20-76 76 20 20ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialControllerGenW100.displayName = 'OnesyIconMaterialControllerGenW100';

export default IconMaterialControllerGenW100;
