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
      <path d="M200-172q-11 0-19.5-8.5T172-200v-160q30-13 49-40t19-60q0-33-19-60t-49-40v-170q0-5.96 2.09-11.05 2.08-5.09 5.91-8.95l20 20v154q32 17 50 48.5t18 67.81q0 35.69-18 67.19T200-344v144h143q18-32 49.5-50t67.5-18q36 0 67.5 18t49.5 50h153l20 20q-3.86 3.83-8.95 5.91Q735.96-172 730-172H560q-13-30-40-49t-60-19q-33 0-60 19t-40 49H200Zm548-152-28-27.95V-382q30-5 49-26.5t19-51.5q0-30-19-51.5T720-538v-182H538q-5-30-26.5-49T460-788q-30 0-51.5 19T382-720h-30.05L324-748h36q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h160q11.55 0 19.78 8.22Q748-731.55 748-720v160q32 14 50 40.5t18 59.5q0 33-18 59.5T748-360v36Zm36 188L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5ZM536-536Zm-71 71Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffW100.displayName = 'OnesyIconMaterialExtensionOffW100';

export default IconMaterialExtensionOffW100;
