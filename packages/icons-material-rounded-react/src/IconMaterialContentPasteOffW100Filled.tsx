import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentPasteOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffW100Filled'

      short_name='ContentPasteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-294q-5 0-9.5-3.5T760-308v-420q0-12-10-22t-22-10H628v50q0 13-8.5 21.5T598-680H417q-12 0-23.5-5T374-698l-39-39q-5-5-7-10.5t-2-10.5q0-11 8-20.5t22-9.5h67q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h191q25 0 42.5 17.5T788-728v420q0 7-4.5 10.5T774-294ZM480-748q13 0 21.5-8.5T510-778q0-13-8.5-21.5T480-808q-13 0-21.5 8.5T450-778q0 13 8.5 21.5T480-748Zm240 548L200-720v488q0 12 10 22t22 10h488Zm-488 28q-25 0-42.5-17.5T172-232v-496q0-5 .5-8.5t2.5-8.5l-39-39q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5l-39-39q-5 2-8.5 2.5t-8.5.5H232Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffW100Filled.displayName = 'OnesyIconMaterialContentPasteOffW100Filled';

export default IconMaterialContentPasteOffW100Filled;
