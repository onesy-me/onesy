import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCommentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentFilled'

      short_name='ModeComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-640h800v800L720-240H80Z"/>
    </Icon>
  );
});

IconMaterialModeCommentFilled.displayName = 'OnesyIconMaterialModeCommentFilled';

export default IconMaterialModeCommentFilled;
