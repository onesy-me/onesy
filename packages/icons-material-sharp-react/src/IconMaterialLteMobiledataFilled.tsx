import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLteMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataFilled'

      short_name='LteMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320v-320h80v240h120v80H160Zm280 0v-240h-80v-80h240v80h-80v240h-80Zm200 0v-320h200v80H720v40h120v80H720v40h120v80H640Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataFilled.displayName = 'OnesyIconMaterialLteMobiledataFilled';

export default IconMaterialLteMobiledataFilled;
