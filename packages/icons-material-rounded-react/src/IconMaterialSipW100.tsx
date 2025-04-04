import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipW100'

      short_name='Sip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-376q5.96 0 9.96-4.02 4-4.03 4-9.98v-180q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v180q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm109.91 0q6.05 0 10.05-3.97 4-3.96 4-10.03v-66h112q11.9 0 19.95-8.05Q744-472.1 744-484v-72q0-11.9-8.05-19.95Q727.9-584 716-584H591q-6 0-10.5 4.5T576-569v179q0 6.07 3.95 10.03 3.96 3.97 10 3.97ZM230-376h126q11.9 0 19.95-8.05Q384-392.1 384-404v-62q0-11.9-8.05-19.95Q367.9-494 356-494H244v-62h126q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4H244q-11.9 0-19.95 8.05Q216-567.9 216-556v62q0 11.9 8.05 19.95Q232.1-466 244-466h112v62H230q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4Zm374-108v-72h112v72H604ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSipW100.displayName = 'OnesyIconMaterialSipW100';

export default IconMaterialSipW100;
