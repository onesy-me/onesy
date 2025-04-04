import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeComment'

      short_name='ModeComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v623q0 27-24.5 37.5T812-148l-92-92H160Zm594-80 46 45v-525H160v480h594Zm-594 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialModeComment.displayName = 'OnesyIconMaterialModeComment';

export default IconMaterialModeComment;
