import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFoundSavingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsFilled'

      short_name='NestFoundSavings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600l-92 92q-12 12-28 12t-28-12l-92-92Zm120-160q86 0 143-60t57-140v-160q0-17-11.5-28.5T640-720H480q-81 0-140.5 57T280-520q0 30 8.5 57t23.5 50l-16 16q-12 12-12 28t12 28q12 12 27.5 11.5T352-341l15-14q24 17 52.5 26t60.5 9Zm50-255q12 12 12 28.5T530-518l-75 75q-12 12-28.5 12T398-443q-11-12-11-28.5t11-27.5l76-76q12-12 28-12t28 12Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavingsFilled.displayName = 'OnesyIconMaterialNestFoundSavingsFilled';

export default IconMaterialNestFoundSavingsFilled;
