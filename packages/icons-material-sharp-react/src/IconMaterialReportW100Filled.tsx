import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportW100Filled'

      short_name='Report'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-310q8.5 0 14.25-5.75T500-330q0-8.5-5.75-14.25T480-350q-8.5 0-14.25 5.75T460-330q0 8.5 5.75 14.25T480-310Zm-14-106h28v-244h-28v244ZM352-172 172-351.53V-608l179.53-180H608l180 179.53V-352L608.47-172H352Z"/>
    </Icon>
  );
});

IconMaterialReportW100Filled.displayName = 'OnesyIconMaterialReportW100Filled';

export default IconMaterialReportW100Filled;
