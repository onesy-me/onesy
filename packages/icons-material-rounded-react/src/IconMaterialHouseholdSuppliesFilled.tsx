import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseholdSuppliesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseholdSuppliesFilled'

      short_name='HouseholdSupplies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-33 0-56.5-23.5T240-160v-172q0-74 21-142.5T327-611q-38-9-62.5-41T240-724v-42q0-48 41.5-80.5T368-874l356 35q17 2 26.5 13.5T760-799v119q0 15-10.5 26.5T724-640l-36 4q11 37 26 68t36 53q11 12 14.5 28t-4.5 30q-8 14-23.5 19t-27.5-6q-38-33-60.5-80.5T612-629l-44 4q8 50 30.5 101t45.5 92q18 32 27 67t9 71v134q0 33-23.5 56.5T600-80H320Zm0-676v32q0 18 13 29t31 9l316-30v-48l-316-30q-18-2-31 9t-13 29Z"/>
    </Icon>
  );
});

IconMaterialHouseholdSuppliesFilled.displayName = 'OnesyIconMaterialHouseholdSuppliesFilled';

export default IconMaterialHouseholdSuppliesFilled;
