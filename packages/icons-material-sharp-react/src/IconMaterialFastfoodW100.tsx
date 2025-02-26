import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastfoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodW100'

      short_name='Fastfood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-368q-25-57-88.26-74.5Q436.48-460 369-460q-67 0-131.5 17.5T150-368h438Zm-473 28q0-81 80-114.5T369-488q94 0 174 33.5T623-340H115Zm0 124v-28h508v28H115ZM703-92v-28h56l56-540H461l-4-28h180v-160h28v160h180L784-92h-81Zm0-28h56-56ZM115-92v-28h508v28H115Zm254-276Z"/>
    </Icon>
  );
});

IconMaterialFastfoodW100.displayName = 'OnesyIconMaterialFastfoodW100';

export default IconMaterialFastfoodW100;
