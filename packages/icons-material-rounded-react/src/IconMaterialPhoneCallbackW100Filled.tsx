import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneCallbackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneCallbackW100Filled'

      short_name='PhoneCallback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M745-172q-94 0-195.5-49.5T359-360q-88-89-137.5-190T172-745q0-18 12-30.5t30-12.5h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.5 30T745-172ZM564-544h126q6 0 10 4t4 10q0 6-4 10t-10 4H546q-13 0-21.5-8.5T516-546v-144q0-6 4-10t10-4q6 0 10 4t4 10v126l214-214q4-4 9.5-4.5T778-778q5 5 5 10t-5 10L564-544Z"/>
    </Icon>
  );
});

IconMaterialPhoneCallbackW100Filled.displayName = 'OnesyIconMaterialPhoneCallbackW100Filled';

export default IconMaterialPhoneCallbackW100Filled;
