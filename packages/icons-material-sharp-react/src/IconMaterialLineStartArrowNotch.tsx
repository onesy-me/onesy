import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrowNotch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowNotch'

      short_name='LineStartArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-200 80-480l440-280-137 240h497v80H383l137 240Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowNotch.displayName = 'OnesyIconMaterialLineStartArrowNotch';

export default IconMaterialLineStartArrowNotch;
