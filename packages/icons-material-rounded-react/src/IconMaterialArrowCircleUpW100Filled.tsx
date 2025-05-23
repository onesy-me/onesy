import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleUpW100Filled'

      short_name='ArrowCircleUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-557v191q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 10.46-4.31 4.5-4.32 4.5-10.69v-190l81 81q4 4 9.5 3.5t9.5-4.5q4-4 4-9.67 0-5.66-4-9.33l-93-92q-9-9-21-9t-21 9l-93 93q-4 4-4 9t4 9q4 4 9.67 4 5.66 0 9.33-4l80-80Zm14.17 425q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleUpW100Filled.displayName = 'OnesyIconMaterialArrowCircleUpW100Filled';

export default IconMaterialArrowCircleUpW100Filled;
