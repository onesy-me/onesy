import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCorporateFareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareW100'

      short_name='CorporateFare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-164v-668h348v160h376v508H118Zm28-28h292v-132H146v132Zm0-160h292v-132H146v132Zm0-160h292v-132H146v132Zm0-160h292v-132H146v132Zm320 480h348v-452H466v452Zm100-292v-28h128v28H566Zm0 160v-28h128v28H566Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareW100.displayName = 'OnesyIconMaterialCorporateFareW100';

export default IconMaterialCorporateFareW100;
