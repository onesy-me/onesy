import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleW100'

      short_name='Accessible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M405-104q-72 0-124-52t-52-124q0-63 37-109t97-61q5-2 10 1.5t7 8.5q2 5-1.5 10t-8.5 7q-49 12-81 50.5T257-280q0 62 43 105t105 43q54 0 92.5-32t50.5-81q2-5 7-8.5t10-1.5q5 2 8.5 6.5T575-238q-14 59-61 96.5T405-104Zm306 0q-6 0-10-4t-4-10v-162q0-12-7-19t-19-7H487q-23 0-39.5-16.5T431-362v-238q0-23 15.5-38.5T485-654q11 0 24 7t32 29q52 60 89.5 84.5T716-499q6 2 10.5 6.5T731-482q0 6-5 9.5t-11 1.5q-54-10-95-36t-89-79v240h138q23 0 39.5 16.5T725-290v172q0 6-4 10t-10 4ZM485-706q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialAccessibleW100.displayName = 'OnesyIconMaterialAccessibleW100';

export default IconMaterialAccessibleW100;
