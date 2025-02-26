import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebhookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebhookW100Filled'

      short_name='Webhook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-146q-72 0-123-51t-51-123q0-55 30-98.5t78-62.5v31q-35 18-57.5 53T134-320q0 60 43 103t103 43q60 0 103-43t43-103v-14h210q5-14 17-23t27-9q19 0 32.5 13.5T726-320q0 19-13.5 32.5T680-274q-16 0-27.5-8.5T636-306H454q-8 75-59.5 117.5T280-146Zm400 0q-38 0-71.5-15.5T548-206h41q17 14 41 23t50 9q60 0 103-43t43-103q0-60-43-103t-103-43q-17 0-31.5 3.5T620-453L511-635q-21 5-39-8.5T454-680q0-19 13.5-32.5T500-726q19 0 32.5 13.5T546-680q0 8-3 16t-8 13l97 163q11-2 22.5-4t25.5-2q72 0 123 51t51 123q0 72-51 123t-123 51ZM280-274q-19 0-32.5-13.5T234-320q0-20 15.5-35t41.5-10l105-175q-35-26-52.5-62.5T326-680q0-72 51-123t123-51q72 0 123 51t51 123h-28q0-60-43-103t-103-43q-60 0-103 43t-43 103q0 42 21 75.5t59 55.5L315-350q5 6 8 14t3 16q0 19-13.5 32.5T280-274Z"/>
    </Icon>
  );
});

IconMaterialWebhookW100Filled.displayName = 'OnesyIconMaterialWebhookW100Filled';

export default IconMaterialWebhookW100Filled;
