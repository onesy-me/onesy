import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncSavedLocallyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyFilled'

      short_name='SyncSavedLocally'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m437-511-57-57q-11-11-27.5-11.5T324-568q-11 11-11 28t11 28l85 86q12 12 28 12t28-12l186-170q0-16-2-31t-13-26q-12-12-28.5-12T579-653L437-511ZM40-120v-80h840q17 0 28.5 11.5T920-160q0 17-11.5 28.5T880-120H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyFilled.displayName = 'OnesyIconMaterialSyncSavedLocallyFilled';

export default IconMaterialSyncSavedLocallyFilled;
