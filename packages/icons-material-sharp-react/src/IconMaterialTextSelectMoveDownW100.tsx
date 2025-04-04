import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDownW100'

      short_name='TextSelectMoveDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-760v-28h616v28H172Zm308 444L356-440l20-20 90 89v-283h28v283l90-89 20 20-124 124ZM172-172v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDownW100.displayName = 'OnesyIconMaterialTextSelectMoveDownW100';

export default IconMaterialTextSelectMoveDownW100;
