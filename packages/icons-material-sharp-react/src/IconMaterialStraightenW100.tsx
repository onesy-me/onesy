import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenW100'

      short_name='Straighten'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-376h696v376H132Zm28-28h640v-320H654v120h-28v-120H494v120h-28v-120H334v120h-28v-120H160v320Zm146-200h28-28Zm160 0h28-28Zm160 0h28-28Zm-146 40Z"/>
    </Icon>
  );
});

IconMaterialStraightenW100.displayName = 'OnesyIconMaterialStraightenW100';

export default IconMaterialStraightenW100;
