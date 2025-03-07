import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightW100Filled'

      short_name='Highlight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-644-50-50q-4-4-4.5-9.5t4.28-10.5q5.22-5 10.22-5 5 0 10 5l50 50q4 4 4.5 9.5t-4.72 10.72Q271-639 266-639q-5 0-10-5Zm210-84v-72q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v72q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm218 64 50-50q4-4 9.5-4.5t10.72 4.72Q759-709 759-704q0 5-5 10l-50 50q-4 4-9.5 4.5t-10.5-4.28q-5-5.22-5-10.22 0-5 5-10ZM412-192v-110L310-404q-8-8-13-19.28-5-11.28-5-23.72v-41q0-24.75 17.63-42.38Q327.25-548 352-548h256q24.75 0 42.38 17.62Q668-512.75 668-488v41q0 12.44-5 23.72T650-404L548-302v110q0 24.75-17.62 42.37Q512.75-132 488-132h-16q-24.75 0-42.37-17.63Q412-167.25 412-192Z"/>
    </Icon>
  );
});

IconMaterialHighlightW100Filled.displayName = 'OnesyIconMaterialHighlightW100Filled';

export default IconMaterialHighlightW100Filled;
