import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesWearablesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearablesW100'

      short_name='DevicesWearables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M182-734h320v-34q0-12-10-22t-22-10H214q-12 0-22 10t-10 22v34Zm32 602q-26 0-43-17t-17-43v-576q0-26 17-43t43.33-17h255.34Q496-828 513-811t17 43v142q0 5.53-4.04 9.26-4.03 3.74-10 3.74-5.96 0-9.96-4.03-4-4.02-4-9.97v-79H182v452h240q5.95 0 9.98 3.9 4.02 3.9 4.02 9.67 0 5.43-4.02 9.93-4.03 4.5-9.98 4.5H182v34q0 12 10 22t22 10h288q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H214Zm456-108q61 0 103.5-42.5T816-386q0-61-42.5-103.5T670-532q-61 0-103.5 42.5T524-386q0 61 42.5 103.5T670-240Zm-44.42 108q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37v-66q-45-21-72.5-63.22t-27.5-95Q496-439 523.5-481t72.5-63v-66q0-12.75 8.51-21.38 8.51-8.62 21.09-8.62h88.82q12.58 0 21.08 8.62 8.5 8.63 8.5 21.38v66q45 21 72.5 63.22t27.5 95Q844-333 816.5-291T744-228v66q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63h-88.82ZM182-226v66-66Zm0-508v-66 66Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesW100.displayName = 'OnesyIconMaterialDevicesWearablesW100';

export default IconMaterialDevicesWearablesW100;
