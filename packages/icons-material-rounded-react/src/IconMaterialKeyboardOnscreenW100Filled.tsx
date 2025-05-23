import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOnscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOnscreenW100Filled'

      short_name='KeyboardOnscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-292h240q11 0 19.5-8t8.5-20q0-11-8.5-19.5T600-348H360q-11 0-19.5 8t-8.5 20q0 11 8.5 19.5T360-292Zm-168 80q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-362h640v-114q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v114Zm80 162q11 0 19.5-8.5T268-440q0-11-8.5-19.5T240-468q-11 0-19.5 8.5T212-440q0 11 8.5 19.5T240-412Zm120 0q11 0 19.5-8.5T388-440q0-11-8.5-19.5T360-468q-11 0-19.5 8.5T332-440q0 11 8.5 19.5T360-412Zm120 0q11 0 19.5-8.5T508-440q0-11-8.5-19.5T480-468q-11 0-19.5 8.5T452-440q0 11 8.5 19.5T480-412Zm120 0q11 0 19.5-8.5T628-440q0-11-8.5-19.5T600-468q-11 0-19.5 8.5T572-440q0 11 8.5 19.5T600-412Zm120 0q11 0 19.5-8.5T748-440q0-11-8.5-19.5T720-468q-11 0-19.5 8.5T692-440q0 11 8.5 19.5T720-412Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOnscreenW100Filled.displayName = 'OnesyIconMaterialKeyboardOnscreenW100Filled';

export default IconMaterialKeyboardOnscreenW100Filled;
