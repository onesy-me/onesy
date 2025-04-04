import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHlsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsOffW100Filled'

      short_name='HlsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M776-584q11.9 0 19.95 8.05Q804-567.9 804-556v22q0 5-5 7.5t-9 6.5q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8v-22H664v66h120q8.5 0 14.25 5.75T804-470v66q0 11.9-8.05 19.95Q787.9-376 776-376h-79l-28-28h107v-66H656q-8.5 0-14.25-5.75T636-490v-66q0-11.9 8.05-19.95Q652.1-584 664-584h112ZM136-390v-180q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v66h112v-66q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v180q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-86H164v86q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03Zm648 254L136-784q-4-4-4.5-9.5t4.28-10.5q5.22-5 10.22-5 5 0 10 5l648 648q4 4 4.5 9.5t-4.72 10.72Q799-131 794-131q-5 0-10-5ZM412-399v-129l28 28v96h96l28 28H435q-9 0-16-7t-7-16Z"/>
    </Icon>
  );
});

IconMaterialHlsOffW100Filled.displayName = 'OnesyIconMaterialHlsOffW100Filled';

export default IconMaterialHlsOffW100Filled;
