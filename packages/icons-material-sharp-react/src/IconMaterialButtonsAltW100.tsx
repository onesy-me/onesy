import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialButtonsAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ButtonsAltW100'

      short_name='ButtonsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-376h696v376H132Zm28-28h640v-320H160v320Zm146-66h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Zm-146 66v-320 320Z"/>
    </Icon>
  );
});

IconMaterialButtonsAltW100.displayName = 'OnesyIconMaterialButtonsAltW100';

export default IconMaterialButtonsAltW100;
