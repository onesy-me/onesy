import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachMoneyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachMoneyW100'

      short_name='AttachMoney'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-146q-6 0-10-4t-4-10v-66q-48-5-82.5-29T328-321q-2-5 .5-11t7.5-8q5-2 11 0t8 7q18 38 47.5 58.5T481-254q47 0 87.5-24t40.5-78q0-45-29.5-72.5T475-480q-75-24-106.5-54T337-614q0-53 43-85.5t85-34.5v-66q0-6 4-10t10-4q6 0 10 4t4 10v66q35 3 62.5 16.5T603-677q3 5 2 10t-6 8q-5 3-10.5 2t-9.5-6q-16-20-39.5-32.5T481-708q-47 0-81.5 26T365-614q0 38 25 62t105 50q74 24 108 58t34 88q0 57-42.5 92T493-226v66q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialAttachMoneyW100.displayName = 'OnesyIconMaterialAttachMoneyW100';

export default IconMaterialAttachMoneyW100;
