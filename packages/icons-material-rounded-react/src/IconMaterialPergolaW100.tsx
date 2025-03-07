import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPergolaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaW100'

      short_name='Pergola'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-186v-628q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h560v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v628q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-386H200v386q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm28-414h560v-120H200v120Zm266 414v-97h-97q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h221q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-96v97q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98ZM200-600v-120 120Z"/>
    </Icon>
  );
});

IconMaterialPergolaW100.displayName = 'OnesyIconMaterialPergolaW100';

export default IconMaterialPergolaW100;
