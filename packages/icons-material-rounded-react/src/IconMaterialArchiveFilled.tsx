import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArchiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveFilled'

      short_name='Archive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 160q-17 0-28.5 11.5T440-520v128l-36-36q-11-11-28-11t-28 11q-11 11-11 28t11 28l104 104q12 12 28 12t28-12l104-104q11-11 11-28t-11-28q-11-11-28-11t-28 11l-36 36v-128q0-17-11.5-28.5T480-560Z"/>
    </Icon>
  );
});

IconMaterialArchiveFilled.displayName = 'OnesyIconMaterialArchiveFilled';

export default IconMaterialArchiveFilled;
