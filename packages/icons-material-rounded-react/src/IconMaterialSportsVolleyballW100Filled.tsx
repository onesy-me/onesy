import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsVolleyballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsVolleyballW100Filled'

      short_name='SportsVolleyball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M823-545 494-740v-88q123 5 213.5 84T823-545ZM277-378v-384q40-30 84.5-45.5T466-828v340L277-378Zm-106 60q-20-37-30-78t-10-84q0-75 29.5-141.5T249-740v378l-78 44Zm165 155q-48-23-86-55t-65-76l295-170 190 110-334 191Zm144 31q-29 0-56.5-3.5T370-150l328-188 77 44q-49 76-126.5 119T480-132Zm308-187L494-488v-220l333 197q3 50-6 99t-33 93Z"/>
    </Icon>
  );
});

IconMaterialSportsVolleyballW100Filled.displayName = 'OnesyIconMaterialSportsVolleyballW100Filled';

export default IconMaterialSportsVolleyballW100Filled;
