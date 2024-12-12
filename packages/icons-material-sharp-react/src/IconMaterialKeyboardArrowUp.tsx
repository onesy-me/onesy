import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUp'

      short_name='KeyboardArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUp.displayName = 'OnesyIconMaterialKeyboardArrowUp';

export default IconMaterialKeyboardArrowUp;
