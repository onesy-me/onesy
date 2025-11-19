import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWandShineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WandShineW100Filled'

      short_name='WandShine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m351-668-83-83 20-20 83 83-20 20Zm155-84v-118h28v118h-28Zm245 484-83-83 20-20 83 83-20 20Zm-43-420-20-20 83-83 20 20-83 83Zm44 182v-28h118v28H752ZM228-133l-96-96 355-355q20-20 48-20t48 20q20 20 20 48t-20 48L228-133Zm251-290 84-85q12-12 12-28t-12-28q-11-11-28-11t-28 11l-85 85 57 56Z"/>
    </Icon>
  );
});

IconMaterialWandShineW100Filled.displayName = 'OnesyIconMaterialWandShineW100Filled';

export default IconMaterialWandShineW100Filled;
