import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleW100Filled'

      short_name='Shuffle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-212q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h116L567-375q-4-4-4.5-9.5T567-395q5-5 10-5t10 5l133 133v-109q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v129q0 12.75-8.62 21.37Q730.75-212 718-212H586Zm-370-4q-5-5-5-10t5-10l484-484H586q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h132q12.75 0 21.38 8.62Q748-730.75 748-718v129q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-111L236-216q-4 4-9.5 4.5T216-216Zm0-509q-4-4-3.5-9.5t4.3-9.5q3.8-4 9.5-4t9.7 4l152 153q4 4 4 9t-4 9.17q-3.67 3.83-9.33 3.83-5.67 0-9.67-4L216-725Z"/>
    </Icon>
  );
});

IconMaterialShuffleW100Filled.displayName = 'OnesyIconMaterialShuffleW100Filled';

export default IconMaterialShuffleW100Filled;
