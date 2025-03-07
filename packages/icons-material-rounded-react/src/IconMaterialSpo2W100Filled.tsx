import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpo2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2W100Filled'

      short_name='Spo2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M510-212q-11 0-19.5-8.5T482-240v-152q0-11 8.5-19.5T510-420h92q11 0 19.5 8.5T630-392v152q0 11-8.5 19.5T602-212h-92Zm0-28h92v-152h-92v152ZM718-96q-11.9 0-19.95-8.05Q690-112.1 690-124v-62q0-11.9 8.05-19.95Q706.1-214 718-214h94v-62H704q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h108q11.9 0 19.95 8.05Q840-287.9 840-276v62q0 11.9-8.05 19.95Q823.9-186 812-186h-94v62h108q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H718ZM400.4-801q5.6 0 10.6 2t10 6q57 52 108 108.5t89.71 122.82Q627-548 619-534q-8 14-24.68 14H442q-24.75 0-42.37 17.62Q382-484.75 382-460v291q0 14-10.88 23.5Q360.23-136 346-136q-103 0-158.5-80T132-408q0-119.83 80-211.42Q292-711 380-793q5-4 9.9-6t10.5-2Z"/>
    </Icon>
  );
});

IconMaterialSpo2W100Filled.displayName = 'OnesyIconMaterialSpo2W100Filled';

export default IconMaterialSpo2W100Filled;
