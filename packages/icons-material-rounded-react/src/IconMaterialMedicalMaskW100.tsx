import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalMaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMaskW100'

      short_name='MedicalMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-252q-54 0-107-4.5T267-269q-23-4-39-20.5T212-329v-22q-45-11-73-47t-28-82q0-45 28-81t73-48v-34q0-26 20-44t46-16q20 2 40 5t40 4q30 2 60.5 3t61.5 1q25 0 50-.5t50-2.5q26-2 50.5-4.5T681-703q26-3 46.5 15t20.5 45v34q45 12 73 48t28 81q0 46-28 82t-73 47v22q0 23-16.5 39.5T692-269q-53 8-105.5 12.5T480-252Zm0-28q53 0 105-4.5T690-297q13-2 21.5-11t8.5-21v-316q0-14-10.5-24t-24.5-8q-51 8-102.5 11.5T480-662q-52 0-103.5-3.5T274-677q-14-2-24 8t-10 24v316q0 12 8 21t21 11q53 8 105 12.5t106 4.5Zm0-86q42 0 82.5-4.5T644-387q5-2 8-6.5t1-10.5q-2-5-7-8t-10-1q-38 11-77.5 15t-78.5 4q-40 0-79-4.5T324-414q-6-2-10.5 1.5T307-404q-2 6 1 10.5t9 6.5q39 12 80 16.5t83 4.5Zm-268-14v-200q-33 11-53 38.5T139-480q0 35 20 62t53 38Zm536 0q32-11 52.5-38t20.5-62q0-34-20.5-61.5T748-580v200ZM480-526q42 0 82.5-4.5T644-547q5-2 8-6.5t1-10.5q-2-5-7-8t-10-1q-38 11-77.5 15t-78.5 4q-40 0-79-4.5T324-574q-6-1-10.5 2t-6.5 8q-2 6 .5 10.5t8.5 6.5q40 12 81 16.5t83 4.5ZM240-300v-380 380Z"/>
    </Icon>
  );
});

IconMaterialMedicalMaskW100.displayName = 'OnesyIconMaterialMedicalMaskW100';

export default IconMaterialMedicalMaskW100;
