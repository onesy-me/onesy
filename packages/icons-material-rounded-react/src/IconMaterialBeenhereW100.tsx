import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeenhereW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereW100'

      short_name='Beenhere'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-119q-10 0-19-3t-17-9L236-287q-11-8-17.5-21t-6.5-27v-433q0-26 17-43t43-17h416q26 0 43 17t17 43v433q0 14-6.5 27T724-287L516-131q-8 6-17 9t-19 3Zm-19-35q8 7 19 7t19-7l208-156q6-5 9.5-11.5T720-336v-432q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v432q0 8 3.5 14.5T253-310l208 156Zm-23-282-76-76q-4-4-9.5-4.5T342-512q-5 5-5 10t5 10l75 75q9 9 21 9t21-9l159-159q4-4 4.5-9.5T618-596q-5-5-10-5t-10 5L438-436Zm23-364H240h480-259Z"/>
    </Icon>
  );
});

IconMaterialBeenhereW100.displayName = 'OnesyIconMaterialBeenhereW100';

export default IconMaterialBeenhereW100;
