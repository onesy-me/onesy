import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEco = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eco'

      short_name='Eco'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M7.46,9.46C5.68,11.25,5.55,14.04,7.03,16c1.53-2.54,3.73-4.64,6.37-6c-2.26,1.91-3.95,4.44-4.88,7.32 C9.27,17.75,10.11,18,11,18c1.34,0,2.59-0.52,3.54-1.46c1.74-1.74,2.81-6.57,3.26-10.33C14.04,6.65,9.21,7.72,7.46,9.46z" opacity=".3"/><path d="M6.05,8.05c-2.73,2.73-2.73,7.17,0,9.9C7.42,19.32,9.21,20,11,20s3.58-0.68,4.95-2.05C19.43,14.47,20,4,20,4 S9.53,4.57,6.05,8.05z M14.54,16.54C13.59,17.48,12.34,18,11,18c-0.89,0-1.73-0.25-2.48-0.68c0.92-2.88,2.62-5.41,4.88-7.32 c-2.63,1.36-4.84,3.46-6.37,6c-1.48-1.96-1.35-4.75,0.44-6.54C9.21,7.72,14.04,6.65,17.8,6.2C17.35,9.96,16.28,14.79,14.54,16.54z"/></g></g>
    </Icon>
  );
});

IconMaterialEco.displayName = 'OnesyIconMaterialEco';

export default IconMaterialEco;
