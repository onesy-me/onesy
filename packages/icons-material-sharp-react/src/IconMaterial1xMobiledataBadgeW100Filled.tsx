import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadgeW100Filled'

      short_name='1xMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-306h28v-348H226v28h80v320Zm178 0h32l94-157 94 157h34L627-492l97-162h-32l-81 136-81-136h-34l98 164-110 184ZM92-172v-616h776v616H92Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterial1xMobiledataBadgeW100Filled';

export default IconMaterial1xMobiledataBadgeW100Filled;
