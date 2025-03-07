import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPreviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewW100'

      short_name='Preview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-480H200v480Zm280-132q-60 0-108.5-30T297-440q26-48 74.5-78T480-548q60 0 108.5 30t74.5 78q-26 48-74.5 78T480-332Zm0-28q45 0 84.5-21t68.5-59q-29-38-68.5-59T480-520q-45 0-84.5 21T327-440q29 38 68.5 59t84.5 21Zm0-80Zm.24 40q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialPreviewW100.displayName = 'OnesyIconMaterialPreviewW100';

export default IconMaterialPreviewW100;
