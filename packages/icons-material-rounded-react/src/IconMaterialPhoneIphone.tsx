import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneIphone = (props: IIcon) => {

  return (
    <Icon
      name='PhoneIphone'

      short_name='PhoneIphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/>
    </Icon>
  );
};

IconMaterialPhoneIphone.displayName = 'OnesyIconMaterialPhoneIphone';

export default IconMaterialPhoneIphone;
