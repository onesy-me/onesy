import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideW100'

      short_name='Hide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m192-173-20-20 210-210H255v-28h175v175h-28v-127L192-173Zm338-358v-175h28v127l210-210 20 20-210 210h127v28H530Z"/>
    </Icon>
  );
});

IconMaterialHideW100.displayName = 'OnesyIconMaterialHideW100';

export default IconMaterialHideW100;
