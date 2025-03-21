import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIndoorW100Filled'

      short_name='NestCamIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-527q-20.62 0-35.31-14.69Q430-556.38 430-577q0-20.63 14.69-35.31Q459.38-627 480-627q20.63 0 35.31 14.69Q530-597.63 530-577q0 20.62-14.69 35.31Q500.63-527 480-527ZM318-157q0-11 8.5-19.5T346-185h120q0-61-29.43-113.87Q407.14-351.73 356-386q-48-32-76-82.47-28-50.48-28-108.28 0-95.25 66.31-161.75t161.5-66.5q95.19 0 161.69 66.45T708-576.7q0 58.7-27.5 109.7T603-385q-52 32-80.5 85.5T494-185h120q11.14 0 19.07 8.5T641-157H318Zm162-220q83 0 141.5-58.5T680-577q0-83-58.5-141.5T480-777q-83 0-141.5 58.5T280-577q0 83 58.5 141.5T480-377Z"/>
    </Icon>
  );
});

IconMaterialNestCamIndoorW100Filled.displayName = 'OnesyIconMaterialNestCamIndoorW100Filled';

export default IconMaterialNestCamIndoorW100Filled;
