import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSplitFilled'

      short_name='ArrowSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-440q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h264l200-200h-64q-17 0-28.5-11.5T560-760q0-17 11.5-28.5T600-800h160q17 0 28.5 11.5T800-760v160q0 17-11.5 28.5T760-560q-17 0-28.5-11.5T720-600v-64L519-463q-11 11-25.5 17t-30.5 6H200Zm400 280q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h64l-99-98q-12-12-12-28.5t12-28.5q12-12 29-12t29 12l97 99v-64q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v160q0 17-11.5 28.5T760-160H600Z"/>
    </Icon>
  );
});

IconMaterialArrowSplitFilled.displayName = 'OnesyIconMaterialArrowSplitFilled';

export default IconMaterialArrowSplitFilled;
