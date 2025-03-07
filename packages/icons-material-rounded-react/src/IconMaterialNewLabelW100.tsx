import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelW100'

      short_name='NewLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-252h-72q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h72q15 0 28.5-7t21.5-19l111-155q6-8 6-19t-6-19L630-654q-8-12-21.5-19t-28.5-7H232q-14 0-23 9t-9 23v60q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-60q0-24.75 17.63-42.38Q207.25-708 232-708h348q22.18 0 41.59 11Q641-686 654-668l109 153q11 15.97 11 34.99Q774-461 763-445L654-290q-14 18-32.5 28T580-252ZM474-480ZM226-306H120q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H254v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Z"/>
    </Icon>
  );
});

IconMaterialNewLabelW100.displayName = 'OnesyIconMaterialNewLabelW100';

export default IconMaterialNewLabelW100;
