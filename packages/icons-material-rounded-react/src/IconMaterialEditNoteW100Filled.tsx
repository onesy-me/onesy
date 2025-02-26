import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteW100Filled'

      short_name='EditNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-400q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h252q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H226Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h412q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h412q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm306 478v-36q0-5.57 2-10.78 2-5.22 7-10.22l202-201q5-4 9.89-6 4.89-2 9.78-2 5.33 0 10.65 2 5.33 2 9.68 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L619-221q-5 5-10.22 7-5.21 2-10.78 2h-36q-12.75 0-21.37-8.63Q532-229.25 532-242Zm231-162 37-38-37-38-38 38 38 38ZM560-240h38l144-144-19-19-18-20-145 145v38Zm0 0v-38l145-145 37 39-144 144h-38Z"/>
    </Icon>
  );
});

IconMaterialEditNoteW100Filled.displayName = 'OnesyIconMaterialEditNoteW100Filled';

export default IconMaterialEditNoteW100Filled;
