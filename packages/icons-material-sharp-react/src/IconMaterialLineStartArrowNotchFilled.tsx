import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrowNotchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowNotchFilled'

      short_name='LineStartArrowNotch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-200 80-480l440-280-137 240h497v80H383l137 240Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowNotchFilled.displayName = 'OnesyIconMaterialLineStartArrowNotchFilled';

export default IconMaterialLineStartArrowNotchFilled;
