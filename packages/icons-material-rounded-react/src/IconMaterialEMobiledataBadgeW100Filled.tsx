import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataBadgeW100Filled'

      short_name='EMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm348-134q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H394v-132h146q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H394v-132h186q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H396.03q-13.03 0-21.53 8.62-8.5 8.63-8.5 21.38v288q0 12.75 8.63 21.37Q383.25-306 396-306h184Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterialEMobiledataBadgeW100Filled';

export default IconMaterialEMobiledataBadgeW100Filled;
