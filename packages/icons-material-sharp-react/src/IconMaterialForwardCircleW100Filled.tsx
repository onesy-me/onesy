import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardCircleW100Filled'

      short_name='ForwardCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.24-276q84.76 0 144.26-59.67Q684-395.34 684-480h-28q0 73-51.56 124.5T479.94-304Q407-304 355.5-355.56T304-480.06q0-72.94 51.54-124.44Q407.09-656 480-656h6l-47 47 20 20 81-81-82-82-20 20 48 48q-87 0-148.5 59T276-480q0 84.66 59.74 144.33Q395.48-276 480.24-276Zm-.07 144q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialForwardCircleW100Filled.displayName = 'OnesyIconMaterialForwardCircleW100Filled';

export default IconMaterialForwardCircleW100Filled;
