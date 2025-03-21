import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffW100Filled'

      short_name='SubtitlesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M284-488q6 0 10-4t4-10q0-6-4-10t-10-4q-6 0-10 4t-4 10q0 6 4 10t10 4Zm544-200v380q0 20-18.5 27.5T777-287L576-488h100q6 0 10-4t4-10q0-6-4-10t-10-4H548L367-697q-14-14-6.5-32.5T388-748h380q26 0 43 17t17 43ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h10l256 256h-40L126-784q-4-4-4.5-9.5T126-804q5-5 10-5t10 5l624 624q4 4 4.5 9.5T770-160q-5 5-10 5t-10-5l-52-52H192Zm340-166H284q-6 0-10 4t-4 10q0 6 4 10t10 4h276l-28-28Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffW100Filled.displayName = 'OnesyIconMaterialSubtitlesOffW100Filled';

export default IconMaterialSubtitlesOffW100Filled;
