import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonePausedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonePausedW100Filled'

      short_name='PhonePaused'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M745-172q-94 0-195.5-49.5T359-360q-88-89-137.5-190T172-745q0-18 12-30.5t30-12.5h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.5 30T745-172Zm-99-388q-6 0-10-4t-4-10v-200q0-6 4-10t10-4q6 0 10 4t4 10v200q0 6-4 10t-10 4Zm128 0q-6 0-10-4t-4-10v-200q0-6 4-10t10-4q6 0 10 4t4 10v200q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialPhonePausedW100Filled.displayName = 'OnesyIconMaterialPhonePausedW100Filled';

export default IconMaterialPhonePausedW100Filled;
