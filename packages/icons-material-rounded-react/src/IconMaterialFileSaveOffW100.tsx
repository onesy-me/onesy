import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileSaveOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOffW100'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m799-236-19-20 34-34q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-34 34Zm-65-66-28-28v-69q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v97Zm96 248L214-670v424q0 12 10 22t22 10h226q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H246q-24 0-42-18t-18-42v-452L74-811q-3.67-3.75-3.83-9.38Q70-826 74-830.17q3.67-3.83 9.33-3.83 5.67 0 9.67 4L865-58q1.67 1.74 2.83 4.52Q869-50.7 869-47.91v8q0 5.91-4.03 9.91-4.02 4-9.97 4H600q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h230ZM706-626v99q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-88q0-12.44-5-23.72T716-658L538-836q-8-8-19.28-13-11.28-5-23.72-5H218q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h288v155q0 18.75 13.13 31.87Q532.25-626 551-626h155ZM413-471Zm73-79Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOffW100.displayName = 'OnesyIconMaterialFileSaveOffW100';

export default IconMaterialFileSaveOffW100;
