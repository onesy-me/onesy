import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAcUnitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcUnitW100'

      short_name='AcUnit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-106v-202L310-154l-20-20 176-176v-116H350L174-290l-20-20 154-156H106v-28h202L154-650l20-20 176 176h116v-116L290-786l20-20 156 154v-202h28v202l156-154 20 20-176 176v116h116l176-176 20 20-154 156h202v28H652l154 156-20 20-176-176H494v116l176 176-20 20-156-154v202h-28Z"/>
    </Icon>
  );
});

IconMaterialAcUnitW100.displayName = 'OnesyIconMaterialAcUnitW100';

export default IconMaterialAcUnitW100;
