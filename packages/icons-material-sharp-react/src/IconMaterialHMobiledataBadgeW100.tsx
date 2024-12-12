import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadgeW100'

      short_name='HMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-306h28v-160h192v160h28v-348h-28v160H384v-160h-28v348ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadgeW100.displayName = 'OnesyIconMaterialHMobiledataBadgeW100';

export default IconMaterialHMobiledataBadgeW100;
