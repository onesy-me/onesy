import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedW100'

      short_name='ShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-840q-6 0-10-4t-4-10q0-6 4-10t10-4h212q6 0 10 4t4 10q0 6-4 10t-10 4H374Zm106 708q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q63 0 113 21t95 59l42-42q4-4 9.5-4.5T750-710q5 5 5 10t-5 10l-42 42q38 45 59 95t21 113q0 64-24.5 120T697-222q-42 42-98 66t-119 24Zm0-308Zm18-68h233q8 0 12-6t2-14q-19-56-57-98.5T596-694q-5-2-10.5-.5T577-688l-92 157q-5 8-.5 15.5T498-508Zm-69 18 118-202q4-7 1-13.5t-11-8.5q-58-12-115 0t-105 46q-5 3-6 9t2 11l90 158q5 8 13 8t13-8Zm-33 90q9 0 13.5-7t-.5-15L295-624q-4-7-12-7.5t-13 5.5q-38 45-55.5 99T203-414q1 6 5 10t10 4h178Zm77 50q5-8 .5-15t-13.5-7H229q-8 0-12.5 6t-2.5 14q18 56 57 98.5t92 67.5q5 2 11 .5t9-6.5l90-158Zm82-41q-5-8-13-8t-13 8L414-190q-4 7-1 13.5t11 8.5q59 13 114 2t105-46q5-4 6-9.5t-2-10.5l-92-159Zm-6-66 118 203q4 6 10 6.5t11-4.5q40-48 57-100t12-114q-1-6-5-10t-10-4H562q-9 0-13.5 7.5t.5 15.5Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedW100.displayName = 'OnesyIconMaterialShutterSpeedW100';

export default IconMaterialShutterSpeedW100;
