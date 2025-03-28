import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDigitalWellbeingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalWellbeingW100'

      short_name='DigitalWellbeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-606q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0-28q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm-21 443L268-382q-14-14-21-32.5t-7-39.85q0-42 28.93-70.82Q297.86-554 340-554q20.45 0 37.72 7.5Q395-539 410-524l70 70 70-70q14-14 32-22t38.43-8Q662-554 691-525.17q29 28.82 29 70.82 0 21.35-7 39.85T692-382L501-191q-5 5-10 7t-11 2q-6 0-11-2t-10-7Zm21-19 192-192q11-11 15.5-24t4.5-27.5q0-29-21-50.75T619.89-526q-13.89 0-25.43 4.37Q582.93-517.25 572-506l-92 92-90-90q-7.68-8.25-19.84-15.13Q358-526 340.44-526 310-526 289-504.5q-21 21.5-21 50.17 0 14.33 4.5 27.83Q277-413 288-402l192 192Zm0-496Zm0 338Z"/>
    </Icon>
  );
});

IconMaterialDigitalWellbeingW100.displayName = 'OnesyIconMaterialDigitalWellbeingW100';

export default IconMaterialDigitalWellbeingW100;
