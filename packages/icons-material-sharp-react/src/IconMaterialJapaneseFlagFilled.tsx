import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJapaneseFlagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JapaneseFlagFilled'

      short_name='JapaneseFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-438q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-120v-699q34-8 68-14.5t70-6.5q49 0 98 14.5t95 41.5q47 28 97.5 42.5T692-727q27 0 54-3t54-5v487q-27 2-54.5 5t-53.5 3q-53 0-103-14t-95-41q-45-27-94.5-41T299-350q-14 0-28 1.5t-31 3.5v225h-80Z"/>
    </Icon>
  );
});

IconMaterialJapaneseFlagFilled.displayName = 'OnesyIconMaterialJapaneseFlagFilled';

export default IconMaterialJapaneseFlagFilled;
