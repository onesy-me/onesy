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
      <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFilterAlt.displayName = 'OnesyIconMaterialFilterAlt';

export default IconMaterialFilterAlt;
