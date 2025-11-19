import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCheck = (props: IIcon) => {

  return (
    <Icon
      name='MobileCheck'

      short_name='MobileCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm162-352-28-28q-11-11-28-11t-28 11q-11 11-11 28t11 28l56 56q12 12 28 12t28-12l142-142q11-11 11-28t-11-28q-11-11-28-11t-28 11L442-472Z"/>
    </Icon>
  );
};

IconMaterialMobileCheck.displayName = 'OnesyIconMaterialMobileCheck';

export default IconMaterialMobileCheck;
