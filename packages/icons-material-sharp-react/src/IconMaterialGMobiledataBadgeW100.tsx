import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataBadgeW100'

      short_name='GMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-306h268v-188h-88v28h60v132H374v-292h240v-28H346v348ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadgeW100.displayName = 'OnesyIconMaterialGMobiledataBadgeW100';

export default IconMaterialGMobiledataBadgeW100;
