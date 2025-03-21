import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShuffleOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnW100Filled'

      short_name='ShuffleOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-92q-11.55 0-19.78-8.22Q92-108.45 92-120v-720q0-11.55 8.22-19.78Q108.45-868 120-868h720q11.55 0 19.78 8.22Q868-851.55 868-840v720q0 11.55-8.22 19.78Q851.55-92 840-92H120Zm466-120h132q12.75 0 21.38-8.63Q748-229.25 748-242v-129q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v109L587-395q-5-5-10-5t-10 5q-5 5-4.5 10.5t4.5 9.5l135 135H586q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4Zm-370-4q5 5 10.5 4.5t9.5-4.5l484-484v111q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-129q0-12.75-8.62-21.38Q730.75-748 718-748H586q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4h114L216-236q-5 5-5 10t5 10Zm0-509 153 152q3.67 4 9.33 4 5.67 0 9.5-3.83Q392-577 392-582t-4-9L236-744q-4-4-9.5-4t-9.5 4q-4 4-4.5 9.5t3.5 9.5Z"/>
    </Icon>
  );
});

IconMaterialShuffleOnW100Filled.displayName = 'OnesyIconMaterialShuffleOnW100Filled';

export default IconMaterialShuffleOnW100Filled;
