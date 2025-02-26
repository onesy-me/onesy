import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4gMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadgeW100Filled'

      short_name='4gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-306h228v-188h-68v28h40v132H544v-292h200v-28H516v348Zm-170 0h28v-120h80v-28h-80v-200h-28v200H214v-200h-28v228h160v120ZM92-172v-616h776v616H92Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterial4gMobiledataBadgeW100Filled';

export default IconMaterial4gMobiledataBadgeW100Filled;
