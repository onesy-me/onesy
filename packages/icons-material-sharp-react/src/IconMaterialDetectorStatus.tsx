import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorStatus = (props: IIcon) => {

  return (
    <Icon
      name='DetectorStatus'

      short_name='DetectorStatus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-120 296-262l57-56 85 85 169-170 57 57-226 226ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z"/>
    </Icon>
  );
};

IconMaterialDetectorStatus.displayName = 'OnesyIconMaterialDetectorStatus';

export default IconMaterialDetectorStatus;
