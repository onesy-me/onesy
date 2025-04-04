import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelfImprovementW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfImprovementW100Filled'

      short_name='SelfImprovement'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-196q-20 0-33-11t-13-31q0-14 8-23.5t20-14.5l172-68v-168q-77 91-133 126t-139 46v-29q59-5 112-34t98-81l54-62q8-9 19-14.5t23-5.5h40q12 0 23 5.5t19 14.5l54 62q45 52 98 81t112 34v29q-83-11-139-46T534-512v168l172 68q12 5 20 14.5t8 23.5q0 20-13 31t-33 11H400v-2q0-23 12.5-35.5T448-246h132q9 0 14.5-5.5T600-266q0-9-5.5-14.5T580-286H448q-39 0-63.5 24.5T360-198v2h-88Zm208-430q-27 0-45.5-18.5T416-690q0-27 18.5-45.5T480-754q27 0 45.5 18.5T544-690q0 27-18.5 45.5T480-626Z"/>
    </Icon>
  );
});

IconMaterialSelfImprovementW100Filled.displayName = 'OnesyIconMaterialSelfImprovementW100Filled';

export default IconMaterialSelfImprovementW100Filled;
