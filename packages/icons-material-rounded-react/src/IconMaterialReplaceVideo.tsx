import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplaceVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplaceVideo'

      short_name='ReplaceVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160h320v-320H280v320Zm0 0v-320 320Zm0 80q-33 0-56.5-23.5T200-160v-320q0-33 23.5-56.5T280-560h320q33 0 56.5 23.5T680-480v120l86-86q10-10 22-5t12 19v224q0 14-12 19t-22-5l-86-86v120q0 33-23.5 56.5T600-80H280Zm520-560H640q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720h36q-39-39-90-59.5T480-800q-71 0-133 33.5T247-675q-14 20-30 23t-30-4q-14-7-19.5-21t2.5-27q48-81 130.5-128.5T480-880q82 0 155.5 35T760-746v-94q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v160q0 17-11.5 28.5T800-640Z"/>
    </Icon>
  );
});

IconMaterialReplaceVideo.displayName = 'OnesyIconMaterialReplaceVideo';

export default IconMaterialReplaceVideo;
