import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter8W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8W100Filled'

      short_name='Filter8'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Zm296-376-14 14v160h188v-160l-14-14 14-14v-160H440v160l14 14Zm146-146v132H468v-132h132Zm0 160v132H468v-132h132Z"/>
    </Icon>
  );
});

IconMaterialFilter8W100Filled.displayName = 'OnesyIconMaterialFilter8W100Filled';

export default IconMaterialFilter8W100Filled;
