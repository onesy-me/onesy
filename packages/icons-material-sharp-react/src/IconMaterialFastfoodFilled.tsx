import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastfoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodFilled'

      short_name='Fastfood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-360q0-109 91-174.5T340-600q118 0 209 65.5T640-360H40Zm0 160v-80h600v80H40Zm0 160v-80h600v80H40Zm680 0v-320q0-114-78-197T451-668l-11-92h200v-160h80v160h200L848-40H720Z"/>
    </Icon>
  );
});

IconMaterialFastfoodFilled.displayName = 'OnesyIconMaterialFastfoodFilled';

export default IconMaterialFastfoodFilled;
