import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCalculateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateFilled'

      short_name='Calculate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320v50q0 13 8.5 21.5T350-240q13 0 21.5-8.5T380-270v-50h50q13 0 21.5-8.5T460-350q0-13-8.5-21.5T430-380h-50v-50q0-13-8.5-21.5T350-460q-13 0-21.5 8.5T320-430v50h-50q-13 0-21.5 8.5T240-350q0 13 8.5 21.5T270-320h50Zm230 50h140q13 0 21.5-8.5T720-300q0-13-8.5-21.5T690-330H550q-13 0-21.5 8.5T520-300q0 13 8.5 21.5T550-270Zm0-100h140q13 0 21.5-8.5T720-400q0-13-8.5-21.5T690-430H550q-13 0-21.5 8.5T520-400q0 13 8.5 21.5T550-370Zm70-208 35 35q9 9 21 9t21-9q8-8 8.5-20.5T698-585l-36-37 35-35q9-9 9-21t-9-21q-9-9-21-9t-21 9l-35 35-35-35q-9-9-21-9t-21 9q-9 9-9 21t9 21l35 35-36 37q-8 9-8 21t9 21q9 9 21 9t21-9l35-35Zm-340-14h140q13 0 21.5-8.5T450-622q0-13-8.5-21.5T420-652H280q-13 0-21.5 8.5T250-622q0 13 8.5 21.5T280-592Zm-80 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialCalculateFilled.displayName = 'OnesyIconMaterialCalculateFilled';

export default IconMaterialCalculateFilled;
