import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabMoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabMoveW100'

      short_name='TabMove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-150h28v122h560v-472H200v122h-28v-238h616v616H172Zm268-121-19-19 108-110H172v-28h357L421-560l19-19 143 143-143 143Z"/>
    </Icon>
  );
});

IconMaterialTabMoveW100.displayName = 'OnesyIconMaterialTabMoveW100';

export default IconMaterialTabMoveW100;
