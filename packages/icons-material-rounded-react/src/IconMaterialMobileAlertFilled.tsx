import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileAlertFilled = (props: IIcon) => {

  return (
    <Icon
      name='MobileAlertFilled'

      short_name='MobileAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm200-240q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480v-160q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v160q0 17 11.5 28.5T480-440Z"/>
    </Icon>
  );
};

IconMaterialMobileAlertFilled.displayName = 'OnesyIconMaterialMobileAlertFilled';

export default IconMaterialMobileAlertFilled;
