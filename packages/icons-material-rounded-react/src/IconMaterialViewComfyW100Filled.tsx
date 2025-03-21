import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyW100Filled'

      short_name='ViewComfy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M162-494q-12.75 0-21.37-8.63Q132-511.25 132-524v-194q0-12.75 8.63-21.38Q149.25-748 162-748h636q12.75 0 21.38 8.62Q828-730.75 828-718v194q0 12.75-8.62 21.37Q810.75-494 798-494H162Zm236 282q-12.75 0-21.37-8.63Q368-229.25 368-242v-194q0-12.75 8.63-21.38Q385.25-466 398-466h400q12.75 0 21.38 8.62Q828-448.75 828-436v194q0 12.75-8.62 21.37Q810.75-212 798-212H398Zm-236 0q-12.75 0-21.37-8.63Q132-229.25 132-242v-194q0-12.75 8.63-21.38Q149.25-466 162-466h148q12.75 0 21.38 8.62Q340-448.75 340-436v194q0 12.75-8.62 21.37Q322.75-212 310-212H162Z"/>
    </Icon>
  );
});

IconMaterialViewComfyW100Filled.displayName = 'OnesyIconMaterialViewComfyW100Filled';

export default IconMaterialViewComfyW100Filled;
