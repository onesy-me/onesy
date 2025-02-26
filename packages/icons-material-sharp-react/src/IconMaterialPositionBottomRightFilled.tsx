import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionBottomRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomRightFilled'

      short_name='PositionBottomRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h360v-120H360v120ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomRightFilled.displayName = 'OnesyIconMaterialPositionBottomRightFilled';

export default IconMaterialPositionBottomRightFilled;
