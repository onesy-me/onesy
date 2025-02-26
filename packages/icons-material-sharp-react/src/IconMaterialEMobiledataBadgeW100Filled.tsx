import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeW100Filled'

      short_name='EMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-306h228v-28H394v-132h160v-28H394v-132h200v-28H366v348ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterialEMobiledataBadgeW100Filled';

export default IconMaterialEMobiledataBadgeW100Filled;
