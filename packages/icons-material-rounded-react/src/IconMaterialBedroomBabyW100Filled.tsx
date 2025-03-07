import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomBabyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomBabyW100Filled'

      short_name='BedroomBaby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-256q68 0 130.5-23T725-345q5-4 6.5-10t-3.5-11q-5-5-10.5-4.5T707-366q-9 8-18.5 14.5T668-340l-46-82v-94h36q6 0 10-4t4-10q0-6-4-10t-10-4H446l-61-105q-4-7-11-11t-15-4h-64q-5 0-5 5t5 6l13 1-52 61q-3 4-3 9t3 9l2 3q3 4 8.5 4.5t9.5-2.5l64-42v186l-48 84q-11-6-21-12.5T252-367q-5-4-10.5-3.5T232-366q-5 5-3.5 11t6.5 10q52 43 114.5 66T480-256Zm0-28q-38 0-79-8.5T316-324l48-86q32 12 60 18t56 6q28 0 56-6t60-18l48 86q-44 22-85 31t-79 9ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialBedroomBabyW100Filled.displayName = 'OnesyIconMaterialBedroomBabyW100Filled';

export default IconMaterialBedroomBabyW100Filled;
