import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookOnline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnline'

      short_name='BookOnline'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M17,4H7V3h10V4z M17,21H7v-1h10V21z" opacity=".3"/><path d="M17,4H7V3h10V4z M17,21H7v-1h10V21z M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1 L17,1z M7,6h10v12H7V6z M16,11V9.14C16,8.51,15.55,8,15,8H9C8.45,8,8,8.51,8,9.14l0,1.96c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1 l0,1.76C8,15.49,8.45,16,9,16h6c0.55,0,1-0.51,1-1.14V13c-0.55,0-1-0.45-1-1C15,11.45,15.45,11,16,11z M12.5,14.5h-1v-1h1V14.5z M12.5,12.5h-1v-1h1V12.5z M12.5,10.5h-1v-1h1V10.5z"/>
    </Icon>
  );
});

IconMaterialBookOnline.displayName = 'OnesyIconMaterialBookOnline';

export default IconMaterialBookOnline;
