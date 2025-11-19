import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileW100 = (props: IIcon) => {

  return (
    <Icon
      name='MobileW100'

      short_name='Mobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-25 0-42.5-17.5T252-152v-656q0-26 17-43t43-17h340q25 0 42.5 17.5T712-808v130q14 0 25 9.5t11 23.5v68q0 14-11 23.5t-25 9.5v392q0 25-17.5 42.5T652-92H312Zm0-28h340q14 0 23-9t9-23v-656q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v656q0 14 9 23t23 9Zm-32 0v-720 720Zm202-584q12 0 20-8t8-20q0-12-8-20t-20-8q-12 0-20 8t-8 20q0 12 8 20t20 8Z"/>
    </Icon>
  );
};

IconMaterialMobileW100.displayName = 'OnesyIconMaterialMobileW100';

export default IconMaterialMobileW100;
