import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessMessagesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessMessagesW100'

      short_name='BusinessMessages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-212q-26 0-43-17t-17-43v-356l-79-95q-6-8-2.5-16.5T154-748h584q26 0 43 17t17 43v416q0 26-17 43t-43 17H282Zm-32-508v448q0 12 10 22t22 10h456q12 0 22-10t10-22v-416q0-12-10-22t-22-10H250Zm192 318h190q6 0 10-4t4-10q0-6-4-10t-10-4H410q-10 0-13.5 9.5T400-404l82 82q4 4 9.5 4.5T502-322q5-5 5-10t-5-10l-60-60Zm136-156H388q-6 0-10 4t-4 10q0 6 4 10t10 4h222q10 0 13.5-9.5T620-556l-82-82q-4-4-9.5-4.5T518-638q-5 5-5 10t5 10l60 60ZM250-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialBusinessMessagesW100.displayName = 'OnesyIconMaterialBusinessMessagesW100';

export default IconMaterialBusinessMessagesW100;
