import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedPlayList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayList'

      short_name='FeaturedPlayList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-440h360v-80H240v80Zm0-120h360v-80H240v80ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayList.displayName = 'OnesyIconMaterialFeaturedPlayList';

export default IconMaterialFeaturedPlayList;
