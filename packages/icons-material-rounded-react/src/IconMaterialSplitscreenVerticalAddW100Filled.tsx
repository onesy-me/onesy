import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenVerticalAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAddW100Filled'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-172h-78q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h78v-78q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v78h78q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-78v78q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-78Zm-528 0q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h129q24.75 0 42.38 17.62Q421-752.75 421-728v496q0 24.75-17.62 42.37Q385.75-172 361-172H232Zm336-9q-14-8-21-21.5t-7-29.5v-496q0-24.75 17.63-42.38Q575.25-788 600-788h128q24.75 0 42.38 17.62Q788-752.75 788-728v337q-5-.5-10-.75t-10-.25q-75 0-131 51t-67 126q-2 8-2 16.67V-181Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAddW100Filled.displayName = 'OnesyIconMaterialSplitscreenVerticalAddW100Filled';

export default IconMaterialSplitscreenVerticalAddW100Filled;
