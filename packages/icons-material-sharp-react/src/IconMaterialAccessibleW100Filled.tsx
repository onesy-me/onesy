import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleW100Filled'

      short_name='Accessible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M485-706q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Zm212 602v-202H431v-294q0-23 15.5-38.5T485-654q11 0 24 7t32 29q56 65 96 89t94 33v28q-60-8-104.5-34.5T531-586v240h194v242h-28Zm-292 0q-72 0-124-52t-52-124q0-69 45.5-118T391-455v28q-57 6-95.5 47T257-280q0 62 43 105t105 43q59 0 100-38.5t47-95.5h28q-6 69-56 115.5T405-104Z"/>
    </Icon>
  );
});

IconMaterialAccessibleW100Filled.displayName = 'OnesyIconMaterialAccessibleW100Filled';

export default IconMaterialAccessibleW100Filled;
