import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffW100'

      short_name='ExtensionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188q30-13 49-40t19-60q0-33-19-60t-49-40v-198l28 28v154q32 17 50 48.5t18 67.81q0 35.69-18 67.19T200-344v144h143q18-32 49.5-50t67.5-18q36 0 67.5 18t49.5 50h153l28 28H560q-13-30-40-49t-60-19q-33 0-60 19t-40 49H172Zm576-152-28-27.95V-382q30-5 49-26.5t19-51.5q0-30-19-51.5T720-538v-182H538q-5-30-26.5-49T460-788q-30 0-51.5 19T382-720h-30.05L324-748h36q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h188v188q32 14 50 40.5t18 59.5q0 33-18 59.5T748-360v36Zm46 198L126-794l20-20 668 668-20 20ZM536-536Zm-71 71Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffW100.displayName = 'OnesyIconMaterialExtensionOffW100';

export default IconMaterialExtensionOffW100;
