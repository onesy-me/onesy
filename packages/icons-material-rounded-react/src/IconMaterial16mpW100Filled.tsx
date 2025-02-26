import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial16mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpW100Filled'

      short_name='16mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-696v166q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-180q0-6.07-3.97-10.03Q376.07-724 370-724h-60q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h46Zm168 180h92q11.9 0 19.95-8.05Q644-532.1 644-544v-62q0-11.9-8.05-19.95Q627.9-634 616-634h-92v-62h106q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H524q-11.9 0-19.95 8.05Q496-707.9 496-696v152q0 11.9 8.05 19.95Q512.1-516 524-516Zm0-28v-62h92v62h-92ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm52-244h72v106q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-106h72v166q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-170q0-11-6.5-17.5T460-444H280q-11 0-17.5 6.5T256-420v170q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-166Zm300 120h96q11 0 17.5-6.5T704-320v-100q0-11-6.5-17.5T680-444H570q-6.07 0-10.03 3.97Q556-436.07 556-430v180q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-46Zm0-28v-92h92v92h-92Z"/>
    </Icon>
  );
});

IconMaterial16mpW100Filled.displayName = 'OnesyIconMaterial16mpW100Filled';

export default IconMaterial16mpW100Filled;
