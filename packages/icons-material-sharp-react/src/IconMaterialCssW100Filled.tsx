import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCssW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CssW100Filled'

      short_name='Css'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M397-376v-64h28v36h112v-66H397v-114h168v64h-28v-36H425v66h140v114H397Zm255 0v-64h28v36h112v-66H652v-114h168v64h-28v-36H680v66h140v114H652Zm-510 0v-208h168v64h-28v-36H170v152h112v-36h28v64H142Z"/>
    </Icon>
  );
});

IconMaterialCssW100Filled.displayName = 'OnesyIconMaterialCssW100Filled';

export default IconMaterialCssW100Filled;
