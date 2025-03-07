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
      <path d="m251-132-79-696h616l-78 696H251Zm-24-460 49 432h409l49-432H227Zm-4-28h515l18-180H203l20 180Zm257 346q-25 0-42.5-17.5T420-334q0-22 12-46t48-73q36 49 48 73t12 46q0 25-17.5 42.5T480-274Zm0 28q37 0 62.5-25.5T568-334q0-29-17-61.5T480-500q-54 72-71 104.5T392-334q0 37 25.5 62.5T480-246Zm-204 86h409-409Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100.displayName = 'OnesyIconMaterialLocalDrinkW100';

export default IconMaterialLocalDrinkW100;
