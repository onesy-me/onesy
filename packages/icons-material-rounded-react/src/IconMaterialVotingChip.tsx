import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVotingChip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VotingChip'

      short_name='VotingChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm0-80h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm10-170v60q0 13 8.5 21.5T360-360q13 0 21.5-8.5T390-390v-60h60q13 0 21.5-8.5T480-480q0-13-8.5-21.5T450-510h-60v-60q0-13-8.5-21.5T360-600q-13 0-21.5 8.5T330-570v60h-60q-13 0-21.5 8.5T240-480q0 13 8.5 21.5T270-450h60Zm290-90v150q0 13 8.5 21.5T650-360q13 0 21.5-8.5T680-390v-170q0-17-11.5-28.5T640-600h-50q-13 0-21.5 8.5T560-570q0 13 8.5 21.5T590-540h30Zm-140 60Z"/>
    </Icon>
  );
});

IconMaterialVotingChip.displayName = 'OnesyIconMaterialVotingChip';

export default IconMaterialVotingChip;
