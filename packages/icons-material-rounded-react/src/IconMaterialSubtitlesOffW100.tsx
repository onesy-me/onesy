import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffW100'

      short_name='SubtitlesOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h10l28 28h-38q-12 0-22 10t-10 22v416q0 14 9 23t23 9h478L560-350H284q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h248L126-784q-4-4-4.5-9.5t4.72-10.72Q131-809 136-809q5 0 10 5l624 624q4 4 4.5 9.5t-4.72 10.72Q765-155 760-155q-5 0-10.27-5.36L698-212H192Zm636-476v418q0 7-4.37 10.5-4.38 3.5-9.63 3.5-5 0-9.5-3.5T800-270v-418q0-14-9-23t-23-9H350q-7 0-10.5-4.38-3.5-4.37-3.5-9.62 0-5 3.5-9.5T350-748h418q26 0 43 17t17 43ZM676-488h-94q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T582-516h94q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Zm-104-4Zm-142 12Zm-146.04-8q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffW100.displayName = 'OnesyIconMaterialSubtitlesOffW100';

export default IconMaterialSubtitlesOffW100;
