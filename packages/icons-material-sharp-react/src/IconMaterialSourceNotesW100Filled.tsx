import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSourceNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotesW100Filled'

      short_name='SourceNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-614h348v-28H306v28ZM720-56q-61 0-109-36.5T545-184h30q17 45 55.61 72.5T720-84q64.63 0 110.31-45.69Q876-175.37 876-240t-45.69-110.31Q784.63-396 720-396q-39 0-75 20t-62 52h81v28H536v-128h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q904-316.36 904-240q0 76.36-53.82 130.18Q796.36-56 720-56ZM172-172v-616h616v252q-16.62-3.83-33.81-5.91Q737-544 720-544q-47 0-89 13t-78 37H306v28h211q-27 25-48 55t-34 65H306v28h120q-5 19-7.5 38.5T416-240q0 17.37 2 34.19 2 16.81 6 33.81H172Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesW100Filled.displayName = 'OnesyIconMaterialSourceNotesW100Filled';

export default IconMaterialSourceNotesW100Filled;
