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
      <path d="M368-200v-168H200v136q0 14 9 23t23 9h136Zm196 0v-156l-12-12H396v168h168Zm28 0Zm112-168Zm-336-28v-156l-12-12H200v168h168Zm28 0Zm364 0v-168H592v84l84 84h84ZM508-564Zm-308-28Zm364 0v-168H396v84l84 84h84Zm196 0v-136q0-14-9-23t-23-9H592v168h168ZM312-760Zm476 476L284-788h444q26 0 43 17t17 43v444ZM232-172q-26 0-43-17t-17-43v-556l616 616H232Zm610 94L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialGridOffW100.displayName = 'OnesyIconMaterialGridOffW100';

export default IconMaterialGridOffW100;
