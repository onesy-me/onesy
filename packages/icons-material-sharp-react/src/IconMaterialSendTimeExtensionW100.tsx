import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendTimeExtensionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtensionW100'

      short_name='SendTimeExtension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-122v-128l152-30-152-30v-128l316 158-316 158Zm-374-50v-188q30-13 49-40t19-60q0-33-19-60t-49-40v-188h188q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h188v322l-28-14v-280H538q-6-35-29-51.5T460-788q-26 0-49 16.5T382-720H200v144q32 17 50 48.5t18 67.5q0 36-18 67.5T200-344v144h146q14-34 52-53.5t78-13.5v28q-38-5-69.5 13.5T360-172H172Zm288-322Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtensionW100.displayName = 'OnesyIconMaterialSendTimeExtensionW100';

export default IconMaterialSendTimeExtensionW100;
