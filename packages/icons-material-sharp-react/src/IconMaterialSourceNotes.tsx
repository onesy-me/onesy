import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSourceNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotes'

      short_name='SourceNotes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-560 560Zm80-400h400v-80H280v80Zm0 160h190q20-24 43.5-44.5T565-520H280v80Zm0 160h122q2-21 7.5-41t13.5-39H280v80ZM120-120v-720h720v303q-19-8-39-13.5t-41-7.5v-202H200v560h202q2 21 7.5 41t13.5 39H120Zm600 80q-73 0-127.5-45.5T524-200h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T622-340h58v60H520v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialSourceNotes.displayName = 'OnesyIconMaterialSourceNotes';

export default IconMaterialSourceNotes;
