import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipPrevious = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPrevious'

      short_name='SkipPrevious'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z"/>
    </Icon>
  );
});

IconMaterialSkipPrevious.displayName = 'OnesyIconMaterialSkipPrevious';

export default IconMaterialSkipPrevious;
