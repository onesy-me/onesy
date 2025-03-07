import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightW100Filled'

      short_name='ArrowCircleRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM551-466l-81 81q-4 4-3.5 9t4.5 9q4 4 9.67 4 5.66 0 9.33-4l92-92q9-9 9-21t-9-21l-93-93q-4-4-9-4t-9 4q-4 4-4 9.67 0 5.66 4 9.33l80 81H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h191Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightW100Filled.displayName = 'OnesyIconMaterialArrowCircleRightW100Filled';

export default IconMaterialArrowCircleRightW100Filled;
