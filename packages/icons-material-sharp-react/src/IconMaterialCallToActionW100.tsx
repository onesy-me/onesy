import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallToActionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionW100'

      short_name='CallToAction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-306h428v-68H266v68Zm-134 94v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCallToActionW100.displayName = 'OnesyIconMaterialCallToActionW100';

export default IconMaterialCallToActionW100;
