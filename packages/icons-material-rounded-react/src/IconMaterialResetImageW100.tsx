import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetImageW100'

      short_name='ResetImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M334-560H202q-13 0-21.5-8.5T172-590v-132q0-6 4-10t10-4q6 0 10 4t4 10v114q37-80 111.5-130T480-788q101 0 179.5 57.5T770-583q2 5-.5 10t-7.5 7q-5 2-10.5-.5T744-574q-29-82-100.5-134T480-760q-88 0-157 48T222-588h112q6 0 10 4t4 10q0 6-4 10t-10 4Zm14 294h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8ZM232-132q-25 0-42.5-17.5T172-192v-242q0-6 4-10t10-4q6 0 10 4t4 10v242q0 14 9 23t23 9h496q14 0 23-9t9-23v-242q0-6 4-10t10-4q6 0 10 4t4 10v242q0 25-17.5 42.5T728-132H232Z"/>
    </Icon>
  );
});

IconMaterialResetImageW100.displayName = 'OnesyIconMaterialResetImageW100';

export default IconMaterialResetImageW100;
