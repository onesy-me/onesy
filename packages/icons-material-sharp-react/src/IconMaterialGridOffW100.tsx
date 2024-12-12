import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffW100'

      short_name='GridOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-200v-168H200v168h168Zm196 0v-156l-12-12H396v168h168Zm28 0Zm112-168Zm-336-28v-156l-12-12H200v168h168Zm28 0Zm364 0v-168H592v84l84 84h84ZM508-564Zm-308-28Zm364 0v-168H396v84l84 84h84Zm196 0v-168H592v168h168ZM312-760Zm476 476L284-788h504v504ZM172-172v-616l616 616H172ZM852-68 90-830l20-20L872-88l-20 20Z"/>
    </Icon>
  );
});

IconMaterialGridOffW100.displayName = 'OnesyIconMaterialGridOffW100';

export default IconMaterialGridOffW100;
