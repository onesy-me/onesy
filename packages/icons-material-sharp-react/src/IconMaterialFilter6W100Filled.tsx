import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6W100Filled'

      short_name='Filter6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M468-574v-132h120v-28H440v348h188v-188H468Zm0 28h132v132H468v-132ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialFilter6W100Filled.displayName = 'OnesyIconMaterialFilter6W100Filled';

export default IconMaterialFilter6W100Filled;
