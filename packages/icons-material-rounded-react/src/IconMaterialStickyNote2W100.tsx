import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNote2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2W100'

      short_name='StickyNote2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-200h328v-170q0-12.75 8.63-21.38Q577.25-400 590-400h170v-328q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm0 28q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v306q0 12.44-5 23.72T770-379L581-190q-8 8-19.28 13-11.28 5-23.72 5H232Zm234-256H340q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h126q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4Zm154-158H340q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2W100.displayName = 'OnesyIconMaterialStickyNote2W100';

export default IconMaterialStickyNote2W100;
