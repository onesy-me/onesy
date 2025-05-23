import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolyline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Polyline'

      short_name='Polyline'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M12,4h2v2h-2V4z M7,14H5v-2h2V14z M19,20h-2v-2h2V20z" opacity=".3"/><path d="M15,16v1.26l-6-3v-3.17L11.7,8H16V2h-6v4.9L7.3,10H3v6h5l7,3.5V22h6v-6H15z M12,4h2v2h-2V4z M7,14H5v-2h2V14z M19,20h-2v-2 h2V20z"/></g>
    </Icon>
  );
});

IconMaterialPolyline.displayName = 'OnesyIconMaterialPolyline';

export default IconMaterialPolyline;
