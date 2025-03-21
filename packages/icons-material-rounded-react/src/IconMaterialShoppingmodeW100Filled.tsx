import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingmodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingmodeW100Filled'

      short_name='Shoppingmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438.25-132q-11.25 0-22.68-4.5T395-150L150-395q-9.39-9.3-13.7-20.53-4.3-11.23-4.3-22.85 0-11.62 4.3-23.05 4.31-11.43 13.7-20.57l328-328q8.3-8.25 19.61-13.13Q508.93-828 521-828h246q26 0 43.5 17.92T828-767v246q0 12.44-4.5 23.72T810-478L481-150q-9 9-20.25 13.5t-22.5 4.5ZM697-663q14.58 0 24.79-9.92Q732-682.83 732-697q0-14.58-10.09-24.79Q711.82-732 697.41-732T673-721.91q-10 10.09-10 24.5t9.92 24.41q9.91 10 24.08 10Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeW100Filled.displayName = 'OnesyIconMaterialShoppingmodeW100Filled';

export default IconMaterialShoppingmodeW100Filled;
