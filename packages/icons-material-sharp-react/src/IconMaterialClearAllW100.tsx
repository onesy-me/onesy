import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClearAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllW100'

      short_name='ClearAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-338v-28h469v28H172Zm73-128v-28h469v28H245Zm74-128v-28h469v28H319Z"/>
    </Icon>
  );
});

IconMaterialClearAllW100.displayName = 'OnesyIconMaterialClearAllW100';

export default IconMaterialClearAllW100;
