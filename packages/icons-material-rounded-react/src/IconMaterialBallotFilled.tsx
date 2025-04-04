import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBallotFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotFilled'

      short_name='Ballot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-560q17 0 28.5-11.5T680-600q0-17-11.5-28.5T640-640H520q-17 0-28.5 11.5T480-600q0 17 11.5 28.5T520-560h120Zm0 240q17 0 28.5-11.5T680-360q0-17-11.5-28.5T640-400H520q-17 0-28.5 11.5T480-360q0 17 11.5 28.5T520-320h120ZM360-520q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0 240q33 0 56.5-23.5T440-360q0-33-23.5-56.5T360-440q-33 0-56.5 23.5T280-360q0 33 23.5 56.5T360-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialBallotFilled.displayName = 'OnesyIconMaterialBallotFilled';

export default IconMaterialBallotFilled;
