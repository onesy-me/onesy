import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBar'

      short_name='LocalBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80h200v-200L120-760v-80h720v80L520-400v200h200v80H240Zm58-560h364l72-80H226l72 80Zm182 204 111-124H369l111 124Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialLocalBar.displayName = 'OnesyIconMaterialLocalBar';

export default IconMaterialLocalBar;
