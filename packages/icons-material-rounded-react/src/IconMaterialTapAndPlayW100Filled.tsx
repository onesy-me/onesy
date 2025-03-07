import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapAndPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayW100Filled'

      short_name='TapAndPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M276.14-92Q266-92 259-98.86t-7-17q0-10.14 6.86-17.14t17-7q10.14 0 17.14 6.86t7 17Q300-106 293.14-99t-17 7ZM280-746v236q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-298q0-26 17-43t43-17h336q26 0 43 17t17 43v702q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-640H280Zm77 549q-18-18-41.5-29T266-239q-6-1-10-5.04-4-4.03-4-10 0-5.96 4-9.96 4-4 10-3 32 2 59.5 15t50.5 36q23 23 36 50.5t15 59.5q1 6-3.04 10-4.03 4-10 4-5.96 0-9.96-4-4-4-5-10-2-26-13-49.5T357-197Zm90-90q-36-36-83-57t-98-24q-6 0-10-4.04-4-4.03-4-10 0-5.96 4-9.96 4-4 10-4 57 2 108.5 25t92.5 64q41 41 63.5 92.5T556-106q0 6-3.93 10t-10 4Q536-92 532-96t-4-10q-3-51-24-98t-57-83Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayW100Filled.displayName = 'OnesyIconMaterialTapAndPlayW100Filled';

export default IconMaterialTapAndPlayW100Filled;
