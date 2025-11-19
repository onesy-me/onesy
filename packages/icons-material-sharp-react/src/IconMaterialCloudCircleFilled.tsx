import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudCircleFilled = (props: IIcon) => {

  return (
    <Icon
      name='CloudCircleFilled'

      short_name='CloudCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-320h300q50 0 85-35t35-85q0-50-35-85t-85-35q-8-58-53-99t-101-41q-51 0-92.5 26T332-600q-57 5-94.5 43.5T200-460q0 58 41 99t99 41ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialCloudCircleFilled.displayName = 'OnesyIconMaterialCloudCircleFilled';

export default IconMaterialCloudCircleFilled;
