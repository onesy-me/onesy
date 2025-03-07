import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendTimeExtensionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtensionW100Filled'

      short_name='SendTimeExtension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-171v-54q0-11 6.5-19.5T570-255l128-25-128-25q-11-2-17.5-10.5T546-335v-54q0-17 14-26t29-1l219 109q17 8 17 27t-17 27L589-144q-15 8-29-1t-14-26Zm0 49v-128l152-30-152-30v-128l316 158-316 158Zm-346-50q-12 0-20-8t-8-20v-160q30-13 49-40t19-60q0-33-19-60t-49-40v-160q0-12 8-20t20-8h160q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h160q12 0 20 8t8 20v294l-185-93q-30-15-58.5 2.5T476-465v226q-38-5-69.5 13.5T360-172H200Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtensionW100Filled.displayName = 'OnesyIconMaterialSendTimeExtensionW100Filled';

export default IconMaterialSendTimeExtensionW100Filled;
