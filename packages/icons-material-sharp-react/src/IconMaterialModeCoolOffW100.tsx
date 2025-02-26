import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCoolOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolOffW100'

      short_name='ModeCoolOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M754-49 494-309v203h-28v-202L310-154l-20-20 170-170-116-116-170 170-20-20 154-156H106v-28h203L86-717l20-20L774-69l-20 20Zm32-241L610-466h-88l-56-56v-88L290-786l20-20 156 154v-202h28v202l156-154 20 20-176 176v116h116l176-176 20 20-154 156h202v28H652l154 156-20 20Z"/>
    </Icon>
  );
});

IconMaterialModeCoolOffW100.displayName = 'OnesyIconMaterialModeCoolOffW100';

export default IconMaterialModeCoolOffW100;
