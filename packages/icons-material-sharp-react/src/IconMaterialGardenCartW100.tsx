import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGardenCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartW100'

      short_name='GardenCart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-399 322-229h-70v-360l-65-149h-71v-28h90l60 138h553L706-405q35 2 58.5 27.6Q788-351.79 788-317q0 36.46-25.36 62.23Q737.27-229 700.95-229q-36.95 0-62.45-25.77T613-317q0-19.26 7-35.63T640-381l-204-18Zm238.23-6L773-600H278l72 165 324.23 30ZM280-258h27l98-144-74-6-51-117v267Zm420 2q26 0 43-17.5t17-42.5q0-26-17-43t-43-17q-25 0-42.5 17T640-316q0 25 17.5 42.5T700-256Zm-26-149-324-30 324 30Z"/>
    </Icon>
  );
});

IconMaterialGardenCartW100.displayName = 'OnesyIconMaterialGardenCartW100';

export default IconMaterialGardenCartW100;
