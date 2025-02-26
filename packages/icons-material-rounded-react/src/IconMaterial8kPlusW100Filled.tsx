import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial8kPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kPlusW100Filled'

      short_name='8kPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-376h92q11.9 0 19.95-8.05Q408-392.1 408-404v-152q0-11.9-8.05-19.95Q391.9-584 380-584h-92q-11.9 0-19.95 8.05Q260-567.9 260-556v152q0 11.9 8.05 19.95Q276.1-376 288-376Zm0-28v-62h92v62h-92Zm0-90v-62h92v62h-92Zm207 22 94 92q2 2 10 4 10 0 13.5-9t-3.5-16l-84-81 85-79q7-6 3-14.5t-13-8.5q-2 0-4.57 1.09-2.56 1.09-4.43 2.91l-96 90v-80q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v180q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-82Zm177 6v46q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2 5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-46h46q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-46v-46q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v46h-46q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2h46ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterial8kPlusW100Filled.displayName = 'OnesyIconMaterial8kPlusW100Filled';

export default IconMaterial8kPlusW100Filled;
