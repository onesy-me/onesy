import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCardsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardsFilled'

      short_name='Cards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-500H280q-17 0-28.5-11.5T240-540v-140q0-17 11.5-28.5T280-720h140q17 0 28.5 11.5T460-680v140q0 17-11.5 28.5T420-500Zm0 260H280q-17 0-28.5-11.5T240-280v-140q0-17 11.5-28.5T280-460h140q17 0 28.5 11.5T460-420v140q0 17-11.5 28.5T420-240Zm260-260H540q-17 0-28.5-11.5T500-540v-140q0-17 11.5-28.5T540-720h140q17 0 28.5 11.5T720-680v140q0 17-11.5 28.5T680-500Zm0 260H540q-17 0-28.5-11.5T500-280v-140q0-17 11.5-28.5T540-460h140q17 0 28.5 11.5T720-420v140q0 17-11.5 28.5T680-240ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialCardsFilled.displayName = 'OnesyIconMaterialCardsFilled';

export default IconMaterialCardsFilled;
