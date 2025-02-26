import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrowFilled'

      short_name='LineStartArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-200 80-480l440-280v240h360v80H520v240Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrowFilled.displayName = 'OnesyIconMaterialLineStartArrowFilled';

export default IconMaterialLineStartArrowFilled;
