import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed175Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed175Filled'

      short_name='Speed175'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-280q-17 0-28.5-11.5T640-320q0-17 11.5-28.5T680-360h120v-80H680q-17 0-28.5-11.5T640-480v-160q0-17 11.5-28.5T680-680h160q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H720v80h80q33 0 56.5 23.5T880-440v80q0 33-23.5 56.5T800-280H680ZM520-600H400q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h130q29 0 49.5 21.5T600-608l-2 18-71 281q-3 13-13 21t-24 8q-19 0-31-15t-7-33l68-272ZM320-280q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280ZM160-600h-40q-17 0-28.5-11.5T80-640q0-17 11.5-28.5T120-680h80q17 0 28.5 11.5T240-640v320q0 17-11.5 28.5T200-280q-17 0-28.5-11.5T160-320v-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed175Filled.displayName = 'OnesyIconMaterialSpeed175Filled';

export default IconMaterialSpeed175Filled;
