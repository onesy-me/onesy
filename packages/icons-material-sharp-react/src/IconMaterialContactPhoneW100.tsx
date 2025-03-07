import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPhoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneW100'

      short_name='ContactPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m724-270 60-60-46-62h-70q-8-24-11-44.5t-3-43.5q0-23 3-42.5t11-45.5h70l46-62-60-60q-47 39-72.5 93.5T626-480q0 62 25.5 116.5T724-270ZM52-192v-576h856v576H52Zm526-28h302v-520H80v520h62q42-48 98-78t120-30q64 0 120 30t98 78ZM359.88-388q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM182-220h356q-35-38-81.18-59-46.17-21-96.82-21-51 0-97 21t-81 59Zm178-196q-27 0-46.5-19.5T294-482q0-27 19.5-46.5T360-548q27 0 46.5 19.5T426-482q0 27-19.5 46.5T360-416Zm120-64Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneW100.displayName = 'OnesyIconMaterialContactPhoneW100';

export default IconMaterialContactPhoneW100;
