import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDestructionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DestructionW100'

      short_name='Destruction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-172q-23 0-38.5-15.5T172-226v-131q0-23 15.5-38.5T226-411h508q23 0 38.5 15.5T788-357v131q0 23-15.5 38.5T734-172H226Zm6-28h496q14 0 23-9t9-23v-119q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v119q0 14 9 23t23 9Zm210-455 67-118q4-7 10.5-10t13.5-1q7 2 11.5 6t6.5 12l23 134 131-37q8-2 14 1t10 8q4 5 4.5 12t-4.5 14l-78 111 48 27q5 3 6.5 9t-1.5 11q-3 5-8.5 6.5T685-471l-47-27q-12-7-15-19.5t5-23.5l69-96-146 40-25-149-75 132-123-88 40 146-146 25 60 36q5 3 6.5 8.5T287-476q-3 5-8.5 6.5T268-471l-75-44q-7-4-9.5-10t-.5-13q2-7 6-11.5t12-6.5l132-23-36-131q-2-8 .5-14t7.5-10q5-4 12-4.5t14 4.5l111 79Zm18 184Zm20 179Z"/>
    </Icon>
  );
});

IconMaterialDestructionW100.displayName = 'OnesyIconMaterialDestructionW100';

export default IconMaterialDestructionW100;
