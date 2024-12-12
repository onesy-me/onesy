import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectStartFilled'

      short_name='TextSelectStart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120-120v-80h80v-560h-80v-80h240v80h-80v560h80v80H120Z"/>
    </Icon>
  );
});

IconMaterialTextSelectStartFilled.displayName = 'OnesyIconMaterialTextSelectStartFilled';

export default IconMaterialTextSelectStartFilled;
