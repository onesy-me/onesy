import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial2dW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2dW100Filled'

      short_name='2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M308-404v-62h92q11.9 0 19.95-8.05Q428-482.1 428-494v-62q0-11.9-8.05-19.95Q411.9-584 400-584H294q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h106v62h-92q-11.9 0-19.95 8.05Q280-477.9 280-466v76q0 6.07 3.97 10.03Q287.93-376 294-376h120q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H308Zm218 28h109q18.75 0 31.88-13.13Q680-402.25 680-421v-118q0-18.75-13.12-31.88Q653.75-584 635-584H526q-6.07 0-10.03 3.97Q512-576.07 512-570v180q0 6.07 3.97 10.03Q519.93-376 526-376Zm14-28v-152h96q6 0 11 5t5 11v120q0 6-5 11t-11 5h-96ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterial2dW100Filled.displayName = 'OnesyIconMaterial2dW100Filled';

export default IconMaterial2dW100Filled;
