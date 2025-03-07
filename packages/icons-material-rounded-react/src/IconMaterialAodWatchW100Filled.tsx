import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodWatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodWatchW100Filled'

      short_name='AodWatch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-500q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h180q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H390Zm40 88q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h100q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H430Zm14 238q-19.97 0-36.49-12Q391-198 386-218l-18-64q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l18-64q5-20 21.51-32 16.52-12 36.49-12h72q19.97 0 36.49 12Q569-762 574-742l18 64q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-18 64q-5 20-21.51 32-16.52 12-36.49 12h-72Zm36-106q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialAodWatchW100Filled.displayName = 'OnesyIconMaterialAodWatchW100Filled';

export default IconMaterialAodWatchW100Filled;
