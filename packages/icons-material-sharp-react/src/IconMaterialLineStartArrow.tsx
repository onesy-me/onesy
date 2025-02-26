import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartArrow'

      short_name='LineStartArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-200 80-480l440-280v240h360v80H520v240Zm-80-146v-268L229-480l211 134Zm0-134Z"/>
    </Icon>
  );
});

IconMaterialLineStartArrow.displayName = 'OnesyIconMaterialLineStartArrow';

export default IconMaterialLineStartArrow;
