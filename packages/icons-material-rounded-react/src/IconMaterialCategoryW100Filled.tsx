import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCategoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryW100Filled'

      short_name='Category'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-606 94-156q5-8 11.75-11t14.25-3q7.5 0 14.25 3T506-762l94 156q5 7.5 5 15.75T601-575q-4 7-10.6 11t-15.4 4H385q-8.91 0-15.6-4.13-6.69-4.12-10.4-10.87-4-6.68-4-14.84t5-16.16Zm340.24 486Q642-120 601-160.76q-41-40.77-41-99Q560-318 600.76-359q40.77-41 99-41Q758-400 799-359.24q41 40.77 41 99Q840-202 799.24-161q-40.77 41-99 41ZM160-170.03v-180.21q0-12.76 8.63-21.26 8.64-8.5 21.4-8.5h180.21q12.76 0 21.26 8.63 8.5 8.64 8.5 21.4v180.21q0 12.76-8.63 21.26-8.64 8.5-21.4 8.5H189.76q-12.76 0-21.26-8.63-8.5-8.64-8.5-21.4Z"/>
    </Icon>
  );
});

IconMaterialCategoryW100Filled.displayName = 'OnesyIconMaterialCategoryW100Filled';

export default IconMaterialCategoryW100Filled;
