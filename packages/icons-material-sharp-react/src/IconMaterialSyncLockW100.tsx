import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncLockW100'

      short_name='SyncLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M194-194v-28h128q-78-68-107-128t-29-126q0-94 52.5-170T374-754v30q-72 31-116 99t-44 149q0 62.94 27 115.97T342-242v-128h28v176H194Zm552-284q0-66-27.5-120T618-717v127h-28v-176h176v28H638q81 68 109.5 134T774-478h-28ZM612-94v-176h41v-40q0-29 19.5-48.5T721-378q29 0 48.5 19.5T789-310v40h39v176H612Zm69-176h80v-40q0-17-11.5-28.5T721-350q-17 0-28.5 11.5T681-310v40Z"/>
    </Icon>
  );
});

IconMaterialSyncLockW100.displayName = 'OnesyIconMaterialSyncLockW100';

export default IconMaterialSyncLockW100;
