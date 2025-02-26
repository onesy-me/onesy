import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Photo'

      short_name='Photo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h480L570-480 450-320l-90-120-120 160ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialPhoto.displayName = 'OnesyIconMaterialPhoto';

export default IconMaterialPhoto;
