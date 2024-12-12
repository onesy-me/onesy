import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastfood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fastfood'

      short_name='Fastfood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M533-440q-32-45-84.5-62.5T340-520q-56 0-108.5 17.5T147-440h386ZM40-360q0-109 91-174.5T340-600q118 0 209 65.5T640-360H40Zm0 160v-80h600v80H40ZM720-40v-80h56l56-560H450l-10-80h200v-160h80v160h200L848-40H720Zm0-80h56-56ZM40-40v-80h600v80H40Zm300-400Z"/>
    </Icon>
  );
});

IconMaterialFastfood.displayName = 'OnesyIconMaterialFastfood';

export default IconMaterialFastfood;
