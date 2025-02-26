import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeW100'

      short_name='EMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-306h228v-28H394v-132h160v-28H394v-132h200v-28H366v348ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeW100.displayName = 'OnesyIconMaterialEMobiledataBadgeW100';

export default IconMaterialEMobiledataBadgeW100;
