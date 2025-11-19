import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListAltCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltCheckW100Filled'

      short_name='ListAltCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v377l-99 99-80-80-162 161 59 59H172Zm126-280h56v-56h-56v56Zm0-148h56v-56h-56v56Zm152 134h208v-28H450v28Zm0-148h208v-28H450v28Zm239 482-100-99 20-20 80 80 160-160 20 20-180 179Z"/>
    </Icon>
  );
});

IconMaterialListAltCheckW100Filled.displayName = 'OnesyIconMaterialListAltCheckW100Filled';

export default IconMaterialListAltCheckW100Filled;
