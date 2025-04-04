import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNote2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2W100Filled'

      short_name='StickyNote2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m560-200 200-200H590q-12.75 0-21.37 8.62Q560-382.75 560-370v170Zm-328 28q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v306q0 12.44-5 23.72T770-379L581-190q-8 8-19.28 13-11.28 5-23.72 5H232Zm108-256h126q5.95 0 9.98-4.04 4.02-4.03 4.02-10 0-5.96-4.02-9.96-4.03-4-9.98-4H340q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-158h280q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H340q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2W100Filled.displayName = 'OnesyIconMaterialStickyNote2W100Filled';

export default IconMaterialStickyNote2W100Filled;
