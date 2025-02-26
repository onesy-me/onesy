import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpW100Filled'

      short_name='KeyboardArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-564 306-390q-4 4-9.5 4.5T286-390q-5-5-5-10t5-10l173-173q9-9 21-9t21 9l173 173q4 4 4.5 9.5T674-390q-5 5-10 5t-10-5L480-564Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpW100Filled.displayName = 'OnesyIconMaterialKeyboardArrowUpW100Filled';

export default IconMaterialKeyboardArrowUpW100Filled;
