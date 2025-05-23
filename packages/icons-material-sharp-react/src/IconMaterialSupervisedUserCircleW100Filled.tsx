import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisedUserCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisedUserCircleW100Filled'

      short_name='SupervisedUserCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM380-446q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm280 60q39.48 0 66.74-27.26Q754-440.52 754-480q0-39.48-27.26-66.74Q699.48-574 660-574q-39.48 0-66.74 27.26Q566-519.48 566-480q0 39.48 27.26 66.74Q620.52-386 660-386ZM480-160q77 0 142-33t110-90q-18-5-36-8t-36-3q-64 0-125.5 36T438-163q11 2 21 2.5t21 .5Zm-139-32q20-40 44.5-70t63.5-62q-14-4-37-7t-41-3q-42 0-78.5 10.5T221-292q23 32 53.5 57.5T341-192Z"/>
    </Icon>
  );
});

IconMaterialSupervisedUserCircleW100Filled.displayName = 'OnesyIconMaterialSupervisedUserCircleW100Filled';

export default IconMaterialSupervisedUserCircleW100Filled;
