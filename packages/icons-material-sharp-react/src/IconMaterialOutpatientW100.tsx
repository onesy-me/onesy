import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutpatientW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientW100'

      short_name='Outpatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-172v-616h460v616H396v-156H248v156H92Zm28-28h100v-156h204v156h100v-560H120v560Zm100-256h52v-52h-52v52Zm0-152h52v-52h-52v52Zm152 152h52v-52h-52v52Zm0-152h52v-52h-52v52Zm394 231-20-19 70-70H652v-28h164l-70-70 20-19 103 103-103 103ZM220-200v-156h204v156-156H220v156Z"/>
    </Icon>
  );
});

IconMaterialOutpatientW100.displayName = 'OnesyIconMaterialOutpatientW100';

export default IconMaterialOutpatientW100;
