import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneAndroidFilled = (props: IIcon) => {

  return (
    <Icon
      name='PhoneAndroidFilled'

      short_name='PhoneAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160h160v-40H400v40ZM200-40v-880h560v880H200Zm80-280h400v-400H280v400Z"/>
    </Icon>
  );
};

IconMaterialPhoneAndroidFilled.displayName = 'OnesyIconMaterialPhoneAndroidFilled';

export default IconMaterialPhoneAndroidFilled;
