import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalDrinkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkFilled'

      short_name='LocalDrink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m208-80-88-800h720L752-80H208Zm18-560h508l16-160H210l16 160Zm254 440q48 0 81-33t33-81q0-41-26.5-89T480-520q-61 69-87.5 117T366-314q0 48 33 81t81 33Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkFilled.displayName = 'OnesyIconMaterialLocalDrinkFilled';

export default IconMaterialLocalDrinkFilled;
