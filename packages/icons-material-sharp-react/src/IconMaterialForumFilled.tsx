import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumFilled'

      short_name='Forum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-120h520v-360h120v640L720-240H240ZM80-280v-600h600v440H240L80-280Z"/>
    </Icon>
  );
});

IconMaterialForumFilled.displayName = 'OnesyIconMaterialForumFilled';

export default IconMaterialForumFilled;
