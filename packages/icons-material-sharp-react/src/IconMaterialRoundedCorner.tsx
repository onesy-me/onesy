import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundedCorner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundedCorner'

      short_name='RoundedCorner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80v-200q0-50-35-85t-85-35H440v-80h200q83 0 141.5 58.5T840-640v200Z"/>
    </Icon>
  );
});

IconMaterialRoundedCorner.displayName = 'OnesyIconMaterialRoundedCorner';

export default IconMaterialRoundedCorner;
