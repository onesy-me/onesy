import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPreviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewW100Filled'

      short_name='Preview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-480H200v480Zm280-132q-60 0-108.5-30T297-440q26-48 74.5-78T480-548q60 0 108.5 30t74.5 78q-26 48-74.5 78T480-332Zm-.24-68q-16.76 0-28.26-11.74-11.5-11.73-11.5-28.5 0-16.76 11.74-28.26 11.73-11.5 28.5-11.5 16.76 0 28.26 11.74 11.5 11.73 11.5 28.5 0 16.76-11.74 28.26-11.73 11.5-28.5 11.5Zm.24 28q28 0 48-20t20-48q0-28-20-48t-48-20q-28 0-48 20t-20 48q0 28 20 48t48 20Z"/>
    </Icon>
  );
});

IconMaterialPreviewW100Filled.displayName = 'OnesyIconMaterialPreviewW100Filled';

export default IconMaterialPreviewW100Filled;
