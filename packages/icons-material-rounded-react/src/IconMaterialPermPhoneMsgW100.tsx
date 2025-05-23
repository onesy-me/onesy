import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermPhoneMsgW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermPhoneMsgW100'

      short_name='PermPhoneMsg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-576v-182q0-12.75 8.7-21.38 8.7-8.62 21.57-8.62h211.87q12.86 0 21.36 8.62 8.5 8.63 8.5 21.38v124q0 12.75-8.62 21.37Q770.75-604 758-604H580l-38 38q-7 7-16.5 3.46T516-576Zm28-56h216v-128H544v128Zm0 0v-128 128Zm201 460q-94 0-195.5-49.5T359.5-360q-88.5-89-138-190T172-745q0-18.43 12-30.71Q196-788 214-788h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.29 30-12.28 12-30.71 12ZM246-566l80-72q5-4 6.5-11t-.5-13l-18-82q-2-8-7-12t-13-4h-80q-6 0-10 4t-4 10q0 41 12.5 87t33.5 93Zm332 326q41 21 88.5 30.5T746-200q6 0 10-4t4-10v-78q0-8-4-13t-12-7l-68-14q-6-2-10.5-.5T656-320l-78 80ZM246-566Zm332 326Z"/>
    </Icon>
  );
});

IconMaterialPermPhoneMsgW100.displayName = 'OnesyIconMaterialPermPhoneMsgW100';

export default IconMaterialPermPhoneMsgW100;
