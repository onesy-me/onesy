import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataThresholdingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingW100'

      short_name='DataThresholding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm482-28h106v-106L654-200Zm-435 0h106l120-120h39L364-200h106l120-120h39L509-200h106l120-120h25v-440H200v540l100-100h39L219-200Zm87-237-19-19 140-140 80 80 147-147 19 19-166 167-80-80-121 120ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100.displayName = 'OnesyIconMaterialDataThresholdingW100';

export default IconMaterialDataThresholdingW100;
