import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHPlusMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataFilled'

      short_name='HPlusMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-400h80v160h240v-160h80v400h-80v-160H240v160h-80Zm560-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataFilled.displayName = 'OnesyIconMaterialHPlusMobiledataFilled';

export default IconMaterialHPlusMobiledataFilled;
