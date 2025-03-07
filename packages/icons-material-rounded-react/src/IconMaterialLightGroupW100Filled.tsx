import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupW100Filled'

      short_name='LightGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H160Zm520.36-38q-23.36 0-39.86-17T624-227H524q-12 0-21-7.19T494-252q2-62 53.5-103T666-401v-362q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v362q68 5 119.5 46T867-252q0 10.62-9 17.81-9 7.19-21 7.19H737q0 23-16.28 40-16.29 17-40.36 17Zm-400.4-56q-5.96 0-9.96-4.02-4-4.03-4-9.98v-280H135q-15.35 0-24.17-12-8.83-12-4.83-26l52-196q2-10 10.1-16t18.9-6h187.46q10.54 0 18.54 6t10 16l52 196q4 14-4.83 26-8.82 12-24.17 12H294v280q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialLightGroupW100Filled.displayName = 'OnesyIconMaterialLightGroupW100Filled';

export default IconMaterialLightGroupW100Filled;
