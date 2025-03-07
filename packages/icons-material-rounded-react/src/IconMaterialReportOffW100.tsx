import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100'

      short_name='ReportOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M583-788q12.44 0 23.72 5T626-770l144 144q8 8 13 19.28 5 11.28 5 23.72v219q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-232L596-760H366q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h217Zm-89 210v-68q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v40l28 28ZM377-172q-12.44 0-23.72-5T334-190L190-334q-8-8-13-19.28-5-11.28-5-23.72v-206q0-12.44 5-23.72T190-626l52-52-100-100q-4-4-4.5-9.5t4.72-10.72Q147-803 152-803q5 0 10 5l636 636q4 4 4.5 9.5T798-142q-5 5-10 5t-10-5L678-242l-52 52q-8 8-19.5 13t-23.5 5H377Zm159-364ZM364-200h232l62-62-396-396-62 62v232l164 164Zm116-110q-8.5 0-14.25-5.75T460-330q0-8.5 5.75-14.25T480-350q8.5 0 14.25 5.75T500-330q0 8.5-5.75 14.25T480-310Zm-20-150Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100.displayName = 'OnesyIconMaterialReportOffW100';

export default IconMaterialReportOffW100;
