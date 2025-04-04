import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderOuterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterW100Filled'

      short_name='BorderOuter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-604q-8.5 0-14.25-5.75T460-624q0-8.5 5.75-14.25T480-644q8.5 0 14.25 5.75T500-624q0 8.5-5.75 14.25T480-604ZM336-460q-8.5 0-14.25-5.75T316-480q0-8.5 5.75-14.25T336-500q8.5 0 14.25 5.75T356-480q0 8.5-5.75 14.25T336-460Zm144 0q-8.5 0-14.25-5.75T460-480q0-8.5 5.75-14.25T480-500q8.5 0 14.25 5.75T500-480q0 8.5-5.75 14.25T480-460Zm144 0q-8.5 0-14.25-5.75T604-480q0-8.5 5.75-14.25T624-500q8.5 0 14.25 5.75T644-480q0 8.5-5.75 14.25T624-460ZM480-316q-8.5 0-14.25-5.75T460-336q0-8.5 5.75-14.25T480-356q8.5 0 14.25 5.75T500-336q0 8.5-5.75 14.25T480-316ZM232-200h496q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm0 28q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Z"/>
    </Icon>
  );
});

IconMaterialBorderOuterW100Filled.displayName = 'OnesyIconMaterialBorderOuterW100Filled';

export default IconMaterialBorderOuterW100Filled;
