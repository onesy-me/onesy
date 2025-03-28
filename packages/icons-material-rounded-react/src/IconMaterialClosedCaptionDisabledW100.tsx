import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaptionDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledW100'

      short_name='ClosedCaptionDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-584 28 28h-84q-6 0-11 5t-5 11v120q0 6 5 11t11 5h80q6 0 11-5t5-11q0-5 3-8t8-3h6q5 0 8 3t3 8q0 18-13 31t-31 13h-80q-18 0-31-13t-13-31v-120q0-18 13-31t31-13h56Zm412-104v383q0 7-4.5 10.5T774-291q-5 0-9.5-3.5T760-305v-383q0-14-9-23t-23-9H345q-7 0-10.5-4.5T331-734q0-5 3.5-9.5T345-748h383q26 0 43 17t17 43ZM684-417q0 6-2 11t-6 10l-20-20v-1q0-5 3-8t8-3h6q5 0 8 3t3 8Zm-44-167q18 0 31 13t13 31q0 5-3 8t-8 3h-6q-5 0-8-3t-3-8q0-6-5-11t-11-5h-80q-6 0-11 5t-5 11v12l-26-26q5-13 16.5-21.5T560-584h80Zm-84 68Zm-111 41ZM232-212q-26 0-43-17t-17-43v-416q0-21 11.5-37t30.5-21l26 26h-8q-12 0-22 10t-10 22v416q0 12 10 22t22 10h448L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L708-212H232Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledW100.displayName = 'OnesyIconMaterialClosedCaptionDisabledW100';

export default IconMaterialClosedCaptionDisabledW100;
