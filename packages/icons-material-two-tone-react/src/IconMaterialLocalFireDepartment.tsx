import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalFireDepartment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFireDepartment'

      short_name='LocalFireDepartment'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M16.2,8.65C15.56,9.07,14.8,9.3,14.02,9.3c-2.06,0-3.77-1.55-3.99-3.55C8.13,7.35,6,9.84,6,13 c0,1.79,0.79,3.4,2.04,4.5c-0.04-0.34-0.23-1.88,1.13-3.22l0,0L12,11.5l2.83,2.78l0,0c1.35,1.33,1.17,2.86,1.13,3.21l0,0.01 C17.21,16.4,18,14.79,18,13C18,11.35,17.34,9.78,16.2,8.65z" opacity=".3"/><path d="M12,14.31l-1.42,1.4C10.2,16.07,10,16.55,10,17.06c0,1.07,0.9,1.94,2,1.94s2-0.87,2-1.94 c0-0.51-0.2-0.99-0.57-1.36L12,14.31z" opacity=".3"/><path d="M16,6l-0.44,0.55c-0.42,0.52-0.98,0.75-1.54,0.75C13,7.3,12,6.52,12,5.3V2c0,0-8,4-8,11c0,4.42,3.58,8,8,8s8-3.58,8-8 C20,10.04,18.39,7.38,16,6z M12,19c-1.1,0-2-0.87-2-1.94c0-0.51,0.2-0.99,0.58-1.36l1.42-1.4l1.43,1.4 C13.8,16.07,14,16.55,14,17.06C14,18.13,13.1,19,12,19z M15.96,17.5L15.96,17.5c0.04-0.36,0.22-1.89-1.13-3.22l0,0L12,11.5 l-2.83,2.78l0,0c-1.36,1.34-1.17,2.88-1.13,3.22C6.79,16.4,6,14.79,6,13c0-3.16,2.13-5.65,4.03-7.25 c0.23,1.99,1.93,3.55,3.99,3.55c0.78,0,1.54-0.23,2.18-0.66C17.34,9.78,18,11.35,18,13C18,14.79,17.21,16.4,15.96,17.5z"/></g></g>
    </Icon>
  );
});

IconMaterialLocalFireDepartment.displayName = 'OnesyIconMaterialLocalFireDepartment';

export default IconMaterialLocalFireDepartment;
