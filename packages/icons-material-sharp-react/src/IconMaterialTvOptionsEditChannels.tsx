import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvOptionsEditChannels = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOptionsEditChannels'

      short_name='TvOptionsEditChannels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-320v-80h80v80H80Zm0-160v-80h80v80H80Zm0-160v-80h80v80H80Zm160 320v-80h160v80H240Zm0-160v-80h520v80H240Zm0-160v-80h520v80H240Zm398 480L468-330l57-57 113 113 226-226 56 58-282 282Z"/>
    </Icon>
  );
});

IconMaterialTvOptionsEditChannels.displayName = 'OnesyIconMaterialTvOptionsEditChannels';

export default IconMaterialTvOptionsEditChannels;
