import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationW100'

      short_name='MoveLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m748-172-20-19 89-90H614v-28h203l-89-90 20-19 123 123-123 123ZM405-386q42 0 77.5-18.5T542-454q-30-20-64.3-30t-72.5-10q-38.2 0-72.7 10T268-454q24 31 59.5 49.5T405-386Zm0-200q23 0 38.5-15.5T459-640q0-23-15.5-38.5T405-694q-23 0-38.5 15.5T351-640q0 23 15.5 38.5T405-586Zm0 101Zm0 354Q270-252 201-357t-69-190q0-120 78.5-200.5T405-828q116 0 194.5 80.5T678-547v16.52q0 8.48-2 16.48h-29q2-8 2.5-16.48T650-547q0-110-69.5-182T405-801q-106 0-175.5 72T160-547q0 75 67.5 179.5T405-169q26-22 49.5-45.5T499-261l3.5 2.5q3.5 2.5 7.09 6t6.5 6.5l2.91 3q-24.52 27.08-53.26 55.04T405-131Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationW100.displayName = 'OnesyIconMaterialMoveLocationW100';

export default IconMaterialMoveLocationW100;
