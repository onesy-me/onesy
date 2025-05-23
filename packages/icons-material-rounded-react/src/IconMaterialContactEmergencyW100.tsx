import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactEmergencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyW100'

      short_name='ContactEmergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-192q-26 0-43-17t-17-43v-456q0-26 17-43t43-17h736q26 0 43 17t17 43v456q0 26-17 43t-43 17H112Zm466-28h270q12 0 22-10t10-22v-456q0-12-10-22t-22-10H112q-12 0-22 10t-10 22v456q0 12 10 22t22 10h30q42-48 98-78t120-30q64 0 120 30t98 78ZM360-388q39 0 66.5-27.5T454-482q0-39-27.5-66.5T360-576q-39 0-66.5 27.5T266-482q0 39 27.5 66.5T360-388ZM182-220h356q-35-38-81-59t-97-21q-51 0-97 21t-81 59Zm178-196q-27 0-46.5-19.5T294-482q0-27 19.5-46.5T360-548q27 0 46.5 19.5T426-482q0 27-19.5 46.5T360-416Zm120-64Zm226-96v66q0 6 4 10t10 4q6 0 10-4t4-10v-66l57 33q5 3 10.5 1.5t8.5-6.5q3-5 1.5-10.5T805-567l-57-33 57-33q5-3 6.5-8.5T810-652q-3-5-8.5-6.5T791-657l-57 33v-66q0-6-4-10t-10-4q-6 0-10 4t-4 10v66l-57-33q-5-3-10.5-1.5T630-652q-3 5-1.5 10.5t6.5 8.5l57 33-57 33q-5 3-6.5 8.5T630-548q3 5 8.5 6.5T649-543l57-33Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyW100.displayName = 'OnesyIconMaterialContactEmergencyW100';

export default IconMaterialContactEmergencyW100;
