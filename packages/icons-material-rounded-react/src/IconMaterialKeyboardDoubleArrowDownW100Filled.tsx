import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowDownW100Filled'

      short_name='KeyboardDoubleArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-278 174-174q4-4 9.5-4.5T674-452q5 5 5 10t-5 10L501-259q-5 5-10 7t-11 2q-6 0-11-2t-10-7L286-432q-4-4-4.5-9.5T286-452q5-5 10-5t10 5l174 174Zm0-238 174-174q4-4 9.5-4.5T674-690q5 5 5 10t-5 10L501-497q-5 5-10 7t-11 2q-6 0-11-2t-10-7L286-670q-4-4-4.5-9.5T286-690q5-5 10-5t10 5l174 174Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDownW100Filled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowDownW100Filled';

export default IconMaterialKeyboardDoubleArrowDownW100Filled;
