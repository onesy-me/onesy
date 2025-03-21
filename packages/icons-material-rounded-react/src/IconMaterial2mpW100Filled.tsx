import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2mpW100Filled'

      short_name='2mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M284-416h72v106q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-106h72v166q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-170q0-11-6.5-17.5T460-444H280q-11 0-17.5 6.5T256-420v170q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-166Zm150-108v-72h92q11.9 0 19.95-8.05Q554-612.1 554-624v-72q0-11.9-8.05-19.95Q537.9-724 526-724H420q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h106v72h-92q-11.9 0-19.95 8.05Q406-607.9 406-596v86q0 6.07 3.97 10.03Q413.93-496 420-496h120q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H434Zm150 228h96q11 0 17.5-6.5T704-320v-100q0-11-6.5-17.5T680-444H570q-6.07 0-10.03 3.97Q556-436.07 556-430v180q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-46Zm0-28v-92h92v92h-92ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterial2mpW100Filled.displayName = 'OnesyIconMaterial2mpW100Filled';

export default IconMaterial2mpW100Filled;
