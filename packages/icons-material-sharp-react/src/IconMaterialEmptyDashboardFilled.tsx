import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmptyDashboardFilled = (props: IIcon) => {

  return (
    <Icon
      name='EmptyDashboardFilled'

      short_name='EmptyDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h220v-160H240v160Zm0-200h220v-280H240v280Zm260 200h220v-280H500v280Zm0-320h220v-160H500v160ZM120-120v-720h720v160h80v80h-80v80h80v80h-80v80h80v80h-80v160H120Z"/>
    </Icon>
  );
};

IconMaterialEmptyDashboardFilled.displayName = 'OnesyIconMaterialEmptyDashboardFilled';

export default IconMaterialEmptyDashboardFilled;
