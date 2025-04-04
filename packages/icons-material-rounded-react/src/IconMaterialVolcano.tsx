import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolcano = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Volcano'

      short_name='Volcano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-80H203q-44 0-67.5-36t-5.5-76l89-200q10-22 29.5-35t43.5-13h68l60-150q9-23 29-36.5t45-13.5h166q27 0 48 16t29 42l114 400q11 38-13 70t-64 32Zm-571-80h571L660-560H494l-70 175q-5 11-15 18t-22 7h-95l-89 200Zm317-640v-80q0-17 11.5-28.5T560-920q17 0 28.5 11.5T600-880v80q0 17-11.5 28.5T560-760q-17 0-28.5-11.5T520-800Zm153 31 57-57q11-11 27.5-11t28.5 11q12 12 12 28t-12 28l-57 57q-11 11-27.5 11.5T673-713q-11-11-11-28t11-28Zm-282 56-57-57q-11-11-11-27.5t11-28.5q12-12 28-12t28 12l57 57q11 11 11.5 27.5T447-713q-11 11-28 11t-28-11ZM203-160h571-571Z"/>
    </Icon>
  );
});

IconMaterialVolcano.displayName = 'OnesyIconMaterialVolcano';

export default IconMaterialVolcano;
