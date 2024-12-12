import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLteMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataBadgeW100Filled'

      short_name='LteMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-346h148v-28H248v-240h-28v268Zm218 0h28v-240h80v-28H358v28h80v240Zm188 0h148v-28H654v-92h80v-28h-80v-92h120v-28H626v268ZM92-172v-616h776v616H92Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterialLteMobiledataBadgeW100Filled';

export default IconMaterialLteMobiledataBadgeW100Filled;
