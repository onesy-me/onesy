import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideo'

      short_name='FeaturedVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18V5H3v14zM4 6h9v7H4V6z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideo.displayName = 'OnesyIconMaterialFeaturedVideo';

export default IconMaterialFeaturedVideo;
