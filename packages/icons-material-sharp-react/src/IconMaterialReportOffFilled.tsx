import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReportOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffFilled'

      short_name='ReportOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-28 678-170l-48 50H330L120-332v-298l48-48L28-820l56-56L876-84l-56 56Zm-28-254L520-552v-128h-80v48L282-792l48-48h300l210 210v298l-48 50Zm-312 2q17 0 28.5-11.5T520-320v-6l-34-34h-6q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialReportOffFilled.displayName = 'OnesyIconMaterialReportOffFilled';

export default IconMaterialReportOffFilled;
