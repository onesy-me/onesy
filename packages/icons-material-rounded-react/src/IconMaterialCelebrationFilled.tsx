import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCelebrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationFilled'

      short_name='Celebration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m108-160 151-420q5-13 15.5-20t22.5-7q8 0 15 3t13 9l270 270q6 6 9 13t3 15q0 12-7 22.5T580-259L160-108q-12 5-23 1.5T118-118q-8-8-11.5-19t1.5-23Zm813-519q-9 9-21 9t-21-9l-3-3q-14-14-35-14t-35 14L603-479q-9 9-21 9t-21-9q-9-9-9-21t9-21l203-203q32-32 77-32t77 32l3 3q9 9 9 21t-9 21ZM399-799q9-9 21-9t21 9l5 5q32 32 32 76t-32 76l-3 3q-9 9-21 9t-21-9q-9-9-9-21t9-21l3-3q14-14 14-34t-14-34l-5-5q-9-9-9-21t9-21Zm162-80q9-9 21-9t21 9l43 43q32 32 32 77t-32 77L523-559q-9 9-21 9t-21-9q-9-9-9-21t9-21l123-123q14-14 14-35t-14-35l-43-43q-9-9-9-21t9-21Zm320 480q-9 9-21 9t-21-9l-43-43q-14-14-35-14t-35 14l-43 43q-9 9-21 9t-21-9q-9-9-9-21t9-21l43-43q32-32 77-32t77 32l43 43q9 9 9 21t-9 21Z"/>
    </Icon>
  );
});

IconMaterialCelebrationFilled.displayName = 'OnesyIconMaterialCelebrationFilled';

export default IconMaterialCelebrationFilled;
