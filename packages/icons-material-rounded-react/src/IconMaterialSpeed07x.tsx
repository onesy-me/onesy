import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed07x = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed07x'

      short_name='Speed07x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-413-70 116q-5 8-12.5 12.5T581-280q-20 0-30.5-17.5t.5-34.5l89-148-89-148q-11-17-.5-34.5T581-680q9 0 16.5 4.5T610-663l70 116 70-116q5-8 12.5-12.5T779-680q20 0 30.5 17.5T809-628l-89 148 89 148q11 17 .5 34.5T779-280q-9 0-16.5-4.5T750-297l-70-116ZM370-280q-19 0-31-15t-7-33l68-272H280q-17 0-28.5-11.5T240-640q0-17 11.5-28.5T280-680h130q29 0 49.5 21.5T480-608l-2 18-71 281q-3 13-13 21t-24 8Zm-170 0q-17 0-28.5-11.5T160-320q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320q0 17-11.5 28.5T200-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed07x.displayName = 'OnesyIconMaterialSpeed07x';

export default IconMaterialSpeed07x;
