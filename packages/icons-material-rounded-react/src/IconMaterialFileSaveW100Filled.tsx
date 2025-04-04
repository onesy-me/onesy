import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileSaveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveW100Filled'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m699-178-92-92q-4-3.67-4-9.33 0-5.67 4-9.67t9-4.5q5-.5 9 3.5l81 81v-190q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v190l81-81q3.67-4 9.33-4 5.67 0 9.67 4t4 9.67q0 5.66-4 9.33l-93 93q-9 9-21 9t-21-9ZM600-26q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H600ZM246-186q-24 0-42-18t-18-42v-548q0-24 18-42t42-18h249q12.44 0 23.72 5T538-836l178 178q8 8 13 19.28 5 11.28 5 23.72v72q0 12.75-8.62 21.37Q716.75-513 704-513H546q-24.75 0-42.37 17.62Q486-477.75 486-453v237q0 12.75-8.62 21.37Q468.75-186 456-186H246Zm305-440h155L506-826l200 200-200-200v155q0 18.75 13.13 31.87Q532.25-626 551-626Z"/>
    </Icon>
  );
});

IconMaterialFileSaveW100Filled.displayName = 'OnesyIconMaterialFileSaveW100Filled';

export default IconMaterialFileSaveW100Filled;
