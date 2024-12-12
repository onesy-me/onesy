import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAlt'

      short_name='FilterAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160v-280L118-800h724L560-440v280H400Zm80-308 198-252H282l198 252Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFilterAlt.displayName = 'OnesyIconMaterialFilterAlt';

export default IconMaterialFilterAlt;
