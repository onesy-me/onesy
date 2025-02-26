import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigateNextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextFilled'

      short_name='NavigateNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </Icon>
  );
});

IconMaterialNavigateNextFilled.displayName = 'OnesyIconMaterialNavigateNextFilled';

export default IconMaterialNavigateNextFilled;
