import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeakAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakAddW100'

      short_name='LeakAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-420v-28q71 0 132.5-26.5t108-73q46.5-46.5 73-108.49Q512-717.97 512-788h28q0 76-29 143.5t-78.5 117Q383-478 316-449t-144 29Zm0-160v-28q74.7 0 127.35-52.65Q352-713.3 352-788h28q0 88-60 148t-148 60Zm0-160v-48h48q0 20-14 34t-34 14Zm248 568q0-77 29-144t78.5-116.5Q577-482 644.25-511T788-540v28q-70 0-132 26.5t-108.5 73q-46.5 46.5-73 108T448-172h-28Zm160 0q0-88 60-148t148-60v28q-74.7 0-127.35 52.65Q608-246.7 608-172h-28Zm160 0q0-20 14-34t34-14v48h-48Z"/>
    </Icon>
  );
});

IconMaterialLeakAddW100.displayName = 'OnesyIconMaterialLeakAddW100';

export default IconMaterialLeakAddW100;
