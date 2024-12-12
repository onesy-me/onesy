import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOffW100'

      short_name='MicExternalOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M378-688 264-802q8-2 13.5-2h8.5q39 0 66.5 27.5T380-710v9.5q0 4.5-2 12.5Zm362 362-28-28v-326q0-41-27.5-68.5T616-776q-41 0-68.5 27.5T520-680v134l-28-28v-106q0-51 36.5-87.5T616-804q51 0 87.5 36.5T740-680v354Zm52 204L520-394v114q0 51-36.5 87.5T396-156q-51 0-87.5-36.5T272-280h-1q-11 0-19.5-8T241-307l-28-272q-2-14 7-23.5t23-9.5h59L108-806q-4-4-4.5-9.5T108-826q5-5 10-5t10 5l684 684q4 4 4.5 9.5T812-122q-5 5-10 5t-10-5ZM269-308h34l27-276h-89l28 276Zm127 124q41 0 68.5-27.5T492-280v-142L356-558l-25 251q-2 11-10.5 19t-19.5 8h-1q0 41 27.5 68.5T396-184ZM269-584h-28 89-61Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOffW100.displayName = 'OnesyIconMaterialMicExternalOffW100';

export default IconMaterialMicExternalOffW100;
