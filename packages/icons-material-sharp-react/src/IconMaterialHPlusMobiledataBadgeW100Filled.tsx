import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHPlusMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataBadgeW100Filled'

      short_name='HPlusMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M222-306h28v-160h192v160h28v-348h-28v160H250v-160h-28v348Zm408-80h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80ZM92-172v-616h776v616H92Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterialHPlusMobiledataBadgeW100Filled';

export default IconMaterialHPlusMobiledataBadgeW100Filled;
