import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandymanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandymanW100'

      short_name='Handyman'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-133q-6 0-11-2t-10-7L515-339q-5-5-7-10t-2-11q0-6 2-11t7-10l61-61q5-5 10-7t11-2q6 0 11 2t10 7l198 198q5 5 7 10t2 11q0 6-2 11t-7 10l-61 60q-5 5-10 7t-11 2Zm0-26 64-64-201-201-64 64 201 201Zm-509 26q-6 0-11-2t-10-7l-61-60q-5-5-7-10t-2-11q0-6 2-11.5t7-10.5l204-204h83l30-30-171-171h-57l-95-95 77-77 95 95v57l171 171 122-122-83-83 42-42h-84l-13-12 105-105 12 12v85l42-42 164 162q14 13 20.5 30t6.5 36q0 12-3 23.5t-9 22.5l-81-81-57 57-43-43-172 172v85L246-142q-5 5-10 7t-11 2Zm0-27 205-205v-64h-64L161-224l64 64Zm0 0-64-64 32 32 32 32Zm509 1 64-64-64 64Z"/>
    </Icon>
  );
});

IconMaterialHandymanW100.displayName = 'OnesyIconMaterialHandymanW100';

export default IconMaterialHandymanW100;
