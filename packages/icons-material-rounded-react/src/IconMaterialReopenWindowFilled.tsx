import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReopenWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReopenWindowFilled'

      short_name='ReopenWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440q-17 0-28.5-11.5T800-480v-160H160v400h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160ZM760 0q-57 0-104-28.5T583-105q-7-12-2.5-25.5T598-149q11-5 22 0t17 16q18 33 51 53t72 20q58 0 99-41t41-99q0-58-41-99t-99-41q-28 0-53 10t-45 30h28q13 0 21.5 8.5T720-270q0 13-8.5 21.5T690-240h-90q-17 0-28.5-11.5T560-280v-90q0-13 8.5-21.5T590-400q13 0 21.5 8.5T620-370v27q29-27 65-42t75-15q83 0 141.5 58.5T960-200q0 83-58.5 141.5T760 0Z"/>
    </Icon>
  );
});

IconMaterialReopenWindowFilled.displayName = 'OnesyIconMaterialReopenWindowFilled';

export default IconMaterialReopenWindowFilled;
