import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialErrorMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorMedW100Filled'

      short_name='ErrorMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m369-507 62 84q5 6 12 6t12-6l62-84 61 84q5 6 12 6t11.94-6.47L676-523q4-5 2.5-10t-6.5-8.5q-5-3.5-10.5-3T653-539l-63 86-61-84q-5-6-12-6t-12 6l-62 84-62-84q-5-6-12-6t-11.87 6.47L284-437q-4 5-2.5 10.5t6.5 8.5q5 3 10.5 2.5t8.5-5.5l62-86Zm111.17 375q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialErrorMedW100Filled.displayName = 'OnesyIconMaterialErrorMedW100Filled';

export default IconMaterialErrorMedW100Filled;
