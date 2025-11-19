import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChefHatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChefHatFilled'

      short_name='ChefHat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-400h80v-200h-80v200Zm-160 80v-140q-46-23-73-66.5T100-621q0-75 51.5-127T278-800q12 0 24.5 2t24.5 5q25-41 65-64t88-23q48 0 88 23t65 64q12-3 24-5t25-2q75 0 126.5 52T860-621q0 51-27 94.5T760-460v140H200Zm320-80h80v-200h-80v200ZM200-80v-160h560v160H200Z"/>
    </Icon>
  );
});

IconMaterialChefHatFilled.displayName = 'OnesyIconMaterialChefHatFilled';

export default IconMaterialChefHatFilled;
