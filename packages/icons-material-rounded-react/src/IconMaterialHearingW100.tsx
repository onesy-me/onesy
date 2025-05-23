import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHearingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingW100'

      short_name='Hearing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M175-600q0 68 22 129t63 112q4 5 5 11.5t-4 10.5q-5 4-10.5 2.5T240-341q-43-53-68-119t-25-140q0-74 25-140.5T240-861q5-5 10.5-6.5T261-865q5 4 4 10.5t-5 11.5q-41 51-63 112.5T175-600Zm386 80q-34 0-57-23t-23-57q0-34 23-57t57-23q34 0 57 23t23 57q0 34-23 57t-57 23Zm222 306q2-6 5.5-10.5t9.5-4.5q7 0 11.5 4.5T813-214q-8 47-45 77.5T681-106q-51 0-85.5-30T541-220q-15-42-35.5-67.5T431-356q-60-48-92-107.5T307-600q0-109 72.5-181.5T561-854q103 0 174 64t78 164q1 6-3.5 10t-10.5 4q-6 0-9.5-4t-4.5-10q-7-88-71-144t-153-56q-95 0-160.5 65.5T335-600q0 72 33.5 129.5T453-374q46 35 70.5 65.5T567-230q18 45 44 70.5t70 25.5q36 0 65-22.5t37-57.5Z"/>
    </Icon>
  );
});

IconMaterialHearingW100.displayName = 'OnesyIconMaterialHearingW100';

export default IconMaterialHearingW100;
