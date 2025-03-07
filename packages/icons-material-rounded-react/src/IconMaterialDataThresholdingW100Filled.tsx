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
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm195-385 59 59q9 9 21 9t21-9l136-137q4-4 4-9t-4-9q-4-4-9.5-4.5T645-654L507-516l-59-59q-9-9-21-9t-21 9L297-466q-4 4-4 9.5t4 9.5q4 4 9 4.5t9-3.5l112-111ZM300-320 200-220v20h19l120-120h-39Zm145 0L325-200h39l120-120h-39Zm145 0L470-200h39l120-120h-39Zm145 0L615-200h39l106-106v-14h-25Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100Filled.displayName = 'OnesyIconMaterialDataThresholdingW100Filled';

export default IconMaterialDataThresholdingW100Filled;
