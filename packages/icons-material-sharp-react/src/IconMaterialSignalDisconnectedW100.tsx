import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalDisconnectedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalDisconnectedW100'

      short_name='SignalDisconnected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m657-416-20-20q20-27 31.5-58.5T680-560q0-40-14.5-77T622-702l20-20q32 33 49 75t17 88q0 39-12.5 76T657-416ZM543-530l-93-93q7-4 14.5-5.5T480-630q29 0 49.5 20.5T550-560q0 8-1.5 15.5T543-530Zm207 207-20-20q39-45 60.5-101T812-560q0-66-25.5-126.5T714-794l20-20q51 51 78.5 116.5T840-560q0 66-22.5 127.5T750-323Zm44 197L494-426v260h-28v-288L292-628q-6 17-9 34t-3 34q0 40 14.5 77t43.5 65l-20 20q-32-32-49-74t-17-88q0-23 4-45.5t15-43.5l-77-77q-23 38-34.5 79.5T148-560q0 66 25.5 126.5T246-326l-20 20q-51-51-78.5-116.5T120-560q0-50 13-97.5t40-89.5l-47-47 20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialSignalDisconnectedW100.displayName = 'OnesyIconMaterialSignalDisconnectedW100';

export default IconMaterialSignalDisconnectedW100;
