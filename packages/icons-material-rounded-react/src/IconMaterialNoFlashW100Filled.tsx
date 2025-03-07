import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFlashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashW100Filled'

      short_name='NoFlash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-78 704-216v14q0 19-13.5 32.5T658-156H202q-19 0-32.5-13.5T156-202v-320q0-19 13.5-32.5T202-568h76l35-39-213-213q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM445-475q-4-1-7.5-1H430q-48 0-81 33t-33 81q0 48 33 81t81 33q48 0 81-33t33-81v-7.5q0-3.5-1-7.5l-98-98Zm-15 199q-35 0-60.5-25.5T344-362q0-36 25.5-61t60.5-25q36 0 61 25t25 61q0 35-25 60.5T430-276Zm306-430h-5q-6 0-10.5-4.5T716-721v-88q0-6 4.5-10.5T731-824h49q8 0 12.5 6.5t.5 14.5l-29 65h23q8 0 12.5 7t.5 15l-50 98q-3 5-8.5 4t-5.5-7v-85Zm-32 184v115q0 11-10 15t-18-4L472-600q-5-5-4.5-10.5t4.5-9.5q4-4 9.5-4.5T492-620l52 52h114q19 0 32.5 13.5T704-522Z"/>
    </Icon>
  );
});

IconMaterialNoFlashW100Filled.displayName = 'OnesyIconMaterialNoFlashW100Filled';

export default IconMaterialNoFlashW100Filled;
