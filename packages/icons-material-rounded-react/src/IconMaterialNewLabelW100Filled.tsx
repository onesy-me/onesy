import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelW100Filled'

      short_name='NewLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M239.96-186q-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H120q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H254v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM508-252q-5.95 0-9.98-4.02Q494-260.05 494-266v-128q0-24.75-17.62-42.38Q458.75-454 434-454h-60v-60q0-24.75-17.62-42.38Q338.75-574 314-574H186q-5.95 0-9.98-4.03Q172-582.05 172-588v-60q0-24.75 17.63-42.38Q207.25-708 232-708h348q22.18 0 41.59 11Q641-686 654-668l109 153q11 15.97 11 34.99Q774-461 763-445L654-290q-14 18-32.5 28T580-252h-72Z"/>
    </Icon>
  );
});

IconMaterialNewLabelW100Filled.displayName = 'OnesyIconMaterialNewLabelW100Filled';

export default IconMaterialNewLabelW100Filled;
