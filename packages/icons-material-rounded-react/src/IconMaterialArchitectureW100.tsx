import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArchitectureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureW100'

      short_name='Architecture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m410-468-97 268q-1 2-5 6l-7 6q-4 3-7.5 1.5T289-191l-3-9q-1-2 1-8l99-272q6 5 12 7.5t12 4.5Zm70-78q-39 0-66.5-27.5T386-640q0-39 25-64t55-28v-94q0-6 4-10t10-4q6 0 10 4t4 10v94q30 3 55 28t25 64q0 39-27.5 66.5T480-546Zm0-28q27 0 46.5-19.5T546-640q0-27-19.5-46.5T480-706q-27 0-46.5 19.5T414-640q0 27 19.5 46.5T480-574Zm70 106q6-2 12-4.5t11-7.5l99 272 1 8-3 9q-1 3-4.5 4.5T658-188l-7-6-5-6-96-268Z"/>
    </Icon>
  );
});

IconMaterialArchitectureW100.displayName = 'OnesyIconMaterialArchitectureW100';

export default IconMaterialArchitectureW100;
