import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100Filled'

      short_name='Home'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-200v-344q0-14.25 6.38-27 6.37-12.75 17.62-21l208-158q15.68-12 35.84-12Q500-762 516-750l208 158q11.25 8.25 17.63 21 6.37 12.75 6.37 27v344q0 11-8.5 19.5T720-172H580q-12.75 0-21.37-8.63Q550-189.25 550-202v-188q0-12.75-8.62-21.38Q532.75-420 520-420h-80q-12.75 0-21.37 8.62Q410-402.75 410-390v188q0 12.75-8.62 21.37Q392.75-172 380-172H240q-11 0-19.5-8.5T212-200Z"/>
    </Icon>
  );
});

IconMaterialHomeW100Filled.displayName = 'OnesyIconMaterialHomeW100Filled';

export default IconMaterialHomeW100Filled;
