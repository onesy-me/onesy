import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeW100'

      short_name='EMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm380 454q6 0 10-4t4-10q0-6-4-10t-10-4H394v-132h146q6 0 10-4t4-10q0-6-4-10t-10-4H394v-132h186q6 0 10-4t4-10q0-6-4-10t-10-4H396q-13 0-21.5 8.5T366-624v288q0 13 8.5 21.5T396-306h184Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeW100.displayName = 'OnesyIconMaterialEMobiledataBadgeW100';

export default IconMaterialEMobiledataBadgeW100;
