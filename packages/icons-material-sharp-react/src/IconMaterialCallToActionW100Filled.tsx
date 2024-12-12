import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallToActionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionW100Filled'

      short_name='CallToAction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-306h428v-68H266v68Zm-134 94v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialCallToActionW100Filled.displayName = 'OnesyIconMaterialCallToActionW100Filled';

export default IconMaterialCallToActionW100Filled;
