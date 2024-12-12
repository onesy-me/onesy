import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsFlatHeadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadW100Filled'

      short_name='ToolsFlatHead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M365-172v-28h230v28H365Zm0-68-32-225 68-271h158l68 271-32 225H365Zm1-242h228l-56-226H422l-56 226Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHeadW100Filled.displayName = 'OnesyIconMaterialToolsFlatHeadW100Filled';

export default IconMaterialToolsFlatHeadW100Filled;
