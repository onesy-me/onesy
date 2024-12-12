import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupW100Filled'

      short_name='TabGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M158-184v-504h28v476h476v28H158Zm108-108v-536h536v536H266Zm268-398h240v-110H534v110Z"/>
    </Icon>
  );
});

IconMaterialTabGroupW100Filled.displayName = 'OnesyIconMaterialTabGroupW100Filled';

export default IconMaterialTabGroupW100Filled;
