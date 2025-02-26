import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kW100Filled'

      short_name='3k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-472 94 92q2 2 10 4 10 0 13.5-9t-3.5-16l-84-81 85-79q7-6 3-14.5t-13-8.5q-2 0-4.57 1.09-2.56 1.09-4.43 2.91l-96 90v-80q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v180q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-82Zm-142 68H294q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h106q11.9 0 19.95-8.05Q428-392.1 428-404v-152q0-11.9-8.05-19.95Q411.9-584 400-584H294q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h106v62h-66q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2h66v62ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterial3kW100Filled.displayName = 'OnesyIconMaterial3kW100Filled';

export default IconMaterial3kW100Filled;
