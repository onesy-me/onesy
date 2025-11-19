import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocamW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='VideocamW100Filled'

      short_name='Videocam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M217-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803-574v188q0 10-9.5 13.5T777-376l-84-84v188q0 26-17 43t-43 17H217Z"/>
    </Icon>
  );
};

IconMaterialVideocamW100Filled.displayName = 'OnesyIconMaterialVideocamW100Filled';

export default IconMaterialVideocamW100Filled;
