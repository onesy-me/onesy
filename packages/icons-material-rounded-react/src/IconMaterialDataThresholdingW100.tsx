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
      <path d="M232-172q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm422-28h74q14 0 23-9t9-23v-74L654-200Zm-435 0h106l120-120h39L364-200h106l120-120h39L509-200h106l120-120h25v-408q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v508l100-100h39L219-200Zm208-357L315-446q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l109-109q9-9 21-9t21 9l59 59 138-138q4-4 9.5-3.5t9.5 4.5q4 4 4 9t-4 9L528-498q-9 9-21 9t-21-9l-59-59ZM200-232v-528 560-32Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100.displayName = 'OnesyIconMaterialDataThresholdingW100';

export default IconMaterialDataThresholdingW100;
