import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataThresholdingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingW100Filled'

      short_name='DataThresholding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-320 200-220v20h19l120-120h-39Zm145 0L325-200h39l120-120h-39Zm145 0L470-200h39l120-120h-39Zm145 0L615-200h39l106-106v-14h-25Zm-81-343L507-516l-80-80-140 140 19 19 121-120 80 80 166-167-19-19ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100Filled.displayName = 'OnesyIconMaterialDataThresholdingW100Filled';

export default IconMaterialDataThresholdingW100Filled;
