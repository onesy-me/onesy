import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropDownCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownCircleW100Filled'

      short_name='ArrowDropDownCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M469-399q4.64 5 10.82 5 6.18 0 11.18-5l75.28-75.28q6.72-6.72 3.18-16.22-3.54-9.5-13.46-9.5H403.53q-9.53 0-13.03 9.5t3.22 16.22L469-399Zm11.17 267q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownCircleW100Filled.displayName = 'OnesyIconMaterialArrowDropDownCircleW100Filled';

export default IconMaterialArrowDropDownCircleW100Filled;
