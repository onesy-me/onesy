import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownW100'

      short_name='VolumeDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-412H282q-13 0-21.5-8.5T252-442v-76q0-13 8.5-21.5T282-548h100l100-100q7-7 16.5-3.5T508-638v316q0 10-9.5 13.5T482-312L382-412Zm306-68q0 30-10 57t-29 48q-6 5-13.5 2t-7.5-11v-194q0-8 7.5-11t13.5 2q19 21 29 49t10 58ZM480-606l-86 86H280v80h114l86 86v-252ZM380-480Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownW100.displayName = 'OnesyIconMaterialVolumeDownW100';

export default IconMaterialVolumeDownW100;
