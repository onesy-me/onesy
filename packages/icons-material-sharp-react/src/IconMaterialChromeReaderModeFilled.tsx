import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeReaderModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeFilled'

      short_name='ChromeReaderMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm440-80h280v-480H520v480Zm40-320h200v-60H560v60Zm0 100h200v-60H560v60Zm0 100h200v-60H560v60Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeFilled.displayName = 'OnesyIconMaterialChromeReaderModeFilled';

export default IconMaterialChromeReaderModeFilled;
