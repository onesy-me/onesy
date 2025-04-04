import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100Filled'

      short_name='ReportOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M377-172q-12.44 0-23.72-5T334-190L190-334q-8-8-13-19.28-5-11.28-5-23.72v-206q0-12.44 5-23.72T190-626l52-52-100-100q-4-4-4.5-9.5t4.72-10.72Q147-803 152-803q5 0 10 5l636 636q4 4 4.5 9.5T798-142q-5 5-10 5t-10-5L678-242l-52 52q-8 8-19.5 13t-23.5 5H377Zm103-138q8.5 0 14.25-5.75T500-330q0-8.5-5.75-14.25T480-350q-8.5 0-14.25 5.75T460-330q0 8.5 5.75 14.25T480-310Zm254-28L494-578v-68q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v40L338-734q-8-8-8-20t7.83-19.81q7.12-7.09 15.66-10.64Q362.03-788 372-788h211q12.44 0 23.72 5T626-770l144 144q8 8 13 19.28 5 11.28 5 23.72v214q0 8.4-2.75 16.2Q782.5-345 777-339q-8.31 10-21.16 10-12.84 0-21.84-9Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100Filled.displayName = 'OnesyIconMaterialReportOffW100Filled';

export default IconMaterialReportOffW100Filled;
