import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOff'

      short_name='TimerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,20c1.47,0,2.83-0.45,3.95-1.22L6.22,9.05C5.45,10.17,5,11.53,5,13C5,16.87,8.13,20,12,20z" opacity=".3"/><path d="M12,6c-0.94,0-1.83,0.19-2.65,0.52L11,8.17V8h2v2.17l5.48,5.48C18.81,14.83,19,13.94,19,13 C19,9.13,15.87,6,12,6z" opacity=".3"/><rect height="2" width="6" x="9" y="1"/><path d="M12,6c3.87,0,7,3.13,7,7c0,0.94-0.19,1.83-0.52,2.65l1.5,1.5C20.63,15.91,21,14.5,21,13c0-2.12-0.74-4.07-1.97-5.61 l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-1.5,0-2.91,0.37-4.15,1.02l1.5,1.5 C10.17,6.19,11.06,6,12,6z"/><polygon points="11,8 11,8.17 13,10.17 13,8"/><path d="M2.81,2.81L1.39,4.22l3.4,3.4C3.67,9.12,3,10.98,3,13c0,4.97,4.02,9,9,9c2.02,0,3.88-0.67,5.38-1.79l2.4,2.4l1.41-1.41 L2.81,2.81z M12,20c-3.87,0-7-3.13-7-7c0-1.47,0.45-2.83,1.22-3.95l9.73,9.73C14.83,19.55,13.47,20,12,20z"/></g></g>
    </Icon>
  );
});

IconMaterialTimerOff.displayName = 'OnesyIconMaterialTimerOff';

export default IconMaterialTimerOff;
