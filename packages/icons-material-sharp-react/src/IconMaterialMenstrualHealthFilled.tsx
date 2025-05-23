import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenstrualHealthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenstrualHealthFilled'

      short_name='MenstrualHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-860v380q0 91 36 168t99 132q-26-38-40.5-83.5T160-360q0-74 30.5-154.5T292-701L80-860Zm400 37Q347-663 293.5-547.5T240-360q0 100 70 170t170 70q100 0 170-70t70-170q0-72-54-188.5T480-823Zm400-37L668-701q71 106 101.5 186.5T800-360q0 51-14.5 96.5T745-180q63-55 99-132t36-168v-380Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealthFilled.displayName = 'OnesyIconMaterialMenstrualHealthFilled';

export default IconMaterialMenstrualHealthFilled;
