import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircleW100Filled'

      short_name='BuildCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M406-422q15.89 0 29.94-4Q450-430 464-436l169 168 54-54-169-168q7-12 10.5-26.5T532-548q0-51.63-36.98-88.32Q458.04-673 406-673q-14 0-25.9 2.91-11.9 2.91-23.1 8.09l80 81-64 64-82-81q-5 11-8 23.5t-3 26.5q0 52.04 36.98 89.02T406-422Zm74.17 290q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialBuildCircleW100Filled.displayName = 'OnesyIconMaterialBuildCircleW100Filled';

export default IconMaterialBuildCircleW100Filled;
