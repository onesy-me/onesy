import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneW100Filled'

      short_name='ContactPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-192q-26 0-43-17t-17-43v-456q0-26 17-43t43-17h736q26 0 43 17t17 43v456q0 26-17 43t-43 17H112Zm248-196q39 0 66.5-27.5T454-482q0-39-27.5-66.5T360-576q-39 0-66.5 27.5T266-482q0 39 27.5 66.5T360-388ZM142-220h436q-42-48-98-78t-120-30q-64 0-120 30t-98 78Zm512-260q0-23 3-42.5t11-45.5h55q7 0 13-3t11-9l22-29q7-9 6-20t-9-19l-21-21q-9-9-21-9t-21 9q-38 38-57.5 86.5T626-480q0 54 19.5 102.5T703-291q9 9 21 9t21-9l21-21q8-8 9-19t-6-20l-22-29q-5-6-11-9t-13-3h-55q-8-24-11-44.5t-3-43.5Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneW100Filled.displayName = 'OnesyIconMaterialContactPhoneW100Filled';

export default IconMaterialContactPhoneW100Filled;
