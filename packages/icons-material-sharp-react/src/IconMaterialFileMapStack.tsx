import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileMapStack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMapStack'

      short_name='FileMapStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Zm240 240q-17 0-28.5-11.5T520-600q0-17 11.5-28.5T560-640q17 0 28.5 11.5T600-600q0 17-11.5 28.5T560-560Zm0 200q81-69 120.5-127.5T720-596q0-75-48.5-119.5T560-760q-63 0-111.5 44.5T400-596q0 50 39.5 108.5T560-360Z"/>
    </Icon>
  );
});

IconMaterialFileMapStack.displayName = 'OnesyIconMaterialFileMapStack';

export default IconMaterialFileMapStack;
