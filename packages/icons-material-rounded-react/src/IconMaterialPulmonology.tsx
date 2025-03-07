import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPulmonology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pulmonology'

      short_name='Pulmonology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-504-75 76q-12 12-28.5 12T348-428q-12-12-12-28.5t12-28.5l92-91v-264q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v264l92 91q12 12 12 28.5T612-428q-12 12-28.5 12T555-428l-75-76ZM200-120q-51 0-85.5-34.5T80-240v-153q0-8 1.5-14.5T85-421l100-267q12-33 42-52.5t65-19.5q45 0 76.5 32.5T400-649v29q0 17-11.5 28.5T360-580q-17 0-28.5-11.5T320-620v-29q0-13-9-22t-21-9q-10 0-18.5 5.5T260-660L160-392v152q0 17 11.5 28.5T200-200h120q17 0 28.5-11.5T360-240v-40q0-17 11.5-28.5T400-320q17 0 28.5 11.5T440-280v40q0 51-35 85.5T320-120H200Zm559 0H639q-50 0-85-34.5T519-240v-40q0-17 11.5-28.5T559-320q17 0 28.5 11.5T599-280v40q0 17 11.5 28.5T639-200h120q17 0 28.5-11.5T799-240v-152L699-660q-4-9-12-14.5t-18-5.5q-13 0-21.5 9t-8.5 22v29q0 17-11.5 28.5T599-580q-17 0-28.5-11.5T559-620v-29q0-46 31.5-78.5T667-760q35 0 64.5 19.5T774-688l100 267q2 7 3.5 13.5T879-393v153q0 51-35 85.5T759-120ZM348-428Zm264 0Z"/>
    </Icon>
  );
});

IconMaterialPulmonology.displayName = 'OnesyIconMaterialPulmonology';

export default IconMaterialPulmonology;
