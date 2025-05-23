import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheck'

      short_name='SafetyCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M12,4.14L6,6.39v4.7c0,4,2.55,7.7,6,8.83c3.45-1.13,6-4.82,6-8.83v-4.7L12,4.14z M12,17c-2.76,0-5-2.24-5-5 s2.24-5,5-5s5,2.24,5,5S14.76,17,12,17z M13.65,14.35l-2.15-2.15V9h1v2.79l1.85,1.85L13.65,14.35z" opacity=".3"/><path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7z M13.65,14.35 l-2.15-2.15V9h1v2.79l1.85,1.85L13.65,14.35z"/></g>
    </Icon>
  );
});

IconMaterialSafetyCheck.displayName = 'OnesyIconMaterialSafetyCheck';

export default IconMaterialSafetyCheck;
