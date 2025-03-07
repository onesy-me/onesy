import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddW100Filled'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-417q0-10.5 3.5-20.25T186-687l66-79q8-10.62 20-16.31 12-5.69 26.15-5.69h361.7q14.15 0 26.53 5.69Q698.75-776.62 707-766l67 81q7 8.41 10.5 18.35 3.5 9.94 3.5 20.65v99q0 16.65-10 26.83Q768-510 751-509q-35 2-68.5 14.5T622-461q-11 8-22.5 3T588-475v-175H372v208q0 17.5 14 26.25t29 .75l65-32 66 33q8.57 4.8 11.79 14.4Q561-390 556-381q-12 24-18.5 50.5T531-275q0 17 2.5 34t7.5 34q4 13-3.5 24T517-172H232Zm519-89H645q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H779v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106ZM215-678h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Z"/>
    </Icon>
  );
});

IconMaterialBoxAddW100Filled.displayName = 'OnesyIconMaterialBoxAddW100Filled';

export default IconMaterialBoxAddW100Filled;
