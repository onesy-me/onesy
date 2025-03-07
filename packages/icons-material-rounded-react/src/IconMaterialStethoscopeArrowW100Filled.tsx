import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStethoscopeArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeArrowW100Filled'

      short_name='StethoscopeArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M571-266q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h189l-79-80q-3.67-4-3.83-9.5Q677-389 681-393t9.82-4q5.82 0 10.18 4l92 92q9 9 9 21t-9 21l-92 92q-4.09 4-9.55 4-5.45 0-9.95-4-4.5-4-4.33-9.5.16-5.5 3.83-9.5l79-80H571Zm-43 134q-87 0-148-60.5T319-340v-20q-73-5-123.5-59T145-548v-184q0-12.75 8.63-21.38Q162.25-762 175-762h90v-26q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v80q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-26h-92v186q0 66 47 113t113 47q66 0 113-47t47-113v-186h-92v26q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-80q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v26h90q12.75 0 21.38 8.62Q521-744.75 521-732v184q0 75-50.5 129T347-360v20q0 75 53 127.5T528-160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeArrowW100Filled.displayName = 'OnesyIconMaterialStethoscopeArrowW100Filled';

export default IconMaterialStethoscopeArrowW100Filled;
