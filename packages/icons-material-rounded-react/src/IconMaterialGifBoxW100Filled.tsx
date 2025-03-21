import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGifBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBoxW100Filled'

      short_name='GifBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm108-234h40q14.45 0 24.23-9.77Q414-425.55 414-440v-20q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v20q0 2-2 4t-4 2h-40q-2 0-4-2t-2-4v-80q0-2 1.5-4t3.5-2h60q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-59q-14.45 0-24.23 9.78Q306-534.45 306-520v80q0 14.45 9.77 24.23Q325.55-406 340-406Zm140 0q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-120q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v120q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm80 0q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-46h46q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-46v-32h66q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8 0-5.6-4.2-9.8-4.2-4.2-9.8-4.2h-80q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v120q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Z"/>
    </Icon>
  );
});

IconMaterialGifBoxW100Filled.displayName = 'OnesyIconMaterialGifBoxW100Filled';

export default IconMaterialGifBoxW100Filled;
