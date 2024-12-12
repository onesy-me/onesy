import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3gMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataBadgeW100Filled'

      short_name='3gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M506-306h228v-188h-94v28h66v132H534v-292h200v-28H506v348Zm-280 0h188v-160l-14-14 14-14v-160H226v28h160v132H226v28h160v132H226v28ZM92-172v-616h776v616H92Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterial3gMobiledataBadgeW100Filled';

export default IconMaterial3gMobiledataBadgeW100Filled;
