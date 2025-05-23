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
      <path d="M546-171v-54q0-10.77 6.4-19.23T570-255l128-25-128-25q-11.2-2.31-17.6-10.77-6.4-8.46-6.4-19.23v-54q0-17.5 14-26.25t29-.75l219 109q17 8.3 17 27.15Q825-261 808-253L589-144q-15 8-29-.75T546-171Zm-346-1q-11.55 0-19.77-8.23Q172-188.45 172-200v-160q30-13 49-40t19-60q0-33-19-60t-49-40v-160q0-11.55 8.23-19.78Q188.45-748 200-748h160q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h160q11.55 0 19.78 8.22Q748-731.55 748-720v294l-28-14v-280H538q-6-35-29-51.5T460-788q-26 0-49 16.5T382-720H200v144q32 17 50 48.5t18 67.81q0 35.69-18 67.19T200-344v144h146q14-34 52-53.5t78-13.5v28q-38-5-69.5 13.5T360-172H200Zm260-322Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtensionW100.displayName = 'OnesyIconMaterialSendTimeExtensionW100';

export default IconMaterialSendTimeExtensionW100;
