import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonBook = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonBook'

      short_name='PersonBook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q-56 0-107 17.5T280-170v10h400v-10q-42-35-93-52.5T480-240Zm0-80q69 0 129 21t111 59v-560H240v560q51-38 111-59t129-21Zm0-160q-25 0-42.5-17.5T420-540q0-25 17.5-42.5T480-600q25 0 42.5 17.5T540-540q0 25-17.5 42.5T480-480ZM160-80v-800h640v800H160Zm320-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-140Z"/>
    </Icon>
  );
});

IconMaterialPersonBook.displayName = 'OnesyIconMaterialPersonBook';

export default IconMaterialPersonBook;
