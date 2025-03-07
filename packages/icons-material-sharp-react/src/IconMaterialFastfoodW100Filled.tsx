import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastfoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodW100Filled'

      short_name='Fastfood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M115-340q0-81 80-114.5T369-488q94 0 174 33.5T623-340H115Zm0 124v-28h508v28H115Zm0 124v-28h508v28H115Zm588 0v-247.74Q703-428 635-485q-68-57-159-74l-19-129h180v-160h28v160h180L783-92h-80Z"/>
    </Icon>
  );
});

IconMaterialFastfoodW100Filled.displayName = 'OnesyIconMaterialFastfoodW100Filled';

export default IconMaterialFastfoodW100Filled;
