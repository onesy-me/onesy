import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterBAndWW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWW100'

      short_name='FilterBAndW'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-172H172v-616h616v616Zm-587-28h279.5v-320L760-199v-561H480.5v240L201-200Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndWW100.displayName = 'OnesyIconMaterialFilterBAndWW100';

export default IconMaterialFilterBAndWW100;
