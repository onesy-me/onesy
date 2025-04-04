import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPresentToAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAll'

      short_name='PresentToAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-487v127q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-126l36 35q12 11 28 11.5t28-11.5q12-12 12-28.5T612-508L508-612q-12-12-28-12t-28 12L348-508q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5l35-35ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPresentToAll.displayName = 'OnesyIconMaterialPresentToAll';

export default IconMaterialPresentToAll;
