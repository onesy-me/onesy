import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaW100Filled'

      short_name='Eda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-78q-56 0-95-39t-39-95v-112h139q8 0 14.5 3.5T337-311l75 101q17 22 44 24t47-18l125-125 125-75q16-9 34.5-8t32.5 12q13.79 10.56 14.9 27.78Q836-355 824-343L587-106q-14 14-30.5 21t-35.8 7H306ZM172-352v-394q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v254h115v-334q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v334h114v-374q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v374h115v-294q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v418L483-223q-11 11-25 9.5T435-227l-76-101q-8.25-11.25-21-17.63-12.75-6.37-27-6.37H172Z"/>
    </Icon>
  );
});

IconMaterialEdaW100Filled.displayName = 'OnesyIconMaterialEdaW100Filled';

export default IconMaterialEdaW100Filled;
