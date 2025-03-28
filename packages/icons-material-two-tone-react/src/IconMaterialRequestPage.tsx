import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPage'

      short_name='RequestPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M13.17,4H6v16h12V8.83L13.17,4z M15,11h-4v1h3c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1v1h-2v-1H9v-2h4v-1 h-3c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h1V8h2v1h2V11z" opacity=".3"/><path d="M13.17,4L18,8.83V20H6V4H13.17 M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2L14,2z M15,11h-4v1h3 c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1v1h-2v-1H9v-2h4v-1h-3c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h1V8h2v1h2V11z"/>
    </Icon>
  );
});

IconMaterialRequestPage.displayName = 'OnesyIconMaterialRequestPage';

export default IconMaterialRequestPage;
