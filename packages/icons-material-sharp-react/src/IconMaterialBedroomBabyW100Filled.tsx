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
      <path d="M480-256q72 0 138.5-26.5T738-356l-20-20q-9 9-22 18.5T668-340l-46-82v-94h50v-28H446l-70-120h-84l16 12-60 70 18 20 74-48v186l-48 84q-18-11-29.5-19T242-376l-20 20q53 47 119.5 73.5T480-256Zm0-28q-38 0-79-8.5T316-324l48-86q32 12 60 18t56 6q28 0 56-6t60-18l48 86q-44 22-85 31t-79 9ZM132-132v-696h696v696H132Z"/>
    </Icon>
  );
});

IconMaterialBedroomBabyW100Filled.displayName = 'OnesyIconMaterialBedroomBabyW100Filled';

export default IconMaterialBedroomBabyW100Filled;
