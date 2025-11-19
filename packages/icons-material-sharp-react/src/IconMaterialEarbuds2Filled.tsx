import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbuds2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Earbuds2Filled'

      short_name='Earbuds2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-40v-440h280v240h-80v200H640ZM500-200q-68 0-116-46t-48-114q0-67 48-113.5T500-520h80v320h-80ZM120-440v-200H40v-240h280v440H120Zm260-160v-320h80q67 0 115.5 46.5T624-760q0 68-48.5 114T460-600h-80Z"/>
    </Icon>
  );
});

IconMaterialEarbuds2Filled.displayName = 'OnesyIconMaterialEarbuds2Filled';

export default IconMaterialEarbuds2Filled;
