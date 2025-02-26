import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsFlatHeadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadW100'

      short_name='ToolsFlatHead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M365-172v-28h230v28H365Zm0-68-32-225 68-271h158l68 271-32 225H365Zm24-28h182l26-186H362l27 186Zm-23-214h228l-56-226H422l-56 226Zm205 214H389h182Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHeadW100.displayName = 'OnesyIconMaterialToolsFlatHeadW100';

export default IconMaterialToolsFlatHeadW100;
