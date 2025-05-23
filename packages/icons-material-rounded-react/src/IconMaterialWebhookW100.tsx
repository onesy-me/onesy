import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebhookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebhookW100'

      short_name='Webhook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-146q-72 0-123-51t-51-123q0-48 23.5-87.5T192-470q8-5 15-1.5t7 13.5q0 3-2 6.5t-5 5.5q-32 19-52.5 52.5T134-320q0 60 43 103t103 43q58 0 100-39.5t46-96.5q1-11 7.5-17.5T450-334h186q5-14 17-23t27-9q19 0 32.5 13.5T726-320q0 19-13.5 32.5T680-274q-16 0-27.5-8.5T636-306H454q-8 75-59.5 117.5T280-146Zm0-128q-19 0-32.5-13.5T234-320q0-20 15.5-35t41.5-10l105-175q-35-26-52.5-62.5T326-680q0-72 51-123t123-51q69 0 118.5 46.5T673-694q1 6-3.5 10t-10.5 4q-5 0-9-4t-5-9q-5-56-46.5-94.5T500-826q-60 0-103 43t-43 103q0 36 15.5 66t44.5 52q8 6 10.5 16t-2.5 18L315-350q5 6 8 14t3 16q0 19-13.5 32.5T280-274Zm400 128q-29 0-54.5-8.5T577-180q-9-7-7.5-16.5T582-206q4 0 7.5 2t6.5 4q17 12 39 19t45 7q60 0 103-43t43-103q0-60-43-103t-103-43q-10 0-19 1.5t-18 3.5q-10 3-20-1t-15-12l-97-161q-21 5-39-8.5T454-680q0-19 13.5-32.5T500-726q19 0 32.5 13.5T546-680q0 8-3 16t-8 13l97 163q11-2 22.5-4t25.5-2q72 0 123 51t51 123q0 72-51 123t-123 51Z"/>
    </Icon>
  );
});

IconMaterialWebhookW100.displayName = 'OnesyIconMaterialWebhookW100';

export default IconMaterialWebhookW100;
