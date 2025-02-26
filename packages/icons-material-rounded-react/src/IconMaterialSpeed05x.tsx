import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed05x = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed05x'

      short_name='Speed05x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-413-70 116q-5 8-12.5 12.5T581-280q-20 0-30.5-17.5t.5-34.5l89-148-89-148q-11-17-.5-34.5T581-680q9 0 16.5 4.5T610-663l70 116 70-116q5-8 12.5-12.5T779-680q20 0 30.5 17.5T809-628l-89 148 89 148q11 17 .5 34.5T779-280q-9 0-16.5-4.5T750-297l-70-116ZM400-280H280q-17 0-28.5-11.5T240-320q0-17 11.5-28.5T280-360h120v-80H280q-17 0-28.5-11.5T240-480v-160q0-17 11.5-28.5T280-680h160q17 0 28.5 11.5T480-640q0 17-11.5 28.5T440-600H320v80h80q33 0 56.5 23.5T480-440v80q0 33-23.5 56.5T400-280Zm-240 0q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed05x.displayName = 'OnesyIconMaterialSpeed05x';

export default IconMaterialSpeed05x;
