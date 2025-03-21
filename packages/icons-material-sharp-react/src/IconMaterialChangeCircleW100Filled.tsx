import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChangeCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeCircleW100Filled'

      short_name='ChangeCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m483-222 91-91-91-91-20 20 59 59q-52 0-91-11.5T370-370q-23-23-34.5-52T324-480q0-17 3.5-34t10.5-32l-22-18q-10 20-15 41.08T296-480q0 34.95 13.5 68.97Q323-377 349.5-350t73 40q46.5 13 95.5 13l-55 55 20 20Zm162-174q10-20 15-41.08t5-42.92q0-34.79-13.5-69.12Q638-583.45 611-610q-26-27-72.69-40-46.7-13-95.31-13l55-55-20-20-91 91 91 91 20-20-59-59q52 0 91 11.5t61.3 33.87q22.29 22.38 34 51.46Q637-509.08 637-480q0 17-3.5 34T623-414l22 18ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialChangeCircleW100Filled.displayName = 'OnesyIconMaterialChangeCircleW100Filled';

export default IconMaterialChangeCircleW100Filled;
