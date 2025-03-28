import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapVerticalCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVerticalCircleW100Filled'

      short_name='SwapVerticalCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-634v180q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-180l80 80q4 4 9.5 4.5t10.72-4.72Q519-559 519-564q0-5-5-10l-93-93q-8.8-9-20.9-9-12.1 0-21.1 9l-93 93q-4 4-4.5 9.5t4.72 10.72Q291-549 296-549q5 0 10-5l80-80Zm160 308-80-80q-4-4-9.5-4.5t-10.72 4.72Q441-401 441-396q0 5 5 10l93 93q8.8 9 20.9 9 12.1 0 21.1-9l93-93q4-4 4.5-9.5t-4.72-10.72Q669-411 664-411q-5 0-10 5l-80 80v-180q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v180Zm-65.83 194q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialSwapVerticalCircleW100Filled.displayName = 'OnesyIconMaterialSwapVerticalCircleW100Filled';

export default IconMaterialSwapVerticalCircleW100Filled;
