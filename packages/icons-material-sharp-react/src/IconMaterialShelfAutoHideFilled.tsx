import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfAutoHideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfAutoHideFilled'

      short_name='ShelfAutoHide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-160 0q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm320 0q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360q-17 0-28.5 11.5T600-320q0 17 11.5 28.5T640-280ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialShelfAutoHideFilled.displayName = 'OnesyIconMaterialShelfAutoHideFilled';

export default IconMaterialShelfAutoHideFilled;
