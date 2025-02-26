import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forum'

      short_name='Forum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-120h520v-360h120v640L720-240H240ZM80-280v-600h600v440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z"/>
    </Icon>
  );
});

IconMaterialForum.displayName = 'OnesyIconMaterialForum';

export default IconMaterialForum;
