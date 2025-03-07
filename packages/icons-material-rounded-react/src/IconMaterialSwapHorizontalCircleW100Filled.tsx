import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapHorizontalCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircleW100Filled'

      short_name='SwapHorizontalCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-386h180q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H326l80-80q4-4 4.5-9.5t-4.72-10.72Q401-519 396-519q-5 0-10 5l-93 93q-9 9-9 21t9 21l93 93q4 4 9.5 4.5t10.72-4.72Q411-291 411-296q0-5-5-10l-80-80Zm308-160-80 80q-4 4-4.5 9.5t4.72 10.72Q559-441 564-441q5 0 10-5l93-93q9-9 9-21t-9-21l-93-93q-4-4-9.5-4.5t-10.72 4.72Q549-669 549-664q0 5 5 10l80 80H454q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h180ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircleW100Filled.displayName = 'OnesyIconMaterialSwapHorizontalCircleW100Filled';

export default IconMaterialSwapHorizontalCircleW100Filled;
