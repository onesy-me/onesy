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
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm0-28h496q14 0 23-9t9-23v-448H200v448q0 14 9 23t23 9Zm248-132q-60 0-108.5-30T297-440q26-48 74.5-78T480-548q60 0 108.5 30t74.5 78q-26 48-74.5 78T480-332Zm-.24-68q-16.76 0-28.26-11.74-11.5-11.73-11.5-28.5 0-16.76 11.74-28.26 11.73-11.5 28.5-11.5 16.76 0 28.26 11.74 11.5 11.73 11.5 28.5 0 16.76-11.74 28.26-11.73 11.5-28.5 11.5Zm.24 28q28 0 48-20t20-48q0-28-20-48t-48-20q-28 0-48 20t-20 48q0 28 20 48t48 20Z"/>
    </Icon>
  );
});

IconMaterialPreviewW100Filled.displayName = 'OnesyIconMaterialPreviewW100Filled';

export default IconMaterialPreviewW100Filled;
