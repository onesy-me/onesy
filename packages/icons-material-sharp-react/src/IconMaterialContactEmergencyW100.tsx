import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactEmergencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyW100'

      short_name='ContactEmergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-192v-576h856v576H52Zm526-28h302v-520H80v520h62q42-48 98-78t120-30q64 0 120 30t98 78ZM359.88-388q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5ZM182-220h356q-35-38-81.18-59-46.17-21-96.82-21-51 0-97 21t-81 59Zm178-196q-27 0-46.5-19.5T294-482q0-27 19.5-46.5T360-548q27 0 46.5 19.5T426-482q0 27-19.5 46.5T360-416Zm120-64Zm226-16h28v-80l69 40 14-24-69-40 69-40-14-24-69 40v-80h-28v80l-69-40-14 24 69 40-69 40 14 24 69-40v80Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyW100.displayName = 'OnesyIconMaterialContactEmergencyW100';

export default IconMaterialContactEmergencyW100;
