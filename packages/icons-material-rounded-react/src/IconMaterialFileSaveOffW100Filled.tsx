import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileSaveOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOffW100Filled'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m799-236-19-20 34-34q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-34 34Zm-65-66-28-28v-69q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v97Zm-30-211H523L233-803q-14-14-6.34-32.5Q234.31-854 254-854h241q12.44 0 23.72 5T538-836l178 178q8 8 13 19.28 5 11.28 5 23.72v72q0 12.75-8.62 21.37Q716.75-513 704-513ZM600-26q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h230L486-398v182q0 12.75-8.62 21.37Q468.75-186 456-186H246q-24 0-42-18t-18-42v-452L74-811q-4-4-3.5-9t4.5-9.17q3.67-3.83 9.33-3.83 5.67 0 9.67 4L865-58q1.67 1.74 2.83 4.52Q869-50.7 869-47.91v8q0 5.91-4.03 9.91-4.02 4-9.97 4H600Zm-94-800v155q0 18.75 13.13 31.87Q532.25-626 551-626h155L506-826l200 200-200-200Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOffW100Filled.displayName = 'OnesyIconMaterialFileSaveOffW100Filled';

export default IconMaterialFileSaveOffW100Filled;
