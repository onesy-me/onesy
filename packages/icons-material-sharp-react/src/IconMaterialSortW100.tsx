import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSortW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortW100'

      short_name='Sort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-292v-28h175v28H172Zm0-174v-28h395v28H172Zm0-174v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialSortW100.displayName = 'OnesyIconMaterialSortW100';

export default IconMaterialSortW100;
