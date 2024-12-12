import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDownFilled'

      short_name='TextSelectMoveDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-760v-80h720v80H120Zm360 480L320-440l56-56 64 63v-247h80v247l64-63 56 56-160 160ZM120-120v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDownFilled.displayName = 'OnesyIconMaterialTextSelectMoveDownFilled';

export default IconMaterialTextSelectMoveDownFilled;
