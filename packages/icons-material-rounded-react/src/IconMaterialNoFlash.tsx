import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFlash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlash'

      short_name='NoFlash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-57-72-71q-4 21-20.5 34.5T660-80H140q-25 0-42.5-17.5T80-140v-384q0-25 17.5-42.5T140-584h106l8-9L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM160-160h480v-47L537-310q-11 48-48.5 79T400-200q-58 0-99-41t-41-99q0-51 31-88.5t79-48.5l-27-27H160v344Zm240-120q25 0 42.5-17.5T460-340q0-25-17.5-42.5T400-400q-25 0-42.5 17.5T340-340q0 25 17.5 42.5T400-280Zm320-244v73q0 17-11.5 28.5T680-411q-17 0-28.5-12T640-452v-52h-69l-68-68q-14-14-12.5-29.5T503-628q11-11 26.5-12.5T559-628l45 44h56q25 0 42.5 17.5T720-524Zm40-156h-20q-8 0-14-6t-6-14v-160q0-8 6-14t14-6h109q11 0 17.5 9t1.5 19l-52 116h30q11 0 16.5 10t.5 20l-84 152q-4 7-11.5 5t-7.5-10v-121ZM640-435Zm-148 79Z"/>
    </Icon>
  );
});

IconMaterialNoFlash.displayName = 'OnesyIconMaterialNoFlash';

export default IconMaterialNoFlash;
