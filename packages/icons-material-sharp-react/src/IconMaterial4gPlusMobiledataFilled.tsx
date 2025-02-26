import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4gPlusMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gPlusMobiledataFilled'

      short_name='4gPlusMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-360v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-600 80v-120H40v-280h80v200h80v-200h80v200h40v80h-40v120h-80Zm160 0v-400h320v80H440v240h160v-80h-80v-80h160v240H360Z"/>
    </Icon>
  );
});

IconMaterial4gPlusMobiledataFilled.displayName = 'OnesyIconMaterial4gPlusMobiledataFilled';

export default IconMaterial4gPlusMobiledataFilled;
