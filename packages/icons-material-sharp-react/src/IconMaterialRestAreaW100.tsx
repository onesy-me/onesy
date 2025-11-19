import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRestAreaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestAreaW100'

      short_name='RestArea'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-510 163-137 119 110 148-148 210 175v-290H160v290Zm83 378v-80h-74v-28h176v28h-74v80h-28Zm223 0v-208H317v-28h325v28H494v208h-28Zm223 0v-80h-75v-28h177v28h-74v80h-28ZM132-340v-488h696v488h-86v-28h58v-105L592-647 443-498 322-610 160-474v106h57v28h-85Zm348-460Z"/>
    </Icon>
  );
});

IconMaterialRestAreaW100.displayName = 'OnesyIconMaterialRestAreaW100';

export default IconMaterialRestAreaW100;
