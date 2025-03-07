import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTakeoutDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDining'

      short_name='TakeoutDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-240h338l19-280H292l20 280Zm-26-360h389l3-50-112-110H394L282-650l4 50Zm-76 68L108-634q-11-11-11-28t11-28q11-11 28-11t28 11l38 38v-8q2-13 7.5-24t14.5-20l113-113q11-11 25.5-17t30.5-6h174q16 0 30.5 6t25.5 17l113 113q9 9 14.5 20.5T758-659v7l38-38q11-11 28-11t28 11q11 11 11 28t-11 28L750-532H210Zm438 372H312q-32 0-55-21t-25-53l-22-298h540l-22 298q-2 32-25 53t-55 21ZM480-600Zm1 80Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDining.displayName = 'OnesyIconMaterialTakeoutDining';

export default IconMaterialTakeoutDining;
