import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalDrinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkW100'

      short_name='LocalDrink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-132q-23 0-40-15t-20-38l-69-606q-2-15 8.5-26t25.5-11h540q15 0 25.5 11t8.5 26l-68 606q-3 23-20 38t-40 15H305Zm-78-460 46 404q2 12 11 20t21 8h351q12 0 21-8t11-20l46-404H227Zm-4-28h515l18-180H203l20 180Zm257 346q-25 0-42.5-17.5T420-334q0-22 12-46t48-73q36 49 48 73t12 46q0 25-17.5 42.5T480-274Zm0 28q37 0 62.5-25.5T568-334q0-36-22-70.5T504-467q-5-6-11-9t-13-3q-7 0-13 3t-11 9q-20 28-42 62.5T392-334q0 37 25.5 62.5T480-246Zm-213 86h427-427Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100.displayName = 'OnesyIconMaterialLocalDrinkW100';

export default IconMaterialLocalDrinkW100;
