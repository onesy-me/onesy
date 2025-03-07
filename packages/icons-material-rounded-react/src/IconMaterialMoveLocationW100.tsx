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
      <path d="M817-281H628q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h189l-79-80q-4-4-4.5-10t4.2-10.17Q742-413 748-412.5q6 .5 10 4.5l92 92q9 9 9 21t-9 21l-93 93q-4 4-9 4t-10.22-4.17Q733-185 733.5-191t4.5-10l79-80ZM405-386q42 0 77.5-18.5T542-454q-30-20-64.3-30t-72.5-10q-38.2 0-72.7 10T268-454q24 31 59.5 49.5T405-386Zm0-200q23 0 38.5-15.5T459-640q0-23-15.5-38.5T405-694q-23 0-38.5 15.5T351-640q0 23 15.5 38.5T405-586Zm0 101Zm0 337q-8 0-16-2.5t-15-8.5q-36-33-78-78t-78.5-96.5q-36.5-51.5-61-106T132-547q0-120 78.5-200.5T405-828q116 0 194.5 80.5T678-547v16.52q0 8.48-2 16.48h-29q2-8 2.5-16.48T650-547q0-110-69.5-182T405-801q-106 0-175.5 72T160-547q0 75 67.5 179.5T405-169q26-22 49.5-45.5T499-261l3.5 2.5q3.5 2.5 7.09 6t6.5 6.5l2.91 3q-19 21-40 42t-42 41q-6.64 6-15.09 9-8.46 3-16.91 3Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationW100.displayName = 'OnesyIconMaterialMoveLocationW100';

export default IconMaterialMoveLocationW100;
