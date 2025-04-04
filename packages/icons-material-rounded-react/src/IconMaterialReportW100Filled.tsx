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
      <path d="M480-310q8.5 0 14.25-5.75T500-330q0-8.5-5.75-14.25T480-350q-8.5 0-14.25 5.75T460-330q0 8.5 5.75 14.25T480-310Zm.04-106q5.96 0 9.96-4.02 4-4.03 4-9.98v-216q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v216q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM377-172q-12.44 0-23.72-5T334-190L190-334q-8-8-13-19.28-5-11.28-5-23.72v-206q0-12.44 5-23.72T190-626l144-144q8-8 19.28-13 11.28-5 23.72-5h206q12.44 0 23.72 5T626-770l144 144q8 8 13 19.28 5 11.28 5 23.72v206q0 12.44-5 23.72T770-334L626-190q-8 8-19.28 13-11.28 5-23.72 5H377Z"/>
    </Icon>
  );
});

IconMaterialReportW100Filled.displayName = 'OnesyIconMaterialReportW100Filled';

export default IconMaterialReportW100Filled;
