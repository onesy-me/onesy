import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneForwardedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneForwardedW100'

      short_name='PhoneForwarded'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M778-698H548q-6 0-10-4t-4-10q0-6 4-10t10-4h230l-80-80q-4-4-4.5-9.5T698-826q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T698-598q-5-5-5-10t5-10l80-80Zm-33 526q-94 0-195.5-49.5T359-360q-88-89-137.5-190T172-745q0-18 12-30.5t30-12.5h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.5 30T745-172ZM246-566l80-72q5-4 6.5-11t-.5-13l-18-82q-2-8-7-12t-13-4h-80q-6 0-10 4t-4 10q0 41 12.5 87t33.5 93Zm332 326q41 21 88.5 30.5T746-200q6 0 10-4t4-10v-78q0-8-4-13t-12-7l-68-14q-6-2-10.5-.5T656-320l-78 80ZM246-566Zm332 326Z"/>
    </Icon>
  );
});

IconMaterialPhoneForwardedW100.displayName = 'OnesyIconMaterialPhoneForwardedW100';

export default IconMaterialPhoneForwardedW100;
