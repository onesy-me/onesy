import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthFullW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='WidthFullW100Filled'

      short_name='WidthFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v416q0 25-17.5 42.5T768-212H192Zm0-28h30v-480h-30q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm546 0h30q14 0 23-9t9-23v-416q0-14-9-23t-23-9h-30v480Z"/>
    </Icon>
  );
};

IconMaterialWidthFullW100Filled.displayName = 'OnesyIconMaterialWidthFullW100Filled';

export default IconMaterialWidthFullW100Filled;
