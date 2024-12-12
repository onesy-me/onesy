import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorStatusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorStatusFilled'

      short_name='DetectorStatus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-120 296-262l57-56 85 85 169-170 57 57-226 226ZM324-640l12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Z"/>
    </Icon>
  );
});

IconMaterialDetectorStatusFilled.displayName = 'OnesyIconMaterialDetectorStatusFilled';

export default IconMaterialDetectorStatusFilled;
