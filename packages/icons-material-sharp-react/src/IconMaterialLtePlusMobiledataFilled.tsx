import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLtePlusMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledataFilled'

      short_name='LtePlusMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-320v-320h80v240h120v80H40Zm240 0v-240h-80v-80h240v80h-80v240h-80Zm200 0v-320h200v80H560v40h120v80H560v40h120v80H480Zm320-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledataFilled.displayName = 'OnesyIconMaterialLtePlusMobiledataFilled';

export default IconMaterialLtePlusMobiledataFilled;
