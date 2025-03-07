import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkdownCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownCopyW100Filled'

      short_name='MarkdownCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h296q26 0 43 17t17 43v416q0 26-17 43t-43 17H366ZM257.61-184Q232-184 215-201t-17-43v-430q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v430q0 12 10 22t22 10h310q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H257.61ZM428-636h72v106q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-106h72v166q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-166q0-11.9-8.05-19.95Q611.9-664 600-664H428q-11.9 0-19.95 8.05Q400-647.9 400-636v166q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-166Z"/>
    </Icon>
  );
});

IconMaterialMarkdownCopyW100Filled.displayName = 'OnesyIconMaterialMarkdownCopyW100Filled';

export default IconMaterialMarkdownCopyW100Filled;
