import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPetSuppliesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PetSuppliesFilled'

      short_name='PetSupplies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Z"/>
    </Icon>
  );
});

IconMaterialPetSuppliesFilled.displayName = 'OnesyIconMaterialPetSuppliesFilled';

export default IconMaterialPetSuppliesFilled;
