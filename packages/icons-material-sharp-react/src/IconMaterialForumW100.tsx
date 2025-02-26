import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumW100'

      short_name='Forum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M264-332v-56h455l33 33v-365h56v500L696-332H264Zm-112-24v-472h520v360H264L152-356Zm492-140v-304H180v376l72-72h392Zm-464 0v-304 304Z"/>
    </Icon>
  );
});

IconMaterialForumW100.displayName = 'OnesyIconMaterialForumW100';

export default IconMaterialForumW100;
