import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDelete'

      short_name='AutoDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-720v520-520Zm0 600q-33 0-56.5-23.5T200-200v-520h-1q-17 0-28-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v140q0 17-11.5 28.5T720-540q-17 0-28.5-11.5T680-580v-140H280v520h107q17 0 28.5 11.5T427-160q0 16-11.5 28T387-120H280Zm120-520q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640Zm160 0q-17 0-28.5 11.5T520-600v60q0 17 11.5 28.5T560-500q17 0 28.5-11.5T600-540v-60q0-17-11.5-28.5T560-640ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q41 0 77.5 16t63.5 43q27 27 43 63.5t16 77.5q0 83-58.5 141.5T680-80Zm20-208v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60Z"/>
    </Icon>
  );
});

IconMaterialAutoDelete.displayName = 'OnesyIconMaterialAutoDelete';

export default IconMaterialAutoDelete;
