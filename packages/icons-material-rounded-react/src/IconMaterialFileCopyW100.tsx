import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyW100'

      short_name='FileCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-252H352q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h249q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v369q0 26-17 43t-43 17Zm32-440H642q-13 0-21.5-8.5T612-722v-118H352q-12 0-22 10t-10 22v496q0 12 10 22t22 10h376q12 0 22-10t10-22v-380ZM192-92q-26 0-43-17t-17-43v-462q0-6 4-10t10-4q6 0 10 4t4 10v462q0 12 10 22t22 10h342q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm128-748v148-148 560-560Z"/>
    </Icon>
  );
});

IconMaterialFileCopyW100.displayName = 'OnesyIconMaterialFileCopyW100';

export default IconMaterialFileCopyW100;
