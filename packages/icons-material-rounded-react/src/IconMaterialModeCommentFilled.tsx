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
      <path d="M160-240q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v623q0 27-24.5 37.5T812-148l-92-92H160Z"/>
    </Icon>
  );
});

IconMaterialModeCommentFilled.displayName = 'OnesyIconMaterialModeCommentFilled';

export default IconMaterialModeCommentFilled;
