import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerson4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person4'

      short_name='Person4'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,10c1.1,0,2-0.9,2-2V5.5h-4V8C10,9.1,10.9,10,12,10z" opacity=".3"/><path d="M17.48,16.34C16.29,15.73,14.37,15,12,15c-2.37,0-4.29,0.73-5.48,1.34C6.2,16.5,6,16.84,6,17.22V18h12 v-0.78C18,16.84,17.8,16.5,17.48,16.34z" opacity=".3"/><path d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z M18,18H6v-0.78c0-0.38,0.2-0.72,0.52-0.88C7.71,15.73,9.63,15,12,15 c2.37,0,4.29,0.73,5.48,1.34C17.8,16.5,18,16.84,18,17.22V18z"/><path d="M12,12c2.21,0,4-1.79,4-4c0-1.37,0-3.5,0-3.5C16,3.67,15.33,3,14.5,3c-0.52,0-0.98,0.27-1.25,0.67 C12.98,3.27,12.52,3,12,3s-0.98,0.27-1.25,0.67C10.48,3.27,10.02,3,9.5,3C8.67,3,8,3.67,8,4.5c0,0,0,2.12,0,3.5 C8,10.21,9.79,12,12,12z M10,5.5h4V8c0,1.1-0.9,2-2,2s-2-0.9-2-2V5.5z"/></g></g>
    </Icon>
  );
});

IconMaterialPerson4.displayName = 'OnesyIconMaterialPerson4';

export default IconMaterialPerson4;
