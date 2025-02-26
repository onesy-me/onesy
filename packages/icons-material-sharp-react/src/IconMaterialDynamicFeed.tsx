import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeed'

      short_name='DynamicFeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-360h80v280h360v80H80Zm160-160v-360h80v280h360v80H240Zm160-160v-400h480v400H400Zm80-80h320v-160H480v160Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeed.displayName = 'OnesyIconMaterialDynamicFeed';

export default IconMaterialDynamicFeed;
