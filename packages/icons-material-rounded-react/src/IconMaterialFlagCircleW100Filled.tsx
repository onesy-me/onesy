import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagCircleW100Filled'

      short_name='FlagCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M364-456h126l32 63q4 8 11.42 12.5T549-376h125q12.75 0 21.38-8.63Q704-393.25 704-406v-148q0-12.75-8.62-21.38Q686.75-584 674-584h-84l-32-63q-4-8-11.42-12.5T531-664H366q-12.75 0-21.37 8.62Q336-646.75 336-634v364q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-186Zm156-64Zm-39.83 388q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialFlagCircleW100Filled.displayName = 'OnesyIconMaterialFlagCircleW100Filled';

export default IconMaterialFlagCircleW100Filled;
