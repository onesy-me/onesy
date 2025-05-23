import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEuro = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Euro'

      short_name='Euro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120q-118 0-210-67T260-360H160q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h82q-3-24-2.5-44.5T242-520h-82q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h100q38-106 130-173t210-67q58 0 110.5 17t97.5 49q14 10 15 26.5T812-720q-12 12-29 12.5t-31-8.5q-33-21-71.5-32.5T600-760q-85 0-152 44.5T347-600h213q17 0 28.5 11.5T600-560q0 17-11.5 28.5T560-520H323q-4 27-3 47.5t3 32.5h237q17 0 28.5 11.5T600-400q0 17-11.5 28.5T560-360H347q34 71 101 115.5T600-200q42 0 80.5-12t71.5-33q14-9 31-8t29 13q12 11 11 27.5T808-186q-45 32-97.5 49T600-120Z"/>
    </Icon>
  );
});

IconMaterialEuro.displayName = 'OnesyIconMaterialEuro';

export default IconMaterialEuro;
