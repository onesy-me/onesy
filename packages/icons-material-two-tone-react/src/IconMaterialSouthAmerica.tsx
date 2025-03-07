import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthAmerica = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthAmerica'

      short_name='SouthAmerica'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,12c0-1.95,0.7-3.74,1.87-5.13L9,10v1c0,1.1,0.9,2,2,2v5.59c0,0.27,0.11,0.52,0.29,0.71L12,20 C7.58,20,4,16.42,4,12z M13,19.94V18l3.75-5.62c0.16-0.25,0.25-0.54,0.25-0.83V10.5c0-0.55-0.45-1-1-1h-1.5l-1.4-1.75 C12.72,7.28,12.15,7,11.54,7H8V5.07C9.18,4.39,10.54,4,12,4c4.41,0,8,3.59,8,8C20,16.07,16.94,19.44,13,19.94z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M4,12c0-1.95,0.7-3.74,1.87-5.13L9,10 v1c0,1.1,0.9,2,2,2v5.59c0,0.27,0.11,0.52,0.29,0.71L12,20C7.58,20,4,16.42,4,12z M13,19.94V18l3.75-5.62 c0.16-0.25,0.25-0.54,0.25-0.83V10.5c0-0.55-0.45-1-1-1h-1.5l-1.4-1.75C12.72,7.28,12.15,7,11.54,7H8V5.07C9.18,4.39,10.54,4,12,4 c4.41,0,8,3.59,8,8C20,16.07,16.94,19.44,13,19.94z"/>
    </Icon>
  );
});

IconMaterialSouthAmerica.displayName = 'OnesyIconMaterialSouthAmerica';

export default IconMaterialSouthAmerica;
