import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPoolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PoolFilled'

      short_name='Pool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-29 0-44 13.5T121-125q-16 4-28.5-7T80-160q0-17 12-29.5t27-20.5q17-9 36-19.5t57-10.5q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q38 0 57 10.5t36 19.5q15 8 27 20.5t12 29.5q0 17-12.5 28t-28.5 7q-32-8-47-21.5T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20Zm0-180q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-29 0-44 13.5T121-305q-16 4-28.5-7T80-340q0-17 12-29.5t27-20.5q17-9 36-19.5t57-10.5q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q38 0 57 10.5t36 19.5q15 8 27 20.5t12 29.5q0 17-12.5 28t-28.5 7q-32-8-47-21.5T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340ZM276-504l133-133-40-40q-25-25-51.5-39.5T257-736q-20-4-34.5-19T208-790q0-21 15-35.5t35-12.5q54 5 93 22.5t77 55.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z"/>
    </Icon>
  );
});

IconMaterialPoolFilled.displayName = 'OnesyIconMaterialPoolFilled';

export default IconMaterialPoolFilled;
