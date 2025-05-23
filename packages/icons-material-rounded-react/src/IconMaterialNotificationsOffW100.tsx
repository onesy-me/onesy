import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffW100'

      short_name='NotificationsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M684-212H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-20 4-40.65 4-20.64 12-39.35l22 22q-5 14.06-7.5 28.56-2.5 14.5-2.5 29.44v328h360L132-764q-5-3.67-5-9.33 0-5.67 5-10.67t10-5q5 0 10 5l658 658q4 4 4.5 9.5t-4.72 10.72Q805-101 800-101q-5 0-10-5L684-212ZM514-774q76 11 125 69.5T688-568v170q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-170q0-75-52.5-127.5T480-748q-32 0-62 10.5T364-707q-5 4-11 4t-10.24-5.36Q339-713 339-718q0-5 5-9 22-18 47.5-30t54.5-17v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v20Zm-34 355Zm0 307q-22.6 0-40.3-12.43-17.7-12.44-17.7-33.54 0-6.03 4.89-10.03 4.88-4 10.9-4H522q7 0 11.5 4.1 4.5 4.09 4.5 10.05 0 20.85-17.7 33.35T480-112Zm27-433Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100.displayName = 'OnesyIconMaterialNotificationsOffW100';

export default IconMaterialNotificationsOffW100;
