import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolumeMuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteW100'

      short_name='VolumeMute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M462-412H362q-12.75 0-21.37-8.63Q332-429.25 332-442v-76q0-12.75 8.63-21.38Q349.25-548 362-548h100l100-100q7-7 16.5-3.28T588-638v316q0 9.56-9.5 13.28Q569-305 562-312L462-412Zm-102-28h114l86 86v-252l-86 86H360v80Zm100-40Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteW100.displayName = 'OnesyIconMaterialVolumeMuteW100';

export default IconMaterialVolumeMuteW100;
