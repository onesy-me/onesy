import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVotingChipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VotingChipW100Filled'

      short_name='VotingChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-252q-95.27 0-161.64-66.31Q92-384.62 92-479.81t66.36-161.69Q224.73-708 320-708h320q95.27 0 161.64 66.31Q868-575.38 868-480.19T801.64-318.5Q735.27-252 640-252H320Zm26-214v76q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-76h76q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4h-76v-76q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v76h-76q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h76Zm290-90v166q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-164q0-12.75-8.62-21.38Q646.75-584 634-584h-44q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h46Z"/>
    </Icon>
  );
});

IconMaterialVotingChipW100Filled.displayName = 'OnesyIconMaterialVotingChipW100Filled';

export default IconMaterialVotingChipW100Filled;
