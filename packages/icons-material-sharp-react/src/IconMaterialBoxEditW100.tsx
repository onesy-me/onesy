import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoxEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditW100'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M215-678h529l-68-82H283l-68 82Zm185 239 80-40 80 40v-211H400v211ZM172-172v-498l98-118h419l99 120v62l-28 28v-72H588v243l-9 9-99-49-108 54v-257H200v450h272v28H172Zm416-478h172-172Zm-388 0h379-379Zm372 478v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM600-200h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100.displayName = 'OnesyIconMaterialBoxEditW100';

export default IconMaterialBoxEditW100;
