import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRangeHoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodW100Filled'

      short_name='RangeHood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m148-434 184-184v-170h296v170l184 184H148Zm-16 222v-194h696v194H132Zm268-96h160v-28H400v28Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodW100Filled.displayName = 'OnesyIconMaterialRangeHoodW100Filled';

export default IconMaterialRangeHoodW100Filled;
